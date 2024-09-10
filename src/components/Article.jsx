/* eslint-disable react/prop-types */
// import React from 'react'

export const Article = ({date, title, img, content}) => {
    return (
    <article>
        <h4>{date}</h4>
        <h3>{title}</h3>
        <img src={img.src} alt={img.name}></img>
        <p className="description">{content}</p>
        <p className="continue"><a href="#">Continues...</a></p>
    </article>
  )
}

export function BlogPost() {
  return(
    <section>
      
    </section>
  )
}