import React from 'react'
import Image from 'next/image'
const fetchComments = async (id) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  // throw new Error()
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 10 }
  }).then((res) => res.json())
}

export default async function Post({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ background: '#222', fontSize: '10px' }}>
      {comments.map((comment, i) => (
        <li key={i}>
          <Image
            key={i}
            width={50}
            height={50}
            alt={comment.name}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 1}`}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
