import "./Card.css"
const Card = ({title,price,description,image})=>{
    return(
        <div className="Card">
            <div className="cardImage">
                <img src={image}></img>
            </div>
            <div className="prodDesc">
                <h2>{title}</h2>
                <h3>{price}</h3>
                <p>{description}</p>
            </div>
            <div className="cardBtm">
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Card