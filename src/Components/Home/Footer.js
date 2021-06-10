import React from 'react'

function Footer() {
    const styles ={
        background:{
        backgroundColor:'#C80C91',
        backgroundSize: 'cover',
        height:300,

        },
        logo: {
            height: 50,
            paddingLeft:100,
           
       
          },
          para:{
              marginLeft:100,
              marginTop:20,
          },
          footerline:{
            borderTopStyle: "solid",
            borderWidth: 1,
            width:1200,
            marginLeft:90,
            marginTop:50,
          },
          copyright:{
              marginTop:100,

          }
    }
    return (
        <div className="row">
            <div  style= {styles.background}>
            <div>
       <a className="navbar-brand" href="!#">
        <img href="#" alt="nav" src="https://corgib.polkabridge.org/corgi.png"style={styles.logo}></img><span style={{color:"white"}}>CORGIB</span></a>
<p style={styles.para}>CORGIB Finance is a fully decentralized, the first NFT MarketPlace for Meme tokens</p>
   </div>
   <div style={styles.footerline}></div>
   <div style={styles.copyright} className="text-center">Copyright 2021<span style={{color:"white"}}><strong> CORGIB Of PolkaBridge</strong></span>. All Rights Reserved.</div> 
            </div> 
        </div>
    )
}

export default Footer;
