import Modal from "../components/Modal";
import NewPostForm from "../components/NewPostForm";
import PostsList from "../components/posts-list";

export default function PostsLayout({modelIsOpen, onCloseModel}) {

    

    function submitFormHandler(data: {title: string, description: string}) {
        console.log(data.title);
        console.log(data.description);
        // setTitle(data.title);
        // setDescription(data.description);
        
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
        {/* {
            modelContent
        } */}
        {
        modelIsOpen ?
        <Modal open={modelIsOpen} onClose={onCloseModel}>
            <NewPostForm onCancel={onCloseModel}
             onSubmitForm={submitFormHandler} />
        </Modal>: null
        }
        <main className="">
            <PostsList/>
        </main>

    </>
}