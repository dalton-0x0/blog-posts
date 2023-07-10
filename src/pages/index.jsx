import Head from "next/head";
import { FeaturedPosts } from "@components/home-page/featured-posts";
import { HomeBanner } from "@components/home-page/home-banner";
import { getFeaturedPosts } from "@lib/posts-util";

const HomePage = (props) => (
  <>
    <Head>
      <title>Dalton's Blog</title>
      <meta
        name="description"
        content="Sharing my thoughts about software and web development"
      />
    </Head>
    <HomeBanner />
    <FeaturedPosts posts={props.posts} />
  </>
);

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
