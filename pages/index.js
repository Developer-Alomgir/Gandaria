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
  // Marquee scrolling + drag logic
const [offset, setOffset] = useState(0)
const [isDragging, setIsDragging] = useState(false)
const [startX, setStartX] = useState(0)

useEffect(() => {
  let frame
  const speed = 0.6

  const loop = () => {
    setOffset(prev => {
      const nextX = prev - speed
      return nextX <= -800 ? 0 : nextX
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

const endDrag = () => {
  setIsDragging(false)
}
 return
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
        <h1 className="title">Welcome To My <span className="accent">Dimension</span></h1>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/info">About Me</Link>
          <Link href="/gallery">Projects</Link>
        </nav>
      </motion.header>

      <section className="hero">
        <div className="hero-inner">
          <motion.h2 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>I am ALOMGIR HOSSEN</motion.h2>
          <motion.h3 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.35}} className="hero-type">
            {display}<span className="cursor">|</span>
          </motion.h3>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} className="hero-lead">
            React.JS | Next.JS | Node.JD | JavaScript | Typescript | Github | Tailwind CSS | HTML | WebFlow.
          </motion.p>
          <motion.div className="hero-cta" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}>
            <Link href="/info"><a className="btn">My Biography</a></Link>
            <Link href="/gallery"><a className="btn ghost">Project Gallery</a></Link>
          </motion.div>
        </div>
        <div className="hero-bg" aria-hidden="true" />
      </section>

      <section className="info-preview">
        <motion.h4 initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay:1}}>Quick Facts & History</motion.h4>
        <motion.div className="facts-grid" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.15}}>
          <article className="fact">
            <h5>Full Stack Software Engineer</h5>
            <p>Experienced full stack developer specializing in modern web technologies. Expert in React, Node.js, and cloud architecture. Passionate about building scalable applications and mentoring junior developers.</p>
          </article>
          <article className="fact">
            <h5>Game Developer</h5>
            <p>Developed successful video games using Unity 3D, Unreal Engine and Cocos2D. Designed game features, levels, characters and optimized performance.</p>
          </article>
          <article className="fact">
            <h5>Web App Developer</h5>
            <p>Build Dynamic Interactive Web App With React And Next Framework.</p>
          </article>
        </motion.div>
        <motion.p className="source-note" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}>
          Sources: Wikipedia, The Daily Star (local history articles) — content summarised for this frontend demo.
        </motion.p>
      </section>

{/* ======= Skills Section (FINAL ERROR-FREE VERSION) ======= */}
<section className="skills-section">
  <h4 className="section-title">Skills</h4>

  <div 
    className="skills-marquee"
    onTouchStart={(e) => startDrag(e.touches[0].clientX)}
    onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
    onTouchEnd={endDrag}
    onMouseDown={(e) => startDrag(e.clientX)}
    onMouseMove={(e) => isDragging && moveDrag(e.clientX)}
    onMouseUp={endDrag}
    onMouseLeave={endDrag}
  >
    <div
      className="skills-track"
      style={{ transform: `translateX(${offset}px)` }}
    >
      {skills.concat(skills).map((skill, idx) => (
        <div key={idx} className="skill-card">{skill}</div>
      ))}
    </div>
  </div>

  <style jsx>{`
    .skills-section {
      margin-top: 3rem;
      overflow: hidden;
      background: #f8f8f8;
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
      position: relative;
      cursor: grab;
    }

    .skills-track {
      display: flex;
      white-space: nowrap;
      will-change: transform;
    }

    .skill-card {
      flex: 0 0 auto;
      margin: 0 1rem;
      padding: 0.6rem 1.3rem;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      font-size: 1rem;
      transition: 0.2s;
      user-select: none;
    }

    .skill-card:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .skill-card {
        font-size: 0.85rem;
        padding: 0.4rem 0.9rem;
      }
    }
  `}</style>
</section>
