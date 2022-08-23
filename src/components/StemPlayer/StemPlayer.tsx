import React, { useEffect, useState } from "react"
import * as Tone from "tone"

export interface StemPlayerProps {}

const StemPlayer = (props: StemPlayerProps) => {
  const audioSources = [
    "https://cdn.sanity.io/files/kljwxr6f/production/be1e78ae85846e61fe807c16e127b8cfe4005e69.wav",
    "https://tonejs.github.io/audio/berklee/gong_1.mp3",
  ]

  return (
    <>
      <p>Yo Yo yo yo</p>
      <MasterController sources={audioSources} />
    </>
  )
}

export default StemPlayer

export interface MasterControllerProps {
  sources: string[]
}

const MasterController = (props: MasterControllerProps) => {
  const { sources } = props
  const [currentPlayers, setPlayers] = useState<any>([])

  useEffect(() => {
    const ply = createPlayers()
    setPlayers(ply)
  }, [])

  const createPlayers = () => {
    const players: { channel: Tone.Channel; player: Tone.Player }[] = []
    sources.forEach((source) => {
      const obj = {
        channel: new Tone.Channel(0, 0),
        player: new Tone.Player(source),
      }
      obj.player.chain(obj.channel, Tone.Destination)
      players.push(obj)
    })
    return players
  }

  const toneStart = async () => {
    await Tone.start()
    console.log("audio is ready")
  }
  const startHandler = async () => {
    toneStart()
    Tone.loaded().then(() => {
      currentPlayers.forEach((player: { player: { start: () => void } }) => {
        player.player.start()
      })
    })
  }
  const stopHandler = () => {
    currentPlayers.forEach((player: { player: { stop: () => void } }) => {
      player.player.stop()
    })
  }
  return (
    <>
      <button onClick={startHandler}>Start!!!</button>
      <button onClick={stopHandler}>Stop!!!!</button>
      {currentPlayers.map((player: {}, idx: number) => (
        //@ts-ignore
        <ChannelStrip key={idx} player={player} />
      ))}
    </>
  )
}

export interface ChannelStripProps {
  player: {
    channel: any
    player: any
  }
}

const ChannelStrip = (props: ChannelStripProps) => {
  const { player } = props
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0)

  const muteHandler = () => {
    player.channel.mute = !muted
    setMuted(!muted)
  }

  const soloHandler = () => {
    player.channel.solo = true
  }

  const volumeHandler = (e: any) => {
    player.channel.volume.value = e.target.value
    setVolume(e.target.value)
  }

  const panHandler = (e: any) => [(player.channel.pan.value = e.target.value)]

  return (
    <div style={{ border: "solid", borderColor: muted ? "red" : "green" }}>
      <button onClick={muteHandler}>Mute</button>
      <button onClick={soloHandler}>Solo</button>
      <label>Volume</label>
      <input
        onChange={volumeHandler}
        type="range"
        id="volume"
        min="-36"
        max="0"
        step="0.1"
      ></input>
      <label>Pan</label>
      <input
        onChange={panHandler}
        type="range"
        id="pan"
        min="-1"
        max="1"
        defaultValue="0"
        step=".1"
      ></input>
    </div>
  )
}
