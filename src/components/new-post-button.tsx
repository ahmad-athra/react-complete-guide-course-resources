import { MdOutlinePostAdd } from "react-icons/md";

export default function NewPostButton({clickEvent}: {clickEvent: () => void}) {
    return <>

    <button
    className="bg-purple-500 text-purple-950  px-10 py-3 rounded-lg flex gap-2 justify-center items-center cursor-pointer"
    onClick={clickEvent} 
    >
        <MdOutlinePostAdd />
        New Post
    </button>
    </> 
}