import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useCreate() {
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState("");
  const {
    mutateAsync: mutateCreate,
    data: dataCreate,
    isPending,
  } = useMutation({
    mutationKey: ["create-thread"],
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
    }
  };

  return { mutateCreate, dataCreate, isPending, setContent, content, handleFileChange };
}
