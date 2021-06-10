import React from 'react'

function Buy() {
    const styles = {
        background:{
            backgroundColor:'#E7E6E7' ,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            paddingTop: 20,
            marginBottom:50,
            marginTop:50
            },
        heading:{
            marginTop:70,
        },
        para:{
            fontSize:16,
            fontWeight:400,
            marginTop:20,
        },
        image:{
            height: 150,
            marginLeft:250,
            marginTop:20,
        },
       
         cardheader:{
            fontSize:'22px',
            marginTop:10,
            fontWeight:600,
        },
        card1:{
            backgroundColor:'#FFFFFF',
            width: 600,
            marginTop:30,
            borderRadius: 10,
            borderColor:'#FFFFFF',
            paddingLeft:30,
            textAlign:"left"

        },

    }
    return (


     <div style={styles.background} className="text-center">
        <section >
             <div className="text-center">
                 <h2 style={styles.heading}>How To <span><strong style={{ color: '#C80C91' }}>Buy</strong></span></h2>
                 <p style={styles.para}>Get CORGIB in 4 Steps</p>
            </div>
            <div className="row">
                    <div className="col-md-6">
                        <img href="#" alt='bue' src="https://corgib.polkabridge.org/images/metamask.png" style={styles.image}></img>
                    </div>
            
                <div className="col-md-6">
                    <div style={styles.card}></div>
                       <div class="border border-white" style= {styles.card1}>
                            <h3 style={styles.cardheader}>1. Step: Install Metamask for Chrome</h3>
                            <p>Go to Metamask and install the Chrome extension. Follow their steps from the guide and finish the setup.</p>
                        </div>
                </div>
            </div>
            <div className="row"style={styles.background}>
                    <div className="col-md-6">
                        <img href="#" alt="buy" src="https://corgib.polkabridge.org/images/bnb.png" style={styles.image}></img>
                    </div>
            
                <div className="col-md-6">
                    <div style={styles.card}></div>
                       <div class="border border-white" style= {styles.card1}>
                            <h3 style={styles.cardheader}>2. Step: Send BNB to Metamask</h3>
                            <p>Once you have setup metamask, you can send BNB from an exchange like Kraken, Coinbase or Binance to your Metamask address.</p>
                        </div>
                </div>
                <div className="row"style={styles.background}>
                    <div className="col-md-6">
                        <img href="#" alt="images" src="https://corgib.polkabridge.org/images/pancake.png" style={styles.image}></img>
                    </div>
                    <div className="col-md-6">
                    <div style={styles.card}></div>
                       <div class="border border-white" style= {styles.card1}>
                            <h3 style={styles.cardheader}>3. Step: Go to PancakeSwap</h3>
                            <p>Go to PancakeSwap and click the "Approve" button (for the first time). Go ahead and when transaction finish, click "Swap".</p>
                        </div>
                </div>
                <div className="row"style={styles.background}>
                    <div className="col-md-6">
                        <img href="#" alt="crgb" src="https://corgib.polkabridge.org/corgi.png" style={styles.image}></img>
                    </div>
                    <div className="col-md-6">
                    <div style={styles.card}></div>
                       <div class="border border-white" style= {styles.card1}>
                            <h3 style={styles.cardheader}>4. Step: Swap your BNB for CORGIB</h3>
                            <p>Now you can swap your BNB for CORGIB. Set your slippage to 5-7% and buy an event amonunt of $CORGIB. Click on the Swap Button to finalize your trade. Make sure to set fast transaction speed in Metamask.</p>
                        </div>
                </div>
                </div>
                </div>
                
            </div>
        </section>
     </div>
    )
}

export default Buy;
