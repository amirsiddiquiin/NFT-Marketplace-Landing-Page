import React from 'react'

function WhyCorgib() {
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
            marginLeft:180,
            marginTop:150,
            
           }
    }
    return (
        <div >
            <section>
                <div className="row">
                <div className="col-md-6">
                        <img href="#" alt="why"  src="https://corgib.polkabridge.org/images/why.png" style={styles.image}></img>
                </div>
                    <div className="col-md-6">
                        <div className="text-left mt-10" style={{marginRight:110,marginTop:150,}} >
                        <button  style={styles.button}>2</button>
                            <h1 style={styles.heading}>Why choose<span> <strong style={{ color: '#C80C91' }}>CORGIB?</strong></span></h1>
                            <p style={styles.para}>CORGIB is the first NFT MarketPlace for Meme tokens, has a fair launch mechanism with an exciting roadmap.<br/><br/>CORGIB has powerful tokenomics & locking schedule with 45% reserve for daily token burning.</p>
                            <button  style={styles.button1}>VIew Roadap</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default WhyCorgib;
