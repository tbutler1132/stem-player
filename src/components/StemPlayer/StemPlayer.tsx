import React, { useEffect, useRef, useState } from "react"
import * as Tone from "tone"

export interface StemPlayerProps {}

const StemPlayer = (props: StemPlayerProps) => {
  const audioEl = useRef(null)
  const volumeEl = useRef(null)
  const [players, setPlayers] = useState<any[]>([])

  const audioSources = [
    "https://cdn.sanity.io/files/kljwxr6f/production/be1e78ae85846e61fe807c16e127b8cfe4005e69.wav",
    "https://tonejs.github.io/audio/berklee/gong_1.mp3",
  ]

  const toneStart = async () => {
    await Tone.start()
    console.log("audio is ready")
  }

  console.log("user", players)

  useEffect(() => {
    setPlayers(initializeTrackPlayers(audioSources))
  }, [])

  const initializeTrackPlayers = (sources: string[]) => {
    const players: any[] = []
    for (let i = 0; i < audioSources.length; i++) {
      players.push(new Tone.Player(sources[i]))
    }
    return players
  }

  console.log(initializeTrackPlayers(audioSources), "init")

  const channel = new Tone.Channel(-12, -0.5)

  const player = new Tone.Player(
    "https://tonejs.github.io/audio/berklee/gong_1.mp3"
  )

  const player2 = new Tone.Player(audioSources[0]).toDestination()

  const clickHandler = async () => {
    await toneStart()
    players.forEach((player) => {
      player.toDestination()
    })
    Tone.loaded().then(() => {
      players.forEach((player) => {
        player.start()
      })
    })
  }

  const stopHandler = () => {
    players.forEach((player) => {
      player.stop()
    })
  }

  const muteHandler = () => {
    channel.mute = true
  }

  const volumeHandler = (e: any) => {
    console.log(e.target.value, "vol")
    player2.volume.value = Number(e.target.value) * 100
  }

  const renderAudioTracks = () => {
    return audioSources.map((el) => (
      <div key={el}>
        <audio id="test" ref={audioEl} crossOrigin="anonymous" src={el}></audio>
        <input
          ref={volumeEl}
          type="range"
          id="volume"
          min="-100"
          max="0"
          step=".1"
        ></input>
      </div>
    ))
  }

  if (!players.length) return <div>Loading...</div>
  return (
    <>
      <p>Yo Yo yo yo</p>
      <button
        onClick={clickHandler}
        // ref={playButtonEl}
        // data-playing="false"
        // role="switch"
        // aria-checked="false"
      >
        <span>Play/Pause</span>
      </button>
      <button
        onClick={stopHandler}
        // ref={playButtonEl}
        // data-playing="false"
        // role="switch"
        // aria-checked="false"
      >
        <span>STOP</span>
      </button>
      <button
        onClick={muteHandler}
        // ref={playButtonEl}
        // data-playing="false"
        // role="switch"
        // aria-checked="false"
      >
        <span>mute</span>
      </button>
      <input
        onChange={volumeHandler}
        type="range"
        id="volume"
        min="-1"
        max="0"
        step="0.01"
      ></input>
      {renderAudioTracks()}
    </>
  )
}

export default StemPlayer
