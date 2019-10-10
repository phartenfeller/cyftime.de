import React, { useState } from "react"

const textPreview = `Germany-based Artist, part of "#DEKUBITUS"-trio with producers and long time friends Stapes and Gobi. Member of the “Water/Gang” artists-collective.
Cyf started making music at a young age andstarted seriously pursuing hip-hop and rap in 2013 at...`
const fullText = `Germany-based Artist, part of "#DEKUBITUS"-trio with producers and long time friends Stapes and Gobi. Member of the “Water/Gang” artists-collective.
Cyf started making music at a young age and started seriously pursuing hip-hop and rap in 2013 at age 15. After numerous Singles and EPs released on soundcloud, the trio released their first commercial project in late 2019, not shying away from a provocative title in "Bokassa". The EP talks about delusions of grandeur and how power changes men into ferals while still keeping the personal touches and topics, staples of Cyf’s lyricism.

Combining a modern soundscape with deep 808s and the occasional trap rhythm with the obvious Eastcoast-BoomBap influences resulted in a very unique vibe difficult to assign to a single genre. Inspirations include the WuTangClan, MF DOOM and Aesop Rock.
While working on a song the priority and longest step is in most cases the songwriting. From personal and self-reflective verses about topics like personal growth, isolation and nihilism to less serious cuts with a bigger focus on smart or funny one-liners, the lyrics always take the foreground.

As of 2019 the trio ist 100% selfmade and -tought aswell as unsigned and looking for gigs and opportunities aswell as business partners etc.
Until 2016 the trio played in a band and collected some valuable experiences playing live.
From producing, writing and recording, audio engineering, marketing and even visuals such as coverart the group is completely independent and selfmade.

New projects are already being planned and worked on, stay tuned for more of Cyf and #DEKUBITUS!`

const About = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="mt-6"
      style={{
        background: "linear-gradient(180deg, #5A826F 0%, #55615C 100%)",
      }}
    >
      <div
        className="mx-8 py-6"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <h2 className="text-green-400 text-3xl font-bold mb-2">
          About the Artist
        </h2>
        <div className="text-green-200 text-xl">
          {!expanded ? textPreview : fullText}
        </div>
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

export default About
