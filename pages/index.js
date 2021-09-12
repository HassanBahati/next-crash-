import Head from "next/head";
import ArticleList from "../components/ArticleList";
export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web programming , development" />
      </Head>

      {/* <ArticleList articles={articles}/> */}
    </div>
  );
}

// fetch data from external api
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.cpm/post?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };


//use custom api
export const getStaticProps = async () => {
  const res = await fetch(`/api/articles`)

  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}