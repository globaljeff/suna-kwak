import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Title = "The SEO title tag"
const Description = "The SEO Description."
const URL = "https://www.byer.co/"

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={Description} />
        <meta property="og:url" content={URL} />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
      </Head>
      
      <h1>Homepage. This is the homepage.</h1>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
