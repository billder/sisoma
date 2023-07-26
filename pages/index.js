import Head from 'next/head'
import Header1 from '@components/Header1'
import Header2 from '@components/Header2'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import MainImage from '@components/MainImage'
import ACCimage from '@components/ACCImage'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Samantha Soma - Experience Coach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav /> */}
      <div className="main-text">
        <main>
          <div className="main-content">
            <MainImage />
            <a name="top" />
            <Header1 title="Samantha Soma" />
            <p className="description">Executive and Leadership Coach, ACC</p>
            <p>I coach established and emerging design leaders who work in corporate, nonprofit, healthcare, and government organizations.</p>
            <p>Through our work together, my clients have </p> 
            <ul>
              <li>learned more about the way their values, motivations, challenges, and strengths shape their professional lives and opportunities,</li>
              <li>developed a deeper understanding of their present context,</li>
              <li>identified actions that amplified their desired impact, and </li>
              <li>advanced professionally in new and exciting ways.</li>
            </ul>
            <p>I offer a <a href="http://www.calendly.com/sisoma/discovery">free discovery session</a> because it's the best way to determine if we're a fit, given that so much of coaching is about chemistry. We'll get to know each other a bit more, talk through your situation and goals, and get a preview of how our partnership might work. </p>
          </div>

          <div className="testimonials">
            <a name="testimonials" />
            <Header2 title="Testimonials" />
            <p class="testimonial">"I’ve been fortunate to work with a number of professional coaches over the years. Yours was, hands down, the most powerful coaching session I’ve ever had — you kept me on track as we talked things through, you kept me honest with my answers, and you got me to a clear, doable action that kept me accountable."</p>            
            <p class="testimonial">“I am more resilient because of the work we did together, the tools you gave me, and the insights you helped me find about myself. Thank you, Sam!”</p> 
            <p class="testimonial">“The focus you helped me find has been hugely beneficial in my life at home and at work. … More people need to connect with you as a coach.” </p>
            <p class="testimonial">“I am less anxious, more positive, and overall happier with my interactions and engagements with my managers. My VP and my Managing Director have both commented on the change in me. I have you to thank for that.”</p>
            <p class="testimonial">“I took on a very challenging project that I might not have even entertained the idea of without having done my work with you. Coaching gave me the confidence that I knew what I was doing, could make a difference, and could lead a team of people to an excellent result.” </p>
          </div>

          <div className="about">
            <a name="about" />
            <Header2 title="About Me" />
            <p>I'm glad you're here. I've always been interested in how we humans show up both as individuals and within systems, small and large. Personally and professionally, I seek to understand and then create conditions for success for my people, be they clients, employees, students, or fellow citizens.</p> 
            <ul>
              <li>ACC credential from the International Coach Federation, 2020-2023</li>
              <li>Member, International Coach Federation, 2019-present</li>
              <li>Coach certification: Georgetown University's Institute for Transformational Leadership</li>
              <li>Ph.D., Urban Studies, with a focus on Community Development</li>
              <li>MA, Conflict Resolution</li>
              <li>BA, Psychology</li>
            </ul>
          </div>
          <div className="images">
            <ACCimage />
          </div>
          
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  )
}
