/* eslint-disable react/prop-types */
// import React from 'react'

export const Navbar = ({id, links}) => {
    const linkElements = links?.map((link, i) => {
        return(
            <li key={i}>
                <a href="#">{link}</a>
            </li>
        )})
    return (
    <nav>
        <ul id={id}>
            {linkElements}
        </ul>
    </nav>
  )
}
