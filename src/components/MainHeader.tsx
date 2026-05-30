import { type JSX } from "react";
import NewPost from "./new-post-button";
import { MdMessage } from "react-icons/md";

export default function MainHeader({onCreatePost}: {onCreatePost: () => void}) : JSX.Element {
    return <> 
    <header className="flex justify-between items-center border-b-2 border-gray-200 p-4 mt-0 my-8 mx-[10%]">
        <h1 className="flex items-center gap-6 text-[2rem] font-semibold text-purple-100">
            <MdMessage/>
            React Poster
        </h1>

        <NewPost clickEvent={onCreatePost}/>
    </header>

    </> 
}