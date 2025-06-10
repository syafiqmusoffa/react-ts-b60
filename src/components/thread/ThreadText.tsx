import { ReplyProps, ThreadProps } from "@/types/thread";
import { Button } from "../ui/button";
// import Like from "./Like";
// import Comment from "./Comment";
import DropdownThread from "./DropdownThread";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import ThreadCommentBox from "./ThreadCommentBox";

interface ThreadType {
  thread: ThreadProps;
}
function ThreadText({ thread }: ThreadType) {
  const imgProfile = "https://picsum.photos/200";
  const [like, setLike] = useState<boolean>(false);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <>
      <div className=" border-b border-black px-4 py-3">
        <div className="flex justify-between">
          <section className="flex justify-between gap-x-3">
            <img src={imgProfile} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-white text-lg">{thread.title}</h1>
              <p className="text-gray-600 text-sm">
                by
                <Button
                  variant="link"
                  onClick={() => alert(thread.username)}
                  className="cursor-pointer bg-transparent text-gray-600 text-sm hover:text-gray-400 duration-100"
                >
                  {thread.username}
                </Button>
              </p>
              <p className="text-gray-400 text-sm mb-3">{thread.body}</p>
              {thread.image ? (
                <img
                  className="w-100 rounded-2xl"
                  src={thread.image}
                  alt={thread.title}
                />
              ) : null}
              <div className="flex items-center gap-x-2">
                <div>
                  <button
                    onClick={toggleLike}
                    className="my-3 flex gap-x-2 items-center text-gray-500 hover:text-white duration-200 cursor-pointer"
                  >
                    {like ? (
                      <>
                        <BsHeartFill className="text-red-600" size={20} />
                        <span className="text-white">{thread.likes + 1}</span>
                      </>
                    ) : (
                      <>
                        <BsHeart size={20} />
                        <span className="text-gray-500">{thread.likes}</span>
                      </>
                    )}
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
