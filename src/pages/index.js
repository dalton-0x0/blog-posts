import Head from "next/head";
import { FeaturedPosts } from "@components/home-page/featured-posts";
import { HomeBanner } from "@components/home-page/home-banner";
// import { getFeaturedPosts } from "@lib/posts-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="Find events relating to programming"
        />
      </Head>
      <HomeBanner />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  //   const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: [],
    },
  };
}

export default HomePage;
