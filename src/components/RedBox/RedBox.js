import React from 'react'

const RedBox = ({firstName, lastName}) => {
  return (
    <h1 data-testid='box'>Hi {firstName + ' ' + lastName}</h1>
  )
}
export default RedBox