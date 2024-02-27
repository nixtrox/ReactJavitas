import { Review } from "../Review";

interface Props{
    review: Review;
}


import "../review.css"


export function ReviewComp({review} : Props)
{


    if(review.rating > 5 )
    {
        return(
            <div className="revDiv" >

        <h2>{review.reviewer}</h2>
        <p>{review.review}</p>
        <p>
            <img src="thumbUp.svg" alt="" />
        </p>
        <p>{review.date}</p>



       </div>
        )
    }



    if(review.rating < 5 )
    {
        return(
            <div className="revDiv" >

        <h2>{review.reviewer}</h2>
        <p>{review.review}</p>
        <p>
            <img src="thumbDown.svg" alt="" />
        </p>
        <p>{review.date}</p>



       </div>
        )
    }
}