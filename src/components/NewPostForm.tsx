import { type ChangeEvent } from "react";

export default function NewPostForm({onChangeTitle, onChangeDescription}: {onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void, onChangeDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void}) {

    return <>
        {/* <dialog open> */}
            <form className="w-full bg-purple-800 p-4">
                <p >
                    {/* className="flex flex-col" */}
                    <label htmlFor="title" className="block mb-2 text-white">Title</label>
                    <input className="block w-full p-2 rounded-md border-none bg-purple-300"
                    placeholder="Enter Title"
                    onChange={onChangeTitle} type="text" id="title" name="title" required />
                </p>
                <p>
                    <label className="block mb-2 text-white"
                    htmlFor="description">Description</label>
                    <textarea className="block w-full p-2 rounded-md border-none bg-purple-300"
                     placeholder="Enter Description"
                     onChange={onChangeDescription} id="description" name="description" required />
                </p>
                <button
                className="border-purple-950 border-2 rounded-md p-1 ml-0 m-3 text-purple-950 bg-purple-300" 
                type="submit">Submit</button>
            </form>
        {/* </dialog> */}
    </>
}