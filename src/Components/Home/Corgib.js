import React from 'react'

function Corgib() {
    const styles ={
        button:{
            backgroundColor: '#C80C91',
            width: 50,
            borderRadius: 10,
            paddingTop: 10,
            paddingBottom: 10,
            fontWeight: 700,
            color:"#E8EDEC",
            fontSize:18,
           },
           heading:{
               marginTop:20,
           },
           para:{
               fontSize:16,
               fontWeight:400,
               marginTop:20,
           },
           button1:{
            backgroundColor: '#C80C91',
            width: 200,
            borderRadius: 10,
            paddingTop: 10,
            paddingBottom: 10,
            fontWeight: 700,
            color:"#E8EDEC",
            fontSize:18,
           },
           image:{
            height: 370,
            marginRight:100,
            marginTop:150,
            
           }
    }
    return (
        <div style={styles.background}>
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-left mt-10" style={{marginLeft:100,marginTop:150,}} >
                        <button  style={styles.button}>1</button>
                            <h1 style={styles.heading}>What is<span> <strong style={{ color: '#C80C91' }}>CORGIB?</strong></span></h1>
                            <p style={styles.para}>CORGIB is not just a Meme coin, but also an NFT Marketplace where users can create NFT memes and trade on the Marketplace.<br/><br/>CORGIB is a community product of PolkaBridge, aims to give fairlaunch and to bring value to PBR investors.</p>
                            <button  style={styles.button1}>Check Tokenomics</button>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <img alt="header" href="#" src="https://corgib.polkabridge.org/images/corgibpolkabridge.png" style={styles.image}></img>
                </div>
             </div>
        </section>
        </div>
    )
};

export default Corgib;
