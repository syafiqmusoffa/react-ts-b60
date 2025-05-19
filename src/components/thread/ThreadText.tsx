import { ThreadProps } from "@/types/thread";
import { Button } from "../ui/button";
import Like from "./Like";
import Comment from "./Comment";
import DropdownThread from "./DropdownThread";

interface ThreadType {
  thread: ThreadProps;
}
function ThreadText({ thread }: ThreadType) {
  const imgProfile = "https://picsum.photos/200";
  return (
    <>
      <div className=" border border-black rounded-lg p-4 bg-gray-800 ">
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
                <Like />
                <Comment />
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
