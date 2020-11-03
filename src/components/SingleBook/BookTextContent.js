import React from 'react'
import {processCategory, processPages, processPrice} from '../../api/responseProcessing'

export const BookTextContent = (props) =>{
    return(
        <div className="book_card_text_wrapper">
            <div className="book_card_title_wrapper">
                <div className="title"><h1>{props.volumeInfo.title}</h1></div>
            </div>
            <div className="author"><p>{props.volumeInfo.authors}</p></div>
            <div className="book_card_separating_line"></div>
            <div className="category book_card_item_margin">
                <p>Category: <strong>{processCategory(props.volumeInfo)}</strong></p>
            </div>

            <div className="book_card_text_flex">
                <div>
                    <div className="book_card_item_margin">
                        <p>Language: </p>   
                        <strong>{props.volumeInfo.language}</strong>
                    </div>
                    <div className="book_card_item_margin">
                        <p>Maturity rating: </p>   
                        <strong>{props.volumeInfo.maturityRating}</strong>
                    </div>
                    <div className="book_card_item_margin">
                        <p>Pages: </p>
                        <strong>{processPages(props.volumeInfo)}</strong>   
                    </div>
                    <button className="book_card_item_margin price_button">
                        {processPrice(props.saleInfo)}  
                    </button>
                </div>
                <div>
                    <div className="margin_left book_card_item_margin">
                            <p>Country: </p>   
                            <strong>{props.volumeInfo.country}</strong>
                    </div>
                    <div className="margin_left book_card_item_margin">
                            <p>Publisher: </p>   
                            <strong>{props.volumeInfo.publisher}</strong>
                    </div>
                    <div className="margin_left book_card_item_margin">
                            <p>Published date: </p>   
                            <strong>{props.volumeInfo.publishedDate}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}