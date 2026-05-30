import type { Post } from "./posts-list"
import classes from './Post-card.module.css'
// const names = ['ahmad', 'yasser', 'athra']
// const randomName = () => names[Math.floor(Math.random() * names.length)]

export default function PostCard({title, description, id}: Post) {
    return <>
        <article id={id}  className="border border-darkgray-700 p-5 rounded-lg bg-darkgray-50">
            <h2 className={classes.postTitle}>{title}</h2>
            <p>{description}</p>
        </article>
    </>
}