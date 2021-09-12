import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web programming , development" />
      </Head>

      <h1>Welcome to Next</h1>
    </div>
  );
}

// fetch data from external api
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.cpm/post?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
