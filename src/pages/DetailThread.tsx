import Replies from "@/components/thread/CommentThread";

import ThreadCommentBox from "@/components/thread/ThreadCommentBox";
import ThreadText from "@/components/thread/ThreadText";
import { ThreadListDummy } from "@/utils/DummyList";
import { MdKeyboardBackspace } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";

function DetailThread() {
  const { threadId } = useParams();
  const thread = ThreadListDummy[Number(threadId)];

  return (
    <div className="pt-3 h-screen">
      <div className="p-3 flex items-center">
        <NavLink to={"/"}>
          <MdKeyboardBackspace className="text-gray-500 cursor-pointer w-10 h-8" />
        </NavLink>
        <h1 className="text-4xl text-gray-400">Thread</h1>
      </div>
      <ThreadText thread={ThreadListDummy[Number(threadId)]} />
      <ThreadCommentBox />
      <Replies replies={thread.replies} />
    </div>
  );
}

export default DetailThread;
