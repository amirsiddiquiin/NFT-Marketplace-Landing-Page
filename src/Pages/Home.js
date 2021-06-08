import React from 'react'

function Home() {
    const styles = {
    background:{
        backgroundColor:'#E7E6E7' ,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingTop: 30,
        height: 470,
        },
    image:{
        height: 440,
        marginLeft:100,
        },
        heading1:{
            color: '#C80C91',
            marginBottom:60,
            fontSize:18,

        },
        heading2:{
            fontWeight:600,
            fontSize:50,
        },
        para:{
            fontSize:18,
        },
    }

    return (
        <div style={styles.background}>
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <img alt="homeimg"  src="https://corgib.polkabridge.org/images/corgiparty.png" style={styles.image}></img>
                    </div>
                    <div className="col-md-6">
                        <div className="text-left mt-10" >
                            <span style={styles.heading1}>CORGIB Finance</span>
                            <h1 style={styles.heading2}>The NFT MarketPlace for Meme coins</h1>
                            <p style={styles.para}>CORGIB Finance is a fully decentralized, the first NFT<br/> MarketPlace for Meme tokens, powered by <span> <strong style={{ color: '#C80C91' }}>PolkaBridge</strong></span></p>
                        </div>

                    </div>
                </div>
            
            </section>
        </div>
    )
}

export default Home
