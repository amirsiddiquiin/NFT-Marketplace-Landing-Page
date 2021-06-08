import React from 'react'

function Roadmap () {
    const styles = {
        heading:{
            marginTop:150,
        },
        image:{
            height:460,
        },
    
        card1:{
            backgroundColor:'#F4F4F4',
            width: 600,
            height:1000,
            marginTop:30,
            borderRadius: 10,
            marginLeft:250,
        },
        innercard:{
            backgroundColor:'#FFFFFF',
            width: 570,
            marginTop:30,
            borderRadius: 10,
            marginLeft:12,
        },
        cardheader:{
            color:'#C80C91',
            fontSize:'22px',
            marginTop:10,
            fontWeight:600,
            textAlignment:'left',
            marginLeft:15,
        },
        para:{
            fontSize:16,
            fontWeight:400,
            marginTop:10,
            marginLeft:15,
        },


    }
    return (
        <div class="container">
             <div className="text-center">
                 <h2 style={styles.heading}>CORGIB<span><strong style={{ color: '#C80C91' }}>ROADMAP </strong></span></h2>
                 <p style={styles.para}>Our CORGIB Walk (Q2/2021).</p>
                 <div style={styles.card}>
                 <div class="border border-white" style= {styles.card1}>
                 <div class="border border-dark" style= {styles.innercard}>
                            <h3 style={styles.cardheader}>Token Fair Launch</h3>
                            <p style={styles.para}>CORBIG will be listed on PANCAKESWAP at 3PM UTC, 13th May.</p>
                        </div>
                        <div class="border border-dark" style= {styles.innercard}>
                            <h3 style={styles.cardheader}>Safety</h3>
                            <ul>
                               <li style={styles.para}>Liquidity will be locked for 2 month on Unicrypt.</li>
                               <li style={styles.para}> 45% of all tokens will be reserved and burnt 1% everyday.</li>
                               <li style={styles.para}>  Team's token will be locked.</li>
                                
                            </ul>
                        </div>
                        <div class="border border-dark" style= {styles.innercard}>
                            <h3 style={styles.cardheader}>Managing Expansion</h3>
                            <ul>
                               <li style={styles.para}>Influencers are on-board.</li>
                               <li style={styles.para}> Community contribution 	&#38; promotion contests.</li>
                               <li style={styles.para}>  The shiling army is ready for TikTok | Twitter | YouTube promotions.</li>
                               <li style={styles.para}>  Partnerships 	&#38; Collaborations.</li>  
                            </ul>
                           
                        </div>
                        <div class="border border-dark" style= {styles.innercard}>
                            <h3 style={styles.cardheader}>Open to the world</h3>
                            <ul>
                               <li style={styles.para}>CoinGecko Listing.</li>
                               <li style={styles.para}> CoinMarketcap Listing.</li>
                               <li style={styles.para}> Tier-2 exchange Listing.</li>
                            </ul>
                        </div>
                        <div class="border border-dark" style= {styles.innercard}>
                            <h3 style={styles.cardheader}>Defi &#38; Gaming</h3>
                            <ul>
                               <li style={styles.para}>EURO 2020 Event - Online Football Betting Platform.</li>
                               <li style={styles.para}> Staking CORGIB on PolkaBridge.</li>
                            </ul>
                        </div>
                        <div class="border border-dark" style= {styles.innercard}>
                            <h3 style={styles.cardheader}>Marketplace</h3>
                               <p style={styles.para}>NFT marketplace testnet</p>
                        </div>
                        
                 </div>
                 </div>
             </div>
        </div>
    )
}

export default Roadmap;