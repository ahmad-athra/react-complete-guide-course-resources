import PostCard from "./post-card";



export interface Post {
    title: string;
    description: string;
    id: string;
}
const dummyPosts: Post[] = [
    { id: '1', title: 'Post 1', description: 'Description 1' },
    { id: '2', title: 'Post 2', description: 'Description 2' },
    { id: '3', title: 'Post 3', description: 'Description 3' },
];  

export default function PostsList() {
    return <> 
    <ul className="max-w-3xls my-4 mx-auto py-4 px-0 grid grid-cols-[repeat(3,_30%)] gap-4 justify-center">
        {/* <PostCard title={title} description={description} id={'3333'} /> */}
        {dummyPosts.map((post, i) => 
        <li key={post.id || i}>
            <PostCard title={post.title} description={post.description} id={post.id} />
        </li>
        )}
    </ul>



    </>
}