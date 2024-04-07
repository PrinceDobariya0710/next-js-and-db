const getData = async () => {
    const res = await fetch("http://localhost:3000/api/posts",{
        method: 'GET',
        headers: {'Content-Type':'application/json',}
    })
    const posts = await res.json();
    return posts
}

export default async function GetData1(){
    
    const allPosts = await getData()
    return (
        <main className="">
            {
                allPosts.result?.map((post,i) => (
                    <div key={i}    >
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            }
        </main>
    )
}
