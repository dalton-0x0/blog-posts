import { PostsGrid } from "../posts/posts-grid";
import styles from "./featured-posts.module.css";

export const FeaturedPosts = (props) => (
  <section className={styles.latest}>
    <h2>Featured Posts</h2>
    <PostsGrid posts={props.posts} />
  </section>
);
