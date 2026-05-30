import { useState, type ChangeEvent, type SubmitEvent } from "react";

export default function NewPostForm({onSubmitForm, onCancel}: {onSubmitForm: (data: {title: string, description: string}) => void, onCancel: () => void}) {


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    function onChangeTitle(event:ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    function onChangeDescription(event:ChangeEvent<HTMLTextAreaElement>) {
        console.log(event.target.value);
        setDescription(event.target.value);
    }
    
    function submitFormHandler(event:SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        // const formData = new FormData(event.currentTarget); 
        // console.log(event);
        
        // const formValues = Object.fromEntries(formData);
        // console.log(formValues);
        // const {title, description} = formValues;
        
        const postData = {
            title,
            description
        }
        onSubmitForm(postData);
        onCancel();
        // onChangeTitle(formData.get('title'));
        // onChangeDescription(formData.get('description'));
        
    }
    return <>
        {/* <dialog open> */}
            <form className="w-full bg-purple-800 p-4"
            onSubmit={submitFormHandler}>
                <p >
                    {/* className="flex flex-col" */}
                    <label htmlFor="title" className="block mb-2 text-white">Title</label>
                    <input className="block w-full p-2 rounded-md border-none bg-purple-300"
                    placeholder="Enter Title"
                    onChange={onChangeTitle}
                     type="text" id="title" name="title" required />
                </p>
                <p>
                    <label className="block mb-2 text-white"
                    htmlFor="description">Description</label>
                    <textarea className="block w-full p-2 rounded-md border-none bg-purple-300"
                     placeholder="Enter Description"
                     onChange={onChangeDescription}
                      id="description" name="description" required />
                </p>

                <div className="flex justify-between items-center ">
                <button
                className="border-purple-950 border-2 rounded-md p-1 my-3 text-purple-50 bg-purple-600" 
                type="submit">Submit</button>

                <button type="button" onClick={onCancel} className="border-purple-950 border-2 rounded-md p-1 my-3 text-purple-950 bg-purple-300" >Cancel</button>

                </div>
            </form>
        {/* </dialog> */}
    </>
}