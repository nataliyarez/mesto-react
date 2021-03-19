import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {

    const inputRef = React.useRef();


    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar(
            inputRef.current.value,
        );
        inputRef.current.value = '';

    }

    return (
        <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="avatar"
                       title="Обновить аватар">
            <input ref={inputRef}  className="form__input form__input_card" id="avatar" name="image"
                   placeholder="Ссылка на картинку"
                   required type="url"/>
            <span id="avatar-error" className="error"></span>

        </PopupWithForm>
    )

}
export default EditAvatarPopup;