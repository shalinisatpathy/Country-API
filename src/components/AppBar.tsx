import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ThemeToggle from './theme/ThemeToggle'
import './AppBar.css'
function AppBar() {
  return (
    <div>
      <h1>Country Details</h1>
      <div className="cart_right">
        <div className="toggle">
          <ThemeToggle />
        </div>
        <Link to="/country/fav">
          <FavoriteIcon />
        </Link>
      </div>
    </div>
  )
}

export default AppBar
