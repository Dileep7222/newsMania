import React from 'react'
import img from '../assets/download.jpeg'

const NewsItem = (props) => {
    console.log(props);
    
  return (
    <div className="card  bg-dark text-light px-2 py-2 d-inline-block ml-1 mx-4 my-4 ml-5" style={{maxWidth:"370px" }}>
    <img src={props.src?props.src:img} style={{height:"200px",widht:"320px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title.slice(0,40)}</h5>
      <p className="card-text">{props.description?props.description.slice(0,90):"The arguments focused on whether federal district court judges can rule against the admini..."}</p>
      <a href={props.url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewsItem
