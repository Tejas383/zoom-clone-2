import React from 'react'

const page = async () => {
  const result = await fetch('http://localhost:8000/')
  const data = await result.json();
  return (
    <div>
      {data.message}
    </div>
  )
}

export default page
