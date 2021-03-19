import pencil from "../images/profile_pencil_big.svg";
import Card from './Card';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main({cards, onCardDelete, onCardLike, onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const currentUser = React.useContext(CurrentUserContext);


    return (
        <div>
            <main className="content">
                <section className="profile">
                    <div onClick={onEditAvatar} className="profile__image-wrapper">
                        <img alt="аватар пользователя" className="profile__image" src={currentUser.avatar}/>
                        <img alt="карандаш" className="profile__pencil" src={pencil}/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-wrapper">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button onClick={onEditProfile} aria-label="редактировать" className="profile__edit-button"
                                    type="button"></button>
                        </div>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                    <button onClick={onAddPlace} aria-label="добавить"
                            className="button button_type button_type_add-card" type="button"></button>
                </section>
                <section>
                    <ul className="elements">
                        {cards.map((card) => {
                            return (<Card card={card} onCardDelete={onCardDelete} onCardLike={onCardLike}
                                          onCardClick={onCardClick}
                                          key={card._id}/>)
                        })}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Main;



