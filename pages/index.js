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
      <div className="hero">
        <div className="wrapper">
          <h1>Homepage SEO Title H1.</h1>
          <p>The intro short text to support the title tag.</p>
          <a href="#" className="btn btn-primary">Primary Button</a>
        </div>
      </div>
      
      <section className="contrast">
        <div className="container">
          <h2>Header 2 Section Title</h2>
          <p>Supporting paragraph to header title or sections for cutom grid layout.</p>
        </div>
      </section>

      <section>
        <div className="container">
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
        </div>
      </section>
    </>
  )
}
