import React from 'react'

export default function button(props){
  return(
    <input type="submit" onSubmit={() => props.apiCall()} />
  )
}