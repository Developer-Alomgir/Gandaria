import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Info() {
  return (
    <>
      <Head><title>My Biography</title></Head>
      <main className="container">
        <motion.h2 initial={{opacity:0}} animate={{opacity:1}}>I am ALOMGIR HOSSEN</motion.h2>

        <motion.section className="info-card" initial={{opacity:0, y:8}} animate={{opacity:1}} transition={{delay:0.2}}>
          <h3>FullStack Software Developer</h3>
          <p>
            Specialized in frontend design, development, and animation.
            expertise in React.JS,Next.JS, Node.JS, Git, Tailwind CSS, Javascript,Typescript, HTML, Data Structure,
            cross-platform App Development Like- Android,IOS,Windows Platfrom. Creating immersive Visual experiences through cutting-edge technology, Interactive Animation and creative vision..
          </p>

          <h4>My Home Office</h4>
          <ul>
            <li>Gandaria New Road</li>
            <li>Dhaka South City Corporation 1204</li>
            <li>Contact - Alomgir.Dev@Gmail.com</li>
          </ul>
        </motion.section>

        <motion.section className="map-section" initial={{opacity:0, y:6}} animate={{opacity:1}} transition={{delay:0.4}}>
          <h3>Location</h3>
          <div className="map-wrap">
            <iframe title="Gandaria Location" src="https://www.google.com/maps?q=Gandaria,+Dhaka&output=embed" loading="lazy"/>
          </div>
        </motion.section>
      </main>
    </>
  )
}
