import Slide from "./Components/Slide";
import "./App.css";
import React, { useState,useEffect} from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides

export default function App() {
  const [data,setData] = useState([])
  const [index,setIndex] = useState(0)
  useEffect( ()=>{
    let url = `https://slides-app-220822.herokuapp.com/slides`
    fetch(url).then((result)=>{
      result.json().then((res)=>{
        setData(res)
      })
    })
  },[])
  console.warn(data)

  const nextfun = ()=>{
    if(index<data.length-1)
    setIndex(index+1)
  }
  const prevfun = ()=>{
    if(index>0)
    setIndex(index-1)
  }
  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
      
      <Slide {...data[index]}/>
      <button onClick={prevfun} data-cy="prev">Prev</button>
      <button onClick={nextfun} data-cy="next">Next</button>
    </div>
  );
}
