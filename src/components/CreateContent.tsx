import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LuImagePlus } from "react-icons/lu";
import { useProfile } from "@/hooks/use-profile";
import { useMutation } from "@tanstack/react-query";
import api from "@/utils/api";
import { toast } from "sonner";

function CreateContent() {
  const { data: profile, isLoading, isError } = useProfile();
  const avatarUrl = profile.avatarUrl
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      formData.append("content", content);
      if (file) formData.append("imageUrl", file); 

      const res = await api.post("/api/thread", formData);
      return res.data;
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Gagal membuat thread");
    },
    onSuccess: () => {
      toast.success("Thread berhasil diunggah!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !profile) return <div>Gagal mengambil profil</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 flex items-center gap-3">
        {profile.avatarUrl ? (
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatarUrl} alt={avatarUrl} />
          </Avatar>
        ) : (
          <Avatar className="w-12 h-12">
            <AvatarFallback>
              {profile.username?.slice(0, 2).toUpperCase() || "US"}
            </AvatarFallback>
          </Avatar>
        )}

        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What is happening?!"
          className="bg-transparent flex-1 p-2 rounded-lg text-white border border-gray-500"
        />

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer"
        >
          <div className="w-16 h-16 flex items-center justify-center">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-gray-500 rounded-2xl">
                <LuImagePlus size={50} />
              </span>
            )}
          </div>
        </div>

        <button
          className="bg-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 duration-200"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "wait..." : "submit"}
        </button>
      </div>
    </form>
  );
}

export default CreateContent;
