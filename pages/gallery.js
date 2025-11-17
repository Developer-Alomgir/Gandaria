import Head from 'next/head'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1400&q=80', alt: 'Aerial view' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400', alt: 'River view' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Dhaka_15th_Dec_%2830831791754%29.jpg', alt: 'Dhaka skyline' }
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <Head><title>Our Gandaria — Gallery</title></Head>
      <main className="container">
        <h2>Gallery — Aerial & Landscape</h2>
        <p className="muted">Click an image to open lightbox. Hover to zoom.</p>

        <div className="gallery-grid">
          {IMAGES.map((img,i)=>(
            <motion.div key={i} whileHover={{scale:1.03}} className="img-wrap" onClick={()=>setSelected(img)}>
              <img src={img.src} alt={img.alt} loading="lazy"/>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}>
              <motion.img src={selected.src} alt={selected.alt} initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}
