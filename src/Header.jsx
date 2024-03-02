import './styles.css'
import {useState} from 'react'

export default function Header() {
    return(<>
    <div className="header">
        <form className="search-bar">
        <button className="style-button">=</button>
        <input 
            type="text" 
            placeholder="search for videos">
            </input>
        <button className="style-button">Clear</button>
        <button className="style-button">Search</button>
        <button className="style-button-spaced">User Profile</button>
        </form>
    </div>
    </>)
}