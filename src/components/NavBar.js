import React from 'react';

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper" style={{'backgroundColor': '#ffffff'}}>
        <img className="brand-logo center" src={require('../assets/Blank\ Space\ Horizontal.png')}/>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
  </nav>
  );
}

export default NavBar;
