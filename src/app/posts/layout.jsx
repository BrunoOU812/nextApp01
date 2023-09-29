import React from 'react'
import Counter from './Counter'

export default function layout({ children }) {
  return (
    <div>
      <h1>Este es el layout de los posts</h1>
      <Counter />
      {children}
    </div>
  )
}
