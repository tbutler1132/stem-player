import React from "react"

export interface ButtonProps {
  label: string
  ear: string
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <audio
        controls
        src="https://cdn.sanity.io/files/kljwxr6f/production/be1e78ae85846e61fe807c16e127b8cfe4005e69.wav"
      />
      <p>{props.ear}</p>
    </>
  )
}

export default Button
