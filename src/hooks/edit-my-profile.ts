import api from "@/utils/api";
import {
  UpdateProfileschemaType,
  UpdateProfileTypes,
} from "@/utils/schemas/UpdateProfileTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useProfile } from "./use-profile";

export function useEditProfile() {
  const { data: profile } = useProfile();
  useEffect(() => {
    if (profile) {
      setBio(profile.bio || "");
      setName(profile.name || "");
      setUsername(profile.username || "");
    }
  }, [profile]);
  const [isOpen, setIsopen] = useState<boolean>(false);
  function handleDialog() {
    setIsopen(false);
  }
  const queryclient = useQueryClient();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const form = useForm<UpdateProfileschemaType>({
    mode: "onChange",
    resolver: zodResolver(UpdateProfileTypes),
  });
  const { mutateAsync: mutateProfile, isPending } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      if (bio !== profile?.bio) formData.append("bio", bio);
      if (username !== profile?.username) formData.append("username", username);
      if (name !== profile?.name) formData.append("name", name);
      if (file) formData.append("avatarUrl", file);
      const res = await api.put("/api/update-profile", formData);
      return res.data;
    },

    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data: any) => {
      toast.success(data.message);
      queryclient.invalidateQueries({ queryKey: ["edit-profile"] });
      handleDialog();
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
    await mutateProfile();
  };
  return {
    form,
    handleSubmit,
    isOpen,
    isPending,
    setIsopen,
    handleDialog,
    setFile,
    setPreview,
    fileInputRef,
    handleFileChange,
    setBio,
    setName,
    setUsername,
    preview,
  };
}
