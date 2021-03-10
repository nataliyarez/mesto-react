


function ImagePopup ({card, onClose}) {
    let visible;
    if (card.src !== ''){
        visible = 'popup_visible'
    }


    return (
        <div className={`popup popup_image ${visible}`}>
            <div className="popup__wrapper">
                <button onClick={onClose} aria-label="закрыть" className="popup__close-button popup__close-button_image"
                        type="button"></button>
                <img alt={card.alt} className="popup__image" id="image_popup"
                     src={card.src}/>
                    <h3 className="popup__title">{card.title}</h3>
            </div>
        </div>

    )

}

export default ImagePopup;