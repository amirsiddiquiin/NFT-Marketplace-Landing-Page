import React from 'react';

let styles = {
    logo: {
        height: 50,
      },
    navbar:{
        textAlignment:"right",
        fontSize: "16px",
        fontWeight:500,
    },

 
    navbarButton1:{
      backgroundColor: '#C80C91',
      width: 150,
      borderRadius: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 5,
      paddingRight: 5,
      fontWeight: 700,
      color:"#E8EDEC",
      marginRight:15,   
     }
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">           
  <div className="container-fluid">
   <div>
       <a className="navbar-brand" href="#">
        <img alt="navimg" src="https://corgib.polkabridge.org/corgi.png"style={styles.logo}></img>
        Corgi of <span style={{ color: '#C80C91' }}>
                  <strong> 
                    Polka  Bridge 
                  </strong>
                </span></a>
   </div>
    
      <div style={styles.navbar}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link" href="#"style={{color:'#1E1E1E'}}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"style={{color:'#1E1E1E'}}>Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"style={{color:'#1E1E1E'}}>Roadmap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"style={{color:'#1E1E1E'}}>Tokenomics</a>
        </li>
        <li className="nav-item" style={styles.border}>
          <a className="nav-link border border-dark" href="#"style={{color:'#1E1E1E'}} >TO THE MOON</a>
        </li>
      </ul> 
          </div> 
          <div>
        <button className="btn" style={styles.navbarButton1}>PaneCake Swap</button>
        <button className="btn" style={styles.navbarButton1}>Price Chart</button>
    </div>
          
      
  </div>
</nav>
    )
}

export default Navbar;
