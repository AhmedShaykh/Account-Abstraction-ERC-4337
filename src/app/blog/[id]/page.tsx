import Link from "next/link";
import React from "react";

const getData = async (id: string) => {

    const data = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        cache: "no-store"
    });

    const res = await data.json();

    return res;

};

const GetBlogId = async (
    { params }: { params: { id: string } }
) => {

    const id = params.id;

    const resData = await getData(id);

    return (
        <div className="p-8 flex justify-center my-12">
            <div className="flex justify-between items-center gap-x-80">
                <div className="space-y-3">
                    <h2 className="text-2xl font-medium">Title:</h2>
                    <h3 className="text-xl pb-8">{resData.data.title}</h3>
                    <h2 className="text-2xl font-medium">Description:</h2>
                    <h3 className="text-xl pb-8">{resData.data.description}</h3>
                    <h2 className="text-2xl font-medium">Username:</h2>
                    <h3 className="text-xl pb-8">{resData.data.username}</h3>
                </div>

                <div className="px-4">
                    <Link href={`/blog/editBlog/${resData.data.id}`}>
                        <button className="text-sm px-4 py-2 bg-white text-black font-semibold rounded-md">
                            Edit
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GetBlogId;