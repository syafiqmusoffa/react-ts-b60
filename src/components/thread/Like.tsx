import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useState } from "react";

function Like() {
  const [like, setLike] = useState<boolean>(false);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <button
      onClick={toggleLike}
      className="my-3 flex gap-x-2 items-center text-gray-500 hover:text-white duration-200 cursor-pointer"
    >
      {like ? (
        <>
          <BsHeartFill className="text-red-600" size={20} />
          <span className="text-white">25</span>
        </>
      ) : (
        <>
          <BsHeart size={20} />
          <span className="text-gray-500">24</span>
        </>
      )}
    </button>
  );
}

export default Like;
