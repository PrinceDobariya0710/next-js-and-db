import Image from "next/image";
import GetData1 from "./components/GetData1";
import PostData1 from "./components/PostData1";
import GetData2 from "./components/GetData2";
import PostData2 from "./components/PostData2";

export const metadata = {
  title : "Learn Next Js with DB",
  description : "Learning Integration between NextJs and MongoDB"
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Learn Next JS with Mongo DB</h1>
      <GetData1/>
      <PostData1/>
      <GetData2/>
      <h1>Server Action Post Form</h1>
      <PostData2/>
    </main>
  );
}
