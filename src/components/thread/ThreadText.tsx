import { ReplyProps, ThreadById, ThreadProps } from "@/types/thread";
import { Button } from "../ui/button";
// import Like from "./Like";
// import Comment from "./Comment";
import DropdownThread from "./DropdownThread";
import {  useState } from "react";


import { useParams } from "react-router-dom";

import { fetchThreadById } from "@/hooks/use-thread-by-id";
import Like from "./Like";
import { Avatar, AvatarFallback } from "../ui/avatar";


function ThreadText() {
  const { id } = useParams();

 
  const { data: thread, isLoading, error } = fetchThreadById(id || "");

  const [like, setLike] = useState<boolean>(false);
  const toggleLike = () => {
    setLike(!like);
  };

  if (isLoading) return <p className="p-3 text-white">Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className=" border-b border-black px-4 py-3">
        <div className="flex justify-between">
          <section className="flex justify-between gap-x-3">
            {thread.author.profile.avatarUrl ? (
              <img
                src={thread.author.profile.avatarUrl}
                alt={thread.author.profile.username}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <Avatar className="w-12 h-12 rounded-full">
                <AvatarFallback>
                  {thread.author.profile.username?.slice(0, 2).toUpperCase() ||
                    "US"}
                </AvatarFallback>
              </Avatar>
            )}
            <div>
              <p className="text-gray-600 text-sm">
                by
                <Button
                  variant="link"
                  onClick={() => alert(thread.author.profile.username)}
                  className="cursor-pointer bg-transparent text-gray-600 text-sm hover:text-gray-400 duration-100"
                >
                  {thread.author.profile.username}
                </Button>
              </p>
              <p className="text-gray-400 text-sm mb-3">{thread.content}</p>
              {thread.imageUrl ? (
                <img
                  className="w-100 h-80 rounded-2xl object-cover"
                  src={thread.imageUrl}
                  alt={thread.author.profile.name}
                />
              ) : null}
              <div className="flex items-center gap-x-2">
                <div>
                  <button
                    onClick={toggleLike}
                    className="my-3 flex gap-x-2 items-center text-gray-500 hover:text-white duration-200 cursor-pointer"
                  >
                    <Like amount={thread.author._count?.PostLike ?? 0} />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <DropdownThread />
        </div>
      </div>
    </>
  );
}

export default ThreadText;
