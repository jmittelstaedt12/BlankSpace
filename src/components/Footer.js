import React from 'react';

function Footer() {
  return (
    <div className="footer-copyright" style={styles.link}>
      © 2019 BlankSpace
    </div>
  );
}

const styles = {
  link: {
    color: 'black',
    padding: '17px 0',
    fontSize:'15px',
    fontFamily: 'Lato',
    fontWeight: 'Normal',
  }
}
export default Footer
