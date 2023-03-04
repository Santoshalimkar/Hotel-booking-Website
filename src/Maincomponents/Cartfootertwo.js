import React from 'react'
import { Card,Badge,Button} from "@nextui-org/react";
import {Link} from "react-router-dom"
 


const Cartfootertwo = ({confirmcard}) => {
  const highlightItems =(confirmcard.highlights).map((highlight) => <li>{highlight}</li>);


  console.log(confirmcard)
  // console.log(hotel)
  const prevPriceStringtwo = confirmcard.prevPrice;
  const currentPriceStringtwo =confirmcard.currentPrice;
  
  // Remove currency symbol and commas from the strings
  const prevPricetwo = parseFloat(prevPriceStringtwo.replace(/[^\d.-]/g, ''));
  const currentPricetwo = parseFloat(currentPriceStringtwo.replace(/[^\d.-]/g, ''));



  return (
    <Card variant="bordered" css={{ mw: "560px", backgroundColor: "#5c60f526",marginLeft:"auto",marginRight:"auto",
    '&:hover':{border:"1px solid #141729"} }}>
      <Card.Body>
        <div className="card-footer">
          <div className="card-offer">
          <Badge isSquared  css={{border:"1px solid #141729",backgroundColor:"#141729"}}>Offer</Badge>
          <span className='offer-section'>{confirmcard.offer}</span>
          <div className="category-type">
            <span className='prop-type'>{confirmcard.category}</span>
            <ul>
             {highlightItems}
             </ul>
          </div>
          </div>



          <div className="card-paynow">
          <Badge isSquared  css={{border:"1px solid ##141729 ",marginLeft:"68px",backgroundColor:"#141729"}}>
          {Math.round((((parseInt(prevPricetwo)-parseInt(currentPricetwo))/parseInt(prevPricetwo))*100).toFixed(2))}%off
        </Badge>
          <div className="cart-price">
            <span className='pre-price'>{confirmcard.prevPrice}</span>
            <span className='Now-price'>{confirmcard.currentPrice}</span>
          </div>
          <span className='taxes-tag'>(including taxes and charges)</span>
          <div className="pay-button">
          {/* <Link to={`/Cartview/${hotel._id}`}><Button color="error" auto css={{marginTop:"10px",marginLeft:"18px"}}>
          View Details
        </Button></Link> */}
          </div>
          </div>
        </div>
      </Card.Body>

    </Card>
  )
}

export default Cartfootertwo