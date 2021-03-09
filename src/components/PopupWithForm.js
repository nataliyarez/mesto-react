

function PopupWithForm(props) {
    let visible;
    if (props.isOpen===true){
        visible = 'popup_visible'
    }
    if (props.onClose=== false){
        visible = ''
    }
    return (

        <div className={`popup popup_${props.name} ${visible}`} >
            <div className="popup__window">
                <button onClick={props.onClose} aria-label="закрыть" className="popup__close-button popup__close-button_card" type="button"></button>
                <h3 className="popup__text">{props.title} </h3>
                <form className={`form form_${props.name}`} name="form__card" noValidate>
                    <div className="form__input-wrapper">
                        {props.children}
                    </div>
                    <button className={`form__button form__button_${props.name}`}type="submit">
                        Создать
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;