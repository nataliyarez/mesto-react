import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";



function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);


    const isOwn = props.card.owner === currentUser[0]._id;
    const cardDeleteButtonClassName = (
        `button_type_basket ${isOwn ? 'button_type_basket_visible' : 'button_type_basket'}`
    );

    const isLiked = props.card.likes.some(i  =>  i._id === currentUser[0]._id);


    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like_active' : 'element__like'}`
    );





    const handleClick = () => {
        props.onCardClick(props.card);
    }

    const handleLikeClick = () => {
        props.onCardLike(props.card);
    }

    const handleCardDelete = () => {
        props.onCardDelete(props.card);
        console.log ('card', props.card);
    }

    return (


        <li className="element" >
            <img onClick= {handleClick} alt={props.alt} className="element__image" id="image_card"
                 src={props.card.src}/>
            <button aria-label="корзина" onClick= {handleCardDelete}  className={cardDeleteButtonClassName}
                    type="button"></button>
            <div className="element__text-wrapper">
                <h3 className="element__text">{props.card.title}</h3>
                <div className="element__likes-wrapper">
                    <button onClick= {handleLikeClick} aria-label="сердечко" className={cardLikeButtonClassName} type="button"></button>
                    <p className="element__likes">{props.card.numberLikes}</p>
                </div>
            </div>
        </li>


    )

}

export default Card;