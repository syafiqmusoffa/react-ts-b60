import CreateContent from "@/components/CreateContent";
import ThreadList from "@/components/thread/ThreadList";
import { ThreadListDummy } from "@/utils/DummyList";

function Home() {
  return (
    <main className="p-3 ">
      <h1 className="pt-3 text-4xl text-gray-400">Home</h1>
      {/* <UserData /> */}
      <CreateContent />
      <br />
      <ThreadList threads={ThreadListDummy} />
    </main>
  );
}

export default Home;
