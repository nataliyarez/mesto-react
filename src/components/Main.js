import pencil from "../images/profile_pencil_big.svg";
import Card from './Card';
import {api} from "../utils/api.js";
import {useState, useEffect} from "react";
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function formatCard(item) {
    return {
        _id: item._id,
        owner: item.owner._id,

        src: item.link,
        alt: item.name,
        title: item.name,
        likes: item.likes,
        numberLikes: item.likes.length


    }
}

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {


    const [cards, setCards] = useState([]);

    const currentUser = React.useContext(CurrentUserContext);

    function handleCardDelete(card) {
        console.log ('main', card);
        api.deleteCard(card._id)
            .then(() => {
                function deleteCard (value){
                return value._id !== card._id;
            }
                setCards(cards.filter(deleteCard));

        })
            .catch(err => console.log(err));

    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser[0]._id);


        api.likeCard(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? formatCard(newCard) : c));


            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        api.getInitialCards()
            .then((data) => {

                const cards = data.map(formatCard)
                setCards(cards);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <main className="content">
                <section className="profile">
                    <div onClick={onEditAvatar} className="profile__image-wrapper">
                        <img alt="аватар пользователя" className="profile__image" src={currentUser[0].avatar}/>
                        <img alt="карандаш" className="profile__pencil" src={pencil}/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-wrapper">
                            <h1 className="profile__title">{currentUser[0].name}</h1>
                            <button onClick={onEditProfile} aria-label="редактировать" className="profile__edit-button"
                                    type="button"></button>
                        </div>
                        <p className="profile__subtitle">{currentUser[0].about}</p>
                    </div>
                    <button onClick={onAddPlace} aria-label="добавить"
                            className="button button_type button_type_add-card" type="button"></button>
                </section>
                <section>
                    <ul className="elements">
                        {cards.map((card) => {
                            return <Card card={card} onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={onCardClick}
                                         key={card._id}/>
                        })}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Main;



