import Head from 'next/head'
import Link from 'next/link'
import Layout from './../components/layout'


function about() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className="title">First Post</h1>
      </Layout>
    );
  }
  
  export default about