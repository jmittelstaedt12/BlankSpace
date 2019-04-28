import React from 'react';

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper" style={{'backgroundColor': '#ffffff'}}>
        <img className="brand-logo center" src={require('../assets/Blank\ Space\ Horizontal.png')}/>
      </div>
  </nav>
  );
}

export default NavBar;
