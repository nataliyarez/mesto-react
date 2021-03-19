import PopupWithForm from "./PopupWithForm";
import React, {useState} from "react";

function AddPlacePopup (props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlaceSubmit(
            name, link
        );
        setName('');
        setLink('');
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function handleDescriptionChange(evt) {
        setLink(evt.target.value);
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="cad" title="Новое место">

            <input value={name} onChange={handleNameChange} className="form__input form__input_card" id="title" name="title" placeholder="Название"
                   type="text"
                   minLength="2" maxLength="30" required/>
            <span id="title-error" className="error"></span>
            <input value={link} onChange={handleDescriptionChange} className="form__input form__input_card" id="image" name="image" placeholder="Ссылка на картинку"
                   required type="url"/>
            <span id="image-error" className="error"></span>

        </PopupWithForm>
    )

}
export  default AddPlacePopup;