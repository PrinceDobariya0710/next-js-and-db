import connectDB from "../lib/connectDB"
import PostModel from "@/models/Post"

export default async function GetData2(){
    await connectDB();
    const allPosts = await PostModel.find()
    return (
        <main className="">
            <h1 className="p-2">Server Action</h1>
            {
                allPosts.map((post,i) => (
                    <div key={i}   className="p-5" >
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            }
        </main>
    )
}
