import React from 'react'
import Counter from './Counter'

export default function layout({ children }) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}
