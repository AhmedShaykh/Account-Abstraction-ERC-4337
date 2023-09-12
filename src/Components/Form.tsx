"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const addData = async (title: string, description: string, username: string) => {

    try {

        const postData = { title, description, username };

        const data = await fetch(`/api/blogs`, {
            method: "POST",
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

const Form = async () => {

    const nameRef = useRef<HTMLInputElement | null>(null);

    const titleRef = useRef<HTMLInputElement | null>(null);

    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

    const router = useRouter();

    const handleSubmit = async (e: any) => {

        e.preventDefault();

        const title = titleRef.current?.value;

        const name = nameRef.current?.value;

        const description = descriptionRef.current?.value;

        if (title && name && description) {

            await addData(title, description, name);

            toast.success("Data Successfully Added!");

            setTimeout(() => {
                router.push("/");

            }, 2000);

        } else {

            toast.warning("Something You Missing")

        }

    };

    return (
        <div className="my-6 mx-80">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-5">
                    <input
                        className="text-black p-2 rounded-sm"
                        placeholder="Enter Title"
                        type="text"
                        ref={titleRef}
                    />

                    <input
                        className="text-black p-2 rounded-sm"
                        placeholder="Enter Username"
                        type="text"
                        ref={nameRef}
                    />

                    <textarea
                        className="text-black p-2 rounded-sm"
                        placeholder="Enter Description"
                        ref={descriptionRef}
                        rows={4}
                    />

                    <button
                        className="text-sm px-4 py-2 bg-white text-black font-bold rounded-md"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <Link href="/">
                <button
                    className="text-sm px-4 py-2 bg-blue-700 font-semibold rounded-md w-full my-4"
                >
                    Go To Home
                </button>
            </Link>

            <ToastContainer />
        </div>
    )
};

export default Form;