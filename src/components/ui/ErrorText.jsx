import React from 'react'

function ErrorText({ message }) {
  return (
    <p className="text-red-500 text-[10px] font-medium mt-1">{message}</p>
  )
}

export default ErrorText