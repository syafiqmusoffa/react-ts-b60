import { MdComment } from "react-icons/md";
function Comment() {
  return (
    <button className="my-3 flex gap-x-2 items-center text-gray-500 hover:text-white duration-200 cursor-pointer">
      <MdComment size={20} />
      <span>261</span>
    </button>
  );
}

export default Comment;
