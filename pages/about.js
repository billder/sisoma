import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import MainImage from '@components/MainImage'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Samantha Soma - Experience Coach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div className="content">
          <Header title="Samantha Soma" />
          <p className="description">Executive and Leadership Coach, ACC</p>
          <p>My coach training and certification was through Georgetown University's Institute for Transformational Leadership. I hold an ACC credential from the International Coach Federation. My undergraduate major was Psychology, my Master's degree is in Conflict Resolution, and I earned a Ph.D. in Urban Studies with a focus on Community Development.</p> 
          <p>It's fair to say I've always been interested in how we humans show up as individuals and within systems, small and large. Personally and professionally, I seek to understand and then create conditions for success for my people, be they clients, employees, students, or fellow citizens. I'm glad you're here. </p>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
