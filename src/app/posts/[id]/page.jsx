import React from 'react'

export default function Post({ params }) {
  const { id } = params
  return <h1>Esto es el Post N°{id}</h1>
}
