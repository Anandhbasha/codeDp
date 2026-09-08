const Card = (props)=>{
    return(
        <div className="Card" style={{border:"1px solid grey",padding:"15px",borderRadius:"15px",marginTop:"10px"}}>
            <div className="icon"></div>
            <div className="planDetails">
                <h1>{props.plan}</h1>
                <h1>{props.price}</h1>
                <p>Billed annually</p>
            </div>
            <div className="planBenifts">
                <p>{props.ben1}</p>
                <p>{props.ben2}</p>
            </div>
            <div className="btn">
                <button className="button" style={{backgroundColor:props.btncolor}}>Get Started</button>
            </div>
        </div>
    )
}

export default Card