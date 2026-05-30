import { MdOutlinePostAdd } from "react-icons/md";

export default function NewPostButton({clickEvent}: {clickEvent: () => void}) {
    return <>

    <button onClick={clickEvent} className="bg-blue-200 text-darkgray-700  border border-darkgray-700 px-10 py-3 rounded-lg flex gap-2 justify-center items-center cursor-pointer">
        <MdOutlinePostAdd />
        New Post
    </button>
    </> 
}