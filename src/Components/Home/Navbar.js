import React from 'react';

let styles = {
    logo: {
        height: 50,
      },
    navbar:{
        fontSize: 16,
        fontWeight:500,
        marginLeft:90,
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
     },
     button:{
      borderRadius:10,
      width:150,
      borderColor:'#212529',
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: 500,
      
    },
    top:{
      marginLeft:100,
    },

}

function Navbar() {
    return (
      <div style={styles.top}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">           
  <div className="container-fluid">
   <div>
       <a className="navbar-brand" href="!#">
        <img href="#" alt="nav" src="https://corgib.polkabridge.org/corgi.png"style={styles.logo}></img>
        Corgi of <span style={{ color: '#C80C91' }}><strong> Polka  Bridge </strong></span></a>
   </div>
    
      <div style={styles.navbar}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link" href="!#"style={{color:'#1E1E1E'}}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="!#"style={{color:'#1E1E1E'}}>Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="!#"style={{color:'#1E1E1E'}}>Roadmap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="!#"style={{color:'#1E1E1E'}}>Tokenomics</a>
        </li>
        <button className="btn" style={styles.button}>To The Moon</button>
      </ul> 
          </div> 
          <div>
          
        <button className="btn" style={styles.navbarButton1}>PaneCake Swap</button>
        <button className="btn" style={styles.navbarButton1}>Price Chart</button>
    </div>

  </div>
</nav>
</div>
    )
}

export default Navbar;

