import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import LandingPage from '@components/Landing'
import Info from '@components/Info'
import Contact from '@components/Contact'
import Fii from '@components/Fii'
import Feel from '@components/Feel'

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
        <Fii/>
        <Feel/>
        <Contact/>
      </main>
    </div>
  )
}
