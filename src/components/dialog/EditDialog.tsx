import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useProfile } from "@/hooks/use-profile";
import { useEditProfile } from "@/hooks/edit-my-profile";
import { Form, FormField, FormMessage } from "../ui/form";
import { LuImagePlus } from "react-icons/lu";


function EditDialog() {
  const { data: profile, isLoading, isError } = useProfile();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !profile) return <div>Gagal mengambil profil</div>;
  const{ isOpen,isPending, handleDialog,handleSubmit, handleFileChange, setIsopen, setPreview, fileInputRef, setBio, setUsername, setName, preview, form}=useEditProfile()

  

  return (
    <Dialog open={isOpen} onOpenChange={setIsopen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer text-white border-none bg-green-600 hover:bg-green-800 hover:text-white"
        >
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <Form {...form}>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="text-center">Edit Profile</DialogTitle>
              <div className="relative w-full mb-6">
                {/* Background */}
                <div className="h-20 bg-gradient-to-r from-green-200 to-yellow-300 rounded-lg"></div>
                {/* Foto Profil */}
                <label className="absolute -bottom-6 left-4 w-16 h-16 ">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="w-16 h-16 flex items-center justify-center border rounded-full cursor-pointer bg-gray-600 relative">
                    {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : profile.avatarUrl ? (
                      <img
                        src={profile.avatarUrl}
                        alt={profile.username}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <Avatar className="w-full h-full">
                        <AvatarFallback>
                          {profile.username?.slice(0, 2).toUpperCase() || "US"}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                      <LuImagePlus className="text-white text-3xl" />
                    </div>
                  </div>
                </label>
              </div>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>

                <Input
                  id="name"
                  defaultValue={profile.name}
                  className="col-span-3"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
                <FormMessage />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>

                <Input
                  id="username"
                  defaultValue={profile.username}
                  className="col-span-3"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>

                <Input
                  id="bio"
                  defaultValue={profile.bio}
                  className="col-span-3"
                  onChange={(e) => setBio(e.target.value)}
                  type="text"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                disabled={isPending}
                className="cursor-pointer"
              >
                {isPending ? "wait..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditDialog;
