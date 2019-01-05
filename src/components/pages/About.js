import React from 'react'

export default function About() {
  return (
    <React.Fragment>
      <div style={aboutStyle}>
        <h1>About</h1>
        <p>
        This is the TodoList app v1.0.0. It is part of a React crash course.
        </p>
      </div>
    </React.Fragment>
  )
}

const aboutStyle = {
  textAlign: 'center',
  color: 'white',
  paddingBottom: '1rem'
}
