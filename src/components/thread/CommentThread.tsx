// components/thread/Replies.tsx
import { ReplyProps } from "@/types/thread";

interface RepliesProps {
  replies: ReplyProps[];
}

function Replies({ replies }: RepliesProps) {
  return (
    <div className="">
      {replies.length === 0 ? (
        <p className="w-full border-t border-black pt-2 mt-4 space-y-4 pl-12 text-sm text-gray-500 text-center">
          No replies yet.
        </p>
      ) : (
        replies.map((reply) => (
          <div
            key={reply.id}
            className="w-full border-t border-black pt-2 mt-4 space-y-4 pl-12"
          >
            <p className="text-sm text-gray-300 font-semibold">
              {reply.username}
            </p>
            <p className="text-sm text-gray-400">{reply.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Replies;
