import ThreadText from "@/components/thread/ThreadText";
import { ThreadListDummy } from "@/utils/DummyList";
import React from "react";

function DetailThread() {
  return (
    <>
      <ThreadText thread={ThreadListDummy[1]} />
    </>
  );
}

export default DetailThread;
