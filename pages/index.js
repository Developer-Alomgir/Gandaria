import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const typePhrases = [
  'Full Stack Software Engineer',
  'Web App Developer',
  'Game Developer and Graphic Designer'
]

const skills = [
  'React.Js',
  'Node.Js',
  'Next.Js',
  'Webflow',
  'Tailwind.CSS',
  'HTML',
  'Github'
]

export default function Home() {

  /* ===========================
      Typing Animation
  ============================ */
  const [display, setDisplay] = useState("")
  const [i, setI] = useState(0)

  useEffect(() => {
    let mounted = true

    const run = async () => {
      const phrase = typePhrases[i]

      // type forward
      for (let k = 0; k <= phrase.length; k++) {
        if (!mounted) return
        setDisplay(phrase.slice(0, k))
        await new Promise(r => setTimeout(r, 45))
      }

      await new Promise(r => setTimeout(r, 900))

      // move to next word
      setI((prev) => (prev + 1) % typePhrases.length)
    }

    run()
    return () => { mounted = false }

  }, [i])


  /* ===========================
      Skills Marquee
  ============================ */
  const [offset, setOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  useEffect(() => {
    let frame
    const speed = 0.6

    const loop = () => {
      setOffset(prev => {
        const next = prev - speed
        return next <= -800 ? 0 : next
      })
      frame = requestAnimationFrame(loop)
    }

    loop()
    return () => cancelAnimationFrame(frame)
  }, [])

  const startDrag = (x) => {
    setIsDragging(true)
    setStartX(x)
  }

  const moveDrag = (x) => {
    if (!isDragging) return
    setOffset(prev => prev + (x - startX))
    setStartX(x)
  }

  const endDrag = () => setIsDragging(false)


  /* ===========================
      PAGE RENDER
  ============================ */
  return (
    <main className="container">

      {/* HEADER */}
      <motion.header initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="site-header">
        <h1 className="title">Welcome To My <span className="accent">Dimension</span></h1>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/info">About Me</Link>
          <Link href="/gallery">Projects</Link>
        </nav>
      </motion.header>


      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">

          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            I am ALOMGIR HOSSEN
          </motion.h2>

          <motion.h3 className="hero-type" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            {display}<span className="cursor">|</span>
          </motion.h3>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            React.JS | Next.JS | Node.JS | JavaScript | Typescript | Github | Tailwind CSS | HTML | WebFlow.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="hero-cta">
            <Link href="/info" className="btn">My Biography</Link>
            <Link href="/gallery" className="btn ghost">Project Gallery</Link>
          </motion.div>

        </div>
      </section>


      {/* QUICK FACT SECTION */}
      <section className="info-preview">
        <h4>Quick Facts & History</h4>

        <div className="facts-grid">
          <article className="fact">
            <h5>Full Stack Software Engineer</h5>
            <p>Experienced full stack developer specializing in React, Node.js and cloud systems.</p>
          </article>

          <article className="fact">
            <h5>Game Developer</h5>
            <p>Built games using Unity 3D, Unreal Engine & Cocos2D.</p>
          </article>

          <article className="fact">
            <h5>Web App Developer</h5>
            <p>Build Dynamic Interactive Web Apps With React And Next.</p>
          </article>
        </div>
      </section>


      {/* SKILLS MARQUEE */}
      <section className="skills-section">
        <h4 className="section-title">Skills</h4>

        <div
          className="skills-marquee"
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseMove={(e) => isDragging && moveDrag(e.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
        >
          <div className="skills-track" style={{ transform: `translateX(${offset}px)` }}>
            {skills.concat(skills).map((skill, idx) => (
              <div key={idx} className="skill-card">{skill}</div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .skills-section {
            margin-top: 3rem;
            overflow: hidden;
            background: #121212;
            padding: 1.5rem 0;
          }
          .section-title {
            text-align: center;
            font-size: 1.6rem;
            margin-bottom: 1rem;
          }
          .skills-marquee {
            overflow: hidden;
            width: 100%;
            cursor: grab;
          }
          .skills-track {
            display: flex;
            white-space: nowrap;
          }
          .skill-card {
            margin: 0 1rem;
            padding: 0.6rem 1.3rem;
            background: #1e1e1e;
            color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.4);
            flex: 0 0 auto;
          }
        `}</style>

      </section>

    </main>
  )
}
