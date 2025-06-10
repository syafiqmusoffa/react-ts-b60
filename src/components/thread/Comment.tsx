import { ReplyProps } from "@/types/thread";
import { MdComment } from "react-icons/md";

interface CommentProps {
  count : number
}

function Comment({count}:CommentProps) {
  return (
    <button className="my-3 flex gap-x-2 items-center text-gray-500 hover:text-white duration-200 cursor-pointer">
      <MdComment size={20} />
      <span>{count}</span>
    </button>
  );
}

export default Comment;
