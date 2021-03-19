import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import React, {useEffect, useState} from "react";
import {api} from "../utils/api";
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

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({alt: '', src: ''});

    const [currentUser, setCurrentUser] = useState({name: 'Имя', about: 'Значение'});

    useEffect(() => {
        api.getInitialInfo()
            .then((info) => {
                setCurrentUser(info);
            })
            .catch(err => console.log(err))

    }, [])

    const handleUpdateUser = (name, about) => {
        api.editInfo(name, about)
            .then((data) => {
                setCurrentUser(data);
                setIsEditProfilePopupOpen(false);

            })
            .catch(err => console.log(err));
    }
    const handleUpdateAvatar = (avatar) => {
        api.editAvatar(avatar)
            .then((data) => {
                setCurrentUser(data);
                setIsEditAvatarPopupOpen(false);

            })
            .catch(err => console.log(err));
    }

    const   handleAddPlaceSubmit = (name, link) => {
        api.addCard (name, link)
            .then((newCard) => {
                setCards([formatCard(newCard), ...cards]);
                setIsAddPlacePopupOpen(false);

            })
            .catch(err => console.log(err));
    }

    const [cards, setCards] = useState([]);



    function handleCardDelete (card) {
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
        const isLiked = card.likes.some(i => i._id === currentUser._id);
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



    const handleCardClick = (card) => {

        setSelectedCard(card);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({alt: '', src: ''});
    }

    return (
        <>
            <div className="page">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header />
                    <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                          onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>


                    <Footer/>

                    <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen}
                                      onClose={closeAllPopups}/>
                    <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
                    <AddPlacePopup onAddPlaceSubmit={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
                </CurrentUserContext.Provider>

            </div>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            <PopupWithForm name="delete" title="Вы уверены?">

            </PopupWithForm>


        </>

    );


}

export default App;
