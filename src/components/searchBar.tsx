import React from 'react'
import './AppBar.css'
type searchBarType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar(props: searchBarType) {
  return (
    <>
      <div className="search" style={{ width: '50rem' }}>
        <input
          type="search"
          placeholder="Search for country"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={props.onChange}
        />
      </div>
    </>
  )
}

export default SearchBar
