'use client'
import React, { useState } from 'react'

export default function LikeButton() {
  const [liked, setLiked] = useState(false)
  return (
    <button onClick={() => setLiked((prevState) => !prevState)}>
      {liked ? '🧡' : '🤍'}
    </button>
  )
}
