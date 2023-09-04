import React from 'react'

interface Props {
  cartItemsCount: number
}

const NavBar = ({cartItemsCount}: Props) => {
  return (
    <div>Navbar: {cartItemsCount}</div>
  )
}

export default NavBar