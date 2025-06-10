import { ThreadProps } from "@/types/thread";
import { Button } from "../ui/button";
import Like from "./Like";
import Comment from "./Comment";
import DropdownThread from "./DropdownThread";
import { NavLink } from "react-router-dom";
import { useThreads } from "@/hooks/use-thread-list";

interface Props {
  thread: ThreadProps;
}

function Thread({ thread }: Props) {
  return (
    <div className="border-t border-black px-3 py-3">
      <div className="flex justify-between mb-6">
        <section className="flex justify-between gap-x-3">
          <img
            src={thread.author.profile.avatarUrl}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-white text-lg">{thread.content}</p>
            <p className="text-gray-600 text-sm">
              by{" "}
              <Button
                variant="link"
                onClick={() => alert(thread.author.profile.username)}
                className="cursor-pointer bg-transparent text-gray-600 text-sm hover:text-gray-400 duration-100"
              >
                {thread.author.profile.username}
              </Button>
            </p>
            {thread.imageUrl && (
              <img
                className="w-100 h-60 object-cover rounded-2xl my-2"
                src={thread.imageUrl}
                alt="Thread"
              />
            )}
            <div className="flex items-center gap-x-2">
              <Like amount={thread.author._count?.PostLike ?? 0} />

              <NavLink to={`/thread/${thread.id}`} className="cursor-pointer">
                <Comment count={thread.author._count.comments} />
              </NavLink>
            </div>
          </div>
        </section>
        <DropdownThread />
      </div>
    </div>
  );
}

export default Thread;
