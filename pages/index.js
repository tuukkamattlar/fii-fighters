import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import LandingPage from '@components/Landing'
import Info from '@components/Info'
import Contact from '@components/Contact'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fii Fighters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage/>
        <Info/>
        <Contact/>
      </main>
    </div>
  )
}
