import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Info() {
  return (
    <>
      <Head><title>Our Gandaria — Info</title></Head>
      <main className="container">
        <motion.h2 initial={{opacity:0}} animate={{opacity:1}}>Gandaria — History & Highlights</motion.h2>

        <motion.section className="info-card" initial={{opacity:0, y:8}} animate={{opacity:1}} transition={{delay:0.2}}>
          <h3>Short History</h3>
          <p>
            Gandaria (Gendaria) is an old part of Dhaka with historical roots in agriculture — the name is often linked to sugarcane ('gandari').
            Over time it became residential and a transport node with the Gandaria Railway Station. The area hosts several local institutions,
            markets and community organisations.
          </p>

          <h4>Notable places</h4>
          <ul>
            <li>Gandaria Railway Station</li>
            <li>Local mosques and madrasas</li>
            <li>Markets, schools and community centers</li>
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
