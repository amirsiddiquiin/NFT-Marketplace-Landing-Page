import React from 'react'

function Tokenomics() {
    const styles ={
           logo: {
            height: 30,
          },
          image:{
            height: 450,
            marginLeft:130,
            marginTop:250,
          },
          heading:{
            marginTop:150,
          },
         para:{
            fontSize:16,
            fontWeight:400,
            marginTop:20,
         },
         card:{
            width: 570,
            marginTop:30,
            borderRadius: 10,
            paddingLeft:13,
         },
         cardheader:{
            color:'#C80C91',
            fontSize:'22px',
            marginTop:10,
            fontWeight:600,
         }
    }
    return (
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <img alt="token" src="https://corgib.polkabridge.org/images/tokenomics.png" style={styles.image}></img>
                    </div>
                    <div className="col-md-6">
                        <h1 style={styles.heading}><img alt="tokenomics"  src="https://corgib.polkabridge.org/corgi.png"style={styles.logo}></img><span> <strong style={{ color: '#C80C91' }}>Tokenomics</strong></span> 	&#38; Locking</h1>
                        <div class="border border-dark" style= {styles.card}>
                            <h3 style={styles.cardheader}>30% - Airdrop</h3>
                            <p style={styles.para}>30% of the total token will be distrubuted through airdrop campaign,<br/> scheduled from 13-18 May.</p>
                        </div>
                        <div class="border border-dark" style= {styles.card}>
                            <h3 style={styles.cardheader}>20% - Pancakeswap Liquidity</h3>
                            <p style={styles.para}>20% of the total token will be used to provide liquidity at Pancakeswap.</p>
                        </div>
                        <div class="border border-dark" style= {styles.card}>
                            <h3 style={styles.cardheader}>45% - Reserve Burning</h3>
                            <p style={styles.para}>45% of the total token will be reserved for burning event with schedule of 1% per day.</p>
                        </div>
                        <div class="border border-dark" style= {styles.card}>
                            <h3 style={styles.cardheader}>5% - Team</h3>
                            <p style={styles.para}>5% of the total token will be reserved for the team</p>
                        </div>
                    </div>
                   
                </div>
            </section>
    )
};

export default Tokenomics;
