import React from "react";
import AddBlog from "@/Components/AddBlog";

const Home = () => {
    return (
        <div className="flex flex-col mx-auto items-center max-w-6xl my-4">
            <h1 className="text-2xl font-bold">
                Prisma Next Blog App
            </h1>

            <AddBlog />
        </div>
    )
};

export default Home;