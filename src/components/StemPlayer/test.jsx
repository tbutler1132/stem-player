// import React, { useEffect, useRef, useState } from "react"
// import * as Tone from "tone"

// export interface StemPlayerProps {}

// const StemPlayer = (props: StemPlayerProps) => {
//   const audioEl = useRef(null)
//   const volumeEl = useRef(null)

//   const audioSources = [
//     "https://cdn.sanity.io/files/kljwxr6f/production/be1e78ae85846e61fe807c16e127b8cfe4005e69.wav",
//     "https://tonejs.github.io/audio/berklee/gong_1.mp3",
//   ]

//   const toneStart = async () => {
//     await Tone.start()
//     console.log("audio is ready")
//   }

//   // const initializeTrackPlayers = (sources: [String]) => {
//   //   const players: String[] = []
//   //   sources.forEach(source => {
//   //     players.push(source)
//   //   })
//   //   return players
//   // }

//   const channel = new Tone.Channel(-12, -0.5)

//   const player = new Tone.Player(
//     "https://tonejs.github.io/audio/berklee/gong_1.mp3"
//   )

//   const player2 = new Tone.Player(
//     "https://cdn.sanity.io/files/kljwxr6f/production/be1e78ae85846e61fe807c16e127b8cfe4005e69.wav"
//   )

//   player2.chain(channel, Tone.Destination)

//   const clickHandler = () => {
//     toneStart()

//     Tone.loaded().then(() => {
//       player.start()
//       console.log(player2.volume.value)
//       player2.start()
//     })
//   }

//   const stopHandler = () => {
//     player.stop()
//     player2.stop()
//   }

//   const muteHandler = () => {
//     channel.mute = true
//   }

//   const volumeHandler = (e: any) => {
//     console.log(e.target.value, "vol")
//     player2.volume.value = Number(e.target.value) * 100
//   }

//   const renderAudioTracks = () => {
//     return audioSources.map((el) => (
//       <div key={el}>
//         <audio id="test" ref={audioEl} crossOrigin="anonymous" src={el}></audio>
//         <input
//           ref={volumeEl}
//           type="range"
//           id="volume"
//           min="-100"
//           max="0"
//           step=".1"
//         ></input>
//       </div>
//     ))
//   }

//   return (
//     <>
//       <p>Yo Yo yo yo</p>
//       <button
//         onClick={clickHandler}
//         // ref={playButtonEl}
//         // data-playing="false"
//         // role="switch"
//         // aria-checked="false"
//       >
//         <span>Play/Pause</span>
//       </button>
//       <button
//         onClick={stopHandler}
//         // ref={playButtonEl}
//         // data-playing="false"
//         // role="switch"
//         // aria-checked="false"
//       >
//         <span>STOP</span>
//       </button>
//       <button
//         onClick={muteHandler}
//         // ref={playButtonEl}
//         // data-playing="false"
//         // role="switch"
//         // aria-checked="false"
//       >
//         <span>mute</span>
//       </button>
//       <input
//         onChange={volumeHandler}
//         type="range"
//         id="volume"
//         min="-1"
//         max="0"
//         step="0.01"
//       ></input>
//       {renderAudioTracks()}
//     </>
//   )
// }

// export default StemPlayer
