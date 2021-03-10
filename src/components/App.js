import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useState} from "react";


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({alt: '', src: ''});

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
                <Header/>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>


                <Footer/>
                }

            </div>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="profile"
                           title="Редактировать профиль">
                <input className="form__input" id="name" name="name" type="text" required minLength="2" maxLength="40"  placeholder="Имя"/>
                <span id="name-error" className="error"></span>
                <input className="form__input" id="job" name="job" type="text" required minLength="2" maxLength="200" placeholder="Занятие"/>
                <span id="job-error" className="error"></span>

            </PopupWithForm>
            <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="cad" title="Новое место">

                <input className="form__input form__input_card" id="title" name="title" placeholder="Название"
                       type="text"
                       minLength="2" maxLength="30" required/>
                <span id="title-error" className="error"></span>
                <input className="form__input form__input_card" id="image" name="image" placeholder="Ссылка на картинку"
                       required type="url"/>
                <span id="image-error" className="error"></span>

            </PopupWithForm>
            <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar"
                           title="Обновить аватар">
                <input className="form__input form__input_card" id="avatar" name="image"
                       placeholder="Ссылка на картинку"
                       required type="url"/>
                <span id="avatar-error" className="error"></span>

            </PopupWithForm>

            <PopupWithForm name="delete" title="Вы уверены?">

            </PopupWithForm>


        </>

    );


}

export default App;
