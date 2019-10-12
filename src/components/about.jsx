import React, { useState, useRef, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import ResizeObserver from 'resize-observer-polyfill'

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

const useMeasure = () => {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ ref }, bounds]
}

const textPreview = `Germany-based Artist, part of "#DEKUBITUS"-trio with producers and long time friends Stapes and Gobi. Member of the “Water/Gang” artists-collective. \n
Cyf started making music at a young age andstarted seriously pursuing hip-hop and rap in 2013 at...`
const fullText = `Germany-based Artist, part of "#DEKUBITUS"-trio with producers and long time friends Stapes and Gobi. Member of the “Water/Gang” artists-collective. \n
Cyf started making music at a young age and started seriously pursuing hip-hop and rap in 2013 at age 15. After numerous Singles and EPs released on soundcloud, the trio released their first commercial project in late 2019, not shying away from a provocative title in "Bokassa". The EP talks about delusions of grandeur and how power changes men into ferals while still keeping the personal touches and topics, staples of Cyf’s lyricism. \n \n

Combining a modern soundscape with deep 808s and the occasional trap rhythm with the obvious Eastcoast-BoomBap influences resulted in a very unique vibe difficult to assign to a single genre. Inspirations include the WuTangClan, MF DOOM and Aesop Rock.\n
While working on a song the priority and longest step is in most cases the songwriting. From personal and self-reflective verses about topics like personal growth, isolation and nihilism to less serious cuts with a bigger focus on smart or funny one-liners, the lyrics always take the foreground.\n\n

As of 2019 the trio ist 100% selfmade and -tought aswell as unsigned and looking for gigs and opportunities aswell as business partners etc.\n
Until 2016 the trio played in a band and collected some valuable experiences playing live.\n
From producing, writing and recording, audio engineering, marketing and even visuals such as coverart the group is completely independent and selfmade.\n\n

New projects are already being planned and worked on, stay tuned for more of Cyf and #DEKUBITUS!`

const About = () => {
  const [expanded, setExpanded] = useState(false)
  //const [height, setHeight] = useState(0)

  return (
    <div
      className="mt-6"
      style={{
        background: 'linear-gradient(180deg, #5A826F 0%, #55615C 100%)',
      }}
    >
      <div
        className="mx-8 py-6"
        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <h2 className="text-green-400 text-3xl font-bold mb-2">
          About the Artist
        </h2>
        <Text text={!expanded ? textPreview : fullText} />
        <div className="mt-4">
          {!expanded ? (
            <button
              className="text-green-300 hover:text-500 font-bold"
              onClick={() => setExpanded(true)}
            >
              more...
            </button>
          ) : (
            <button
              className="text-green-300 hover:text-500 font-bold"
              onClick={() => setExpanded(false)}
            >
              close
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const Text = ({ text }) => {
  const [bind, { height }] = useMeasure()
  const props = useSpring({
    height,
  })
  return (
    <animated.div
      className="text-green-200 text-xl"
      style={{ overflow: 'hidden', ...props }}
    >
      <div {...bind}>{text}</div>)
    </animated.div>
  )
}

export default About
