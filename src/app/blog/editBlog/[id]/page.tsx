import React from "react";
import PuTDelBlog from "@/Components/PuTDelBlog";

const EditBlog = async (
    { params }: { params: { id: string } }
) => {

    const id = params.id;

    return (
        <div className="my-4">
            <h1 className="text-2xl font-bold text-center">
                Edit Blog
            </h1>

            <PuTDelBlog id={id} />
        </div>
    )
};

export default EditBlog;