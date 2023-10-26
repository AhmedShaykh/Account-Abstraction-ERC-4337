"use client";
import React, { FC, useRef } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const PuTDelBlog: FC<any> = async ({ id }) => {

    const nameRef = useRef<HTMLInputElement | null>(null);

    const titleRef = useRef<HTMLInputElement | null>(null);

    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

    const router = useRouter();

    const updateDataAPI = async (id: string, title: string, description: string, username: string) => {

        try {

            const postData = { title, description, username };

            const data = await fetch(`/api/blogs/${id}`, {
                method: "PUT",
                body: JSON.stringify(postData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const res = await data.json();

            return res;

        } catch (error) {

            console.log(error);

        }

    };

    const removeData = async (id: string) => {

        const data = await fetch(`/api/blogs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const res = await data.json();

        return res;
    };

    const updateData = async (e: any) => {

        e.preventDefault();

        const title = titleRef.current?.value;

        const name = nameRef.current?.value;

        const description = descriptionRef.current?.value;

        if (title && name && description) {

            await updateDataAPI(id, title, description, name);

            toast.success("Data Successfully Update!");

            setTimeout(() => {
                router.push("/");

            }, 2000);

        } else {

            toast.warning("Something You Missing")

        }

    };

    const deleteData = async () => {

        await removeData(id);

        toast.success("Data Successfully Delete!");

        setTimeout(() => {
            router.push("/");

        }, 2000);

    };

    return (
        <>
            <div className="my-6 mx-80">
                <form onSubmit={updateData}>
                    <div className="flex flex-col gap-y-5">
                        <input
                            className="text-black p-2 rounded-sm"
                            placeholder="Update Title"
                            type="text"
                            ref={titleRef}
                        />

                        <input
                            className="text-black p-2 rounded-sm"
                            placeholder="Update Username"
                            type="text"
                            ref={nameRef}
                        />

                        <textarea
                            className="text-black p-2 rounded-sm"
                            placeholder="Update Description"
                            ref={descriptionRef}
                            rows={4}
                        />

                        <button
                            className="text-sm px-4 py-2 bg-white text-black font-bold rounded-md"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>

                <button
                    className="text-sm px-4 py-2 bg-red-600 text-white font-bold rounded-md w-full my-4"
                    onClick={deleteData}
                >
                    Delete
                </button>

                <Link href="/">
                    <button
                        className="text-sm px-4 py-2 bg-blue-700 font-semibold rounded-md w-full mt-16"
                    >
                        Go To Home
                    </button>
                </Link>
            </div>

            <ToastContainer />
        </>
    )
};

export default PuTDelBlog;