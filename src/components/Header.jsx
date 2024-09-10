// import React from 'react'
import { Navbar } from "./Navbar.jsx"

const links = [
  "Women's",
  "Men's",
  "On the Street",
  "The Catwalk",
  "AdWatch",
  "About"
]
export const Header = () => {
  return (
    <header>
        <h1>Sartre&apos;s List</h1>
        <h2>Better-Dressed People</h2>
        <Navbar id="main" links={links}/>
    </header>
  )
}
