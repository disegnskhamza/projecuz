import React from 'react'

function Map(props) {
    const {values} = props
  return (
    <div> 
        {values.map((Khamza,index)=>{
        return(
          <div key={Khamza.id}> 
  <ul>
    <li>
      {Khamza.id}
      {""}
      {Khamza.name}
      {""}
      {Khamza.title}
    </li>
    {Khamza.id}
      {""}
      {Khamza.name}
      {""}
      {Khamza.title}
  </ul>
          </div>
        )
      })}
      
    
    </div>
  )
}

export default Map