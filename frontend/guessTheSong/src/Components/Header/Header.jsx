import React from 'react'
import "./Header.css"
export const Header = () => {
  return (
    <div className='header'>
        <div className='items'>
            <h1><span>Guess</span>.theSong</h1>
            <div className='nav-items'>
                <ul>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
