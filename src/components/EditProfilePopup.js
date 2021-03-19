import PopupWithForm from "./PopupWithForm";
import {useState, useEffect} from "react";
import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup (props){
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser(
          name, description
        );
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="profile"
                       title="Редактировать профиль">
            <input value={name} onChange={handleNameChange} className="form__input" id="name" name="name" type="text" required minLength="2" maxLength="40" placeholder="Имя" />
            <span id="name-error" className="error"></span>
            <input value={description} onChange={handleDescriptionChange} className="form__input" id="job" name="job" type="text" required minLength="2" maxLength="200" placeholder="Занятие"/>
            <span id="job-error" className="error"></span>

        </PopupWithForm>
    )
}
export default  EditProfilePopup;