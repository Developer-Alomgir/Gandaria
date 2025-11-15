import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const typePhrases = [
  'Discover Gandaria',
  'Historic quarter of Dhaka',
  'Aerial views & local stories'
]

export default function Home() {
  const [i, setI] = useState(0)
  const [display, setDisplay] = useState('')

  useEffect(()=>{
    let mounted = true
    const run = async ()=>{
      while(mounted){
        const phrase = typePhrases[i]
        for(let k=1;k<=phrase.length;k++){
          if(!mounted) return
          setDisplay(phrase.slice(0,k))
          await new Promise(r=>setTimeout(r,35))
        }
        await new Promise(r=>setTimeout(r,800))
        for(let k=phrase.length;k>=0;k--){
          if(!mounted) return
          setDisplay(phrase.slice(0,k))
          await new Promise(r=>setTimeout(r,20))
        }
        setI((p)=> (p+1)%typePhrases.length)
      }
    }
    run()
    return ()=> mounted=false
  },[i])

  return (
    <main className="container">
      <motion.header initial={{opacity:0, y:-12}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="site-header">
        <h1 className="title">AlomgiR <span className="accent">Hossen</span></h1>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/info">History</Link>
          <Link href="/gallery">Expole</Link>
        </nav>
      </motion.header>

      <section className="hero">
        <div className="hero-inner">
          <motion.h2 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>Welcome to</motion.h2>
          <motion.h3 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.35}} className="hero-type">
            {display}<span className="cursor">|</span>
          </motion.h3>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} className="hero-lead">
            Explore historic sites, aerial views, and local stories from Gandaria — an old and vibrant part of Dhaka.
          </motion.p>
          <motion.div className="hero-cta" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}>
            <Link href="/info"><a className="btn">Area Info</a></Link>
            <Link href="/gallery"><a className="btn ghost">Gallery</a></Link>
          </motion.div>
        </div>
        <div className="hero-bg" aria-hidden="true" />
      </section>

      <section className="info-preview">
        <motion.h4 initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay:1}}>Quick Facts & History</motion.h4>
        <motion.div className="facts-grid" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.15}}>
          <article className="fact">
            <h5>Origin</h5>
            <p>Gandaria (also spelled Gendaria) historically known for sugarcane cultivation; became part of Dhaka's urban expansion.</p>
          </article>
          <article className="fact">
            <h5>Landmarks</h5>
            <p>Gandaria Railway Station, local mosques, schools and community centers — an area with deep local roots.</p>
          </article>
          <article className="fact">
            <h5>Population</h5>
            <p>Part of Dhaka city — dense residential neighbourhoods with lively street life and markets.</p>
          </article>
        </motion.div>
        <motion.p className="source-note" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}>
          Sources: Wikipedia, The Daily Star (local history articles) — content summarised for this frontend demo.
        </motion.p>
      </section>
    </main>
  )
}
