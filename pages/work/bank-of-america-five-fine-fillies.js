import Head from 'next/head'
import WorkStyles from '../../components/styles/WorkStyles'
import Link from "next/link"

/* Work details */
const vTitle = "Five Fine Fillies"
const vDirector = "Aaron Stoller"
const vClient = "Bank of America"
const vLink = "https://player.vimeo.com/video/69589123"

const Title = vTitle + " - Wardrobe Stylist - Suna Kwak"
const Description = "Suna Kwak was the wardobe stylist for the " + vTitle + " commercial directed by " + vDirector + " for " + vClient + "."
const URL = "https://www.sunakwak.com/work/bank-of-america-five-fine-fillies"


export default function WorkPage(){
    return(
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

            <div className="container">
                <WorkStyles>
                    <div>
                    <iframe width="100%" height="480" src={vLink} title={vTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="work-text">
                        <h1>{vTitle}</h1>
                        <h2>Director: {vDirector}</h2>
                        <h3>Client: {vClient}</h3>
                        <div className="buttons">
                            <Link href="/work/california-lotto-scratchers"><a className="btn">&lt; Last</a></Link>
                            <Link href="/work/psa-child-hunger-3"><a className="btn">Next &gt;</a></Link>
                        </div>
                        <Link href="/">View All Work &gt;</Link>
                    </div>
                </WorkStyles>
            </div>
        </>
    )
}