import React, { useEffect, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import ResizeObserver from 'resize-observer-polyfill'

const useMeasure = () => {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [ro])
  return [{ ref }, bounds]
}

const TextPreview = () => {
  return (
    <div>
      <p className="pb-2">
        Germany-based Artist, part of &quot;#DEKUBITUS&quot;-trio with producers
        and long time friends Stapes and Gobi. Member of the “Water/Gang”
        artists-collective.
      </p>
      <p className="pb-2">
        Cyf started making music at a young age andstarted seriously pursuing
        hip-hop and rap in 2013 at...
      </p>
    </div>
  )
}

const FullText = () => {
  return (
    <div>
      <p className="pb-2">
        Germany-based Artist, part of &quot;#DEKUBITUS&quot;-trio with producers
        and long time friends Stapes and Gobi. Member of the “Water/Gang”
        artists-collective.
      </p>
      <p className="pb-2">
        Cyf started making music at a young age and started seriously pursuing
        hip-hop and rap in 2013 at age 15. After numerous Singles and EPs
        released on soundcloud, the trio released their first commercial project
        in late 2019, not shying away from a provocative title in
        &quot;Bokassa&quot;. The EP talks about delusions of grandeur and how
        power changes men into ferals while still keeping the personal touches
        and topics, staples of Cyf’s lyricism.
      </p>
      <br />
      <p className="pb-2">
        Combining a modern soundscape with deep 808s and the occasional trap
        rhythm with the obvious Eastcoast-BoomBap influences resulted in a very
        unique vibe difficult to assign to a single genre. Inspirations include
        the WuTangClan, MF DOOM and Aesop Rock.
      </p>
      <p className="pb-2">
        While working on a song the priority and longest step is in most cases
        the songwriting. From personal and self-reflective verses about topics
        like personal growth, isolation and nihilism to less serious cuts with a
        bigger focus on smart or funny one-liners, the lyrics always take the
        foreground.
      </p>
      <br />
      <p className="pb-2">
        As of 2019 the trio ist 100% selfmade and -tought aswell as unsigned and
        looking for gigs and opportunities aswell as business partners etc.
      </p>
      <p className="pb-2">
        Until 2016 the trio played in a band and collected some valuable
        experiences playing live.
      </p>
      <p className="pb-2">
        From producing, writing and recording, audio engineering, marketing and
        even visuals such as coverart the group is completely independent and
        selfmade.
      </p>
      <br />
      <p className="pb-2">
        New projects are already being planned and worked on, stay tuned for
        more of Cyf and #DEKUBITUS!
      </p>
    </div>
  )
}
const About = () => {
  const [expanded, setExpanded] = useState(false)
  // const [height, setHeight] = useState(0)

  return (
    <div className="mt-6 bg-green-800">
      <div className="mx-8 py-6 lg:mx-64">
        <h2 className="text-gray-200 text-3xl font-bold mb-2 text-shadow-lg">
          About CYF
        </h2>
        <TextCard>
          {expanded ? <FullText /> : <TextPreview />}
          <div className="mt-2">
            {!expanded ? (
              <button
                type="button"
                className="text-green-500 hover:text-500 text-sm focus:outline-nones"
                onClick={() => setExpanded(true)}
              >
                More...
              </button>
            ) : (
              <button
                type="button"
                className="text-green-500 hover:text-500 text-sm"
                onClick={() => setExpanded(false)}
              >
                Collapse
              </button>
            )}
          </div>
        </TextCard>
      </div>
    </div>
  )
}

const TextCard = ({ children }) => {
  const [bind, { height }] = useMeasure()
  const props = useSpring({
    height,
  })
  return (
    <div className="py-8 px-6 bg-gray-200 text-gray-600 text-lg shadow-2xl rounded-xl leading-tight text-shadow-md">
      <animated.div style={{ ...props, overflow: 'hidden' }}>
        <div {...bind}>{children}</div>
      </animated.div>
    </div>
  )
}

export default About
