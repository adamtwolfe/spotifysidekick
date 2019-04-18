import React from 'react'
const casual = require('casual-browserify')

const cardContainer = {
  display: 'inline-block',
  border: '1px solid black',
  maxWidth: '250px',
  boxShadow: '3px 3px grey'
}

const headerContainer = {
  textAlign: 'center'
}

const header = {
  display: 'inline-block',
  padding: '2px 0px 5px',
  fontSize: '20px',
  wordWrap: 'break-word'
}

const body = {
  padding: '2px 5px 5px',
  wordWrap: 'break-word',
}

const hr = {
  margin: '0px'
}

export default (props) => {
  return (
    <div style={cardContainer}>
      <div style={headerContainer}>
        <div style={header}>{props.title || casual.short_description}</div>
      </div>
      <hr style={hr}/>
      <div style={body}>{props.content || casual.description}</div>
    </div>
  )
}