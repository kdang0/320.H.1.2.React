// import React from 'react'
import { Navbar } from "./Navbar"

const links = [
    "Home",
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
    "Tips"
]

export const Footer = () => {

  return (
    <footer>
        <Navbar id="footer" links={links} />
        <p>&copy; 2013 Valet Industries, Inc</p>
    </footer>
  )
}
