import Head from 'next/head'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdnb.artstation.com/p/assets/images/images/070/765/501/large/alomgirs-art-dimension-412097291-2301895530021277-6381011595412999417-n.jpg?1703431258', alt: 'Aerial view' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/071/594/196/large/alomgirs-art-dimension-416055485-229086306906762-1764985316877850287-n.jpg?1705511648', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/071/582/814/large/alomgirs-art-dimension-419482742-3686901844862658-6423547798894802573-n.jpg?1705495449', alt: 'Train Station' },
  { src: 'https://cdnb.artstation.com/p/assets/images/images/071/633/103/large/alomgirs-art-dimension-328828422-878861803389626-3657735845745225989-n.jpg?1705591788', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/071/593/772/large/alomgirs-art-dimension-334783711-933742827664913-6924256699461926933-n.jpg?1705511096', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/982/748/large/alomgirs-art-dimension-415794475-7175690209160777-3850861770437665719-n.jpg?1704177352', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
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
