import React from 'react';

const DarkModeToggler = (props) => {
  return(
    <label className="switch">
      <input type="checkbox" checked={props.darkModeOn} onClick={() => props.toggleDarkMode()}/>
      <span className="slider round"></span>
    </label>
  )
}
export default DarkModeToggler;