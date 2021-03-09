import React from "react";
import PropTypes from "prop-types";
const Header = ({logo}) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">ReactND - Coding Practice</h1>
    </header>
  )
}
Header.prototype = {
  logo: PropTypes.oneOf(['string', 'object']).isRequired,
}
export default Header;
