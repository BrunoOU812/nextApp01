'use client'

import React, { useState } from 'react'
export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count {count}
      <div onClick={() => setCount(count + 1)}>Counter</div>
    </div>
  )
}
