import styles from "./all-posts.module.css";
import { PostsGrid } from "./posts-grid";

export const AllPosts = (props) => (
  <section className={styles.posts}>
    <h1>All Posts</h1>
    <PostsGrid posts={props.posts} />
  </section>
);
