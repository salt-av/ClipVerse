import './styles.css'
import {useState} from 'react'

export default function Header({search, setSearch}) {
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    return(<>
    <div className="header">
        <form className="search-bar">
        <button className="style-button">=</button>
        <input 
            type="text" 
            onChange = {handleSearchChange}
            placeholder="search for videos"
            value={search}>
            </input>
        <button className="style-button">Clear</button>
        <button className="style-button">Search</button>
        <button className="style-button-spaced">User Profile</button>
        </form>
    </div>
    </>)
}