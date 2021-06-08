import React from 'react'

function Marketplace () {
    const styles = {
        background:{
            backgroundColor:'#E7E6E7' ,
            backgroundSize: 'cover',
            paddingTop: 30,

            
        },
        
        heading:{
            marginTop:150,
        },
        para:{
            fontSize:16,
            fontWeight:400,
            marginTop:20,
        },
        image:{
            height:460,
        }

    }
    return (
        <div style={styles.background}>
        <div class="container">
             <div className="text-center">
                 <h2 style={styles.heading}><span> <strong style={{ color: '#C80C91' }}>CORGIB </strong></span>NFT Marketplace</h2>
                 <p style={styles.para}>CORGIB MarketPlace - Where you can create, buy and sell meme NFT</p>
                 <img alt="market" src="https://corgib.polkabridge.org/images/corgibnft.jpg" style={styles.image}></img>
             </div>
        </div>
        </div>
        
    )
}

export default Marketplace;
