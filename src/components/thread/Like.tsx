import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useState } from "react";

function Like({ amount }: { amount: number }) {
  const [like, setLike] = useState<boolean>(false);
  const [likeAmount, setLikeAmount] = useState<number>(amount);
  const toggleLike = () => {
    setLike(!like);
    setLikeAmount((prev) => (like ? prev - 1 : prev + 1));
  };
  return (
    <div className="flex">
      <button
        onClick={toggleLike}
        className="my-3 flex gap-x-2 items-center text-gray-500 hover:text-white duration-200 cursor-pointer"
      >
        {like ? (
          <div id="likes" className="flex gap-2 items-center">
            <BsHeartFill className="text-red-600" size={20} />
            <span className="text-white">{likeAmount}</span>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <BsHeart size={20} />
            <span className="text-gray-500">{likeAmount}</span>
          </div>
        )}
      </button>
    </div>
  );
}

export default Like;
