import React from 'react'
import "./Header.css"
export const Header = () => {
  return (
    <div className='header'>
        <div className='items'>
            <h1><span>Guess</span>.theSong</h1>
            <div className='nav-items'>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/auth">Login</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
