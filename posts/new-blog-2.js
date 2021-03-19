import Head from 'next/head'

export const Title = "New Blog 2"
export const Description = "The SEO Description."
export const URL = "https://www.byer.co/"
export const Date = "2021-03-17"

export default function Post() {
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
      <h1>New Blog 2</h1>
    </>
  )
}
