import { useState, type ChangeEvent } from "react";
import Modal from "../components/Modal";
import NewPost from "../components/new-post-button";
import NewPostForm from "../components/NewPostForm";
import PostsList from "../components/posts-list";

export default function PostsLayout() {
    // Lifting State Up
    const [modelIsOpen, setModelIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    function handleToggleModal() {
        setModelIsOpen((prevmodelIsOpen) => !prevmodelIsOpen);
    }
    
    function updateTitleHandler(event:ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    function updateDescriptionHandler(event:ChangeEvent<HTMLTextAreaElement>) {
        console.log(event.target.value);
        setDescription(event.target.value);
    }
    // let modelContent: JSX.Element = null;

    // if (modelIsOpen) {
    //     modelContent = (
    //     <Modal open={modelIsOpen} onClose={handleToggleModal}>
    //         <NewPostForm onChangeTitle={updateTitleHandler} onChangeDescription={updateDescriptionHandler} />
    //     </Modal>
    //     );
    // }

    return <>
    <div className="bg-blue-200 max-w-7xl mx-auto min-h-screen">
    <header className="flex justify-between items-center w-full h-20 px-6 ">
        <div className="text-xl font-semibold">
            Poster Site
        </div>
        <NewPost clickEvent={handleToggleModal}/>
    </header>
        {/* {
            modelContent
        } */}
        {
        modelIsOpen ?
        <Modal open={modelIsOpen} onClose={handleToggleModal}>
            <NewPostForm onChangeTitle={updateTitleHandler} onChangeDescription={updateDescriptionHandler} />
        </Modal>: null
        }
        <main className="border-t-1 border-gray-300 p-6">
            <PostsList title={title} description={description}/>
        </main>

    </div>
    </>
}