import React from 'react'
import { Link } from 'react-router-dom'
import SolidButton from '../Shared/SolidButton'

const Home = () => {
  const backgroundImageUrl = 'https://miro.medium.com/max/1400/1*8ygFKYb0Yo6Hc-vnScGA9A.png'

  const homeStyles = {
    /* Center the heading inside the container */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    /* Set background image */
    backgroundImage: `url(${backgroundImageUrl})`,
    /* Covers the entire width of the div */
    backgroundSize: 'cover',
    /* Center the background */
    backgroundPosition: 'center',

    /* Take up half the viewport's height, (50 out of 100) */
    height: '100vh',

    color: 'BLUE',
    textAlign: 'center'
  }

  return (
    <div style={homeStyles}>
      <div>
        <h1> TASK ASSIGNER </h1>
        <Link to='/sign-up'>
          <SolidButton primaryColor='BLUE'>Sign Up</SolidButton>
        </Link>
        <Link to='/sign-in'>
          <SolidButton primaryColor='Blue'>Sign In</SolidButton>
        </Link>
      </div>
    </div>
  )
}
export default Home
