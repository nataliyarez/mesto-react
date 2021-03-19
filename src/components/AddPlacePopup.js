import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup (props) {
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlaceSubmit(
            nameRef.current.value,
            linkRef.current.value,
        );

    }

    return (
        <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="cad" title="Новое место">

            <input ref={nameRef} className="form__input form__input_card" id="title" name="title" placeholder="Название"
                   type="text"
                   minLength="2" maxLength="30" required/>
            <span id="title-error" className="error"></span>
            <input ref={linkRef} className="form__input form__input_card" id="image" name="image" placeholder="Ссылка на картинку"
                   required type="url"/>
            <span id="image-error" className="error"></span>

        </PopupWithForm>
    )

}
export  default AddPlacePopup;