import React from 'react'
import "./Homepage.css"
import { Header } from '../Header/Header'
export const Homepage = () => {
    return (
        <div>
            <div className='nav'>
                <Header />
                <div className='hero'>
                    <div>
                        Play for free
                    </div>
                </div>
            </div>
        </div>
    )
}
