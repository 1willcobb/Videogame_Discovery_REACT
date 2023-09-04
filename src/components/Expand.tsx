import React from 'react'

interface Props {
    children: string,
    maxChars?: number
}


const Expand = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default Expand