import Link from "next/link";

const getData = async () => {

    const data = await fetch(`http://localhost:3000/api/blogs`, {
        cache: "no-store"
    });

    const res = await data.json();

    return res;

};

const AddBlog = async () => {

    const post: any = await getData();

    return (
        <>
            <Link href="/blog/addBlog">
                <button className="mt-8 mb-4 text-md px-3 py-2 bg-blue-700 rounded-md">
                    Add New Blog
                </button>
            </Link>

            <div className="my-3">
                {post.data.length > 0 ?
                    <>
                        {post?.data.map((item: any,) => (

                            <div key={item.id} className="p-3 flex gap-x-80 justify-between items-center">
                                <Link href={`/blog/${item.id}`}>
                                    <div className="space-y-3">
                                        <h2>Title: {item.title}</h2>
                                        <h2>Description: {item.description}</h2>
                                        <h2>Username: {item.username}</h2>
                                    </div>
                                </Link>

                                <div className="px-4">
                                    <Link href={`/blog/editBlog/${item.id}`}>
                                        <button className="text-sm px-4 py-2 bg-white text-black font-semibold rounded-md">
                                            Edit
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </> : (
                        <div>
                            <h1>Data Not Found</h1>
                        </div>
                    )}
            </div >
        </>
    )
};

export default AddBlog;