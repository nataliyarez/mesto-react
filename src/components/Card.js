function Card(props) {
    const handleClick = () => {
        props.onCardClick(props.card);
    }

    return (


        <li className="element" >
            <img onClick= {handleClick} alt={props.alt} className="element__image" id="image_card"
                 src={props.card.src}/>
            <button aria-label="корзина" className="button button_type button_type_basket"
                    type="button"></button>
            <div className="element__text-wrapper">
                <h3 className="element__text">{props.card.title}</h3>
                <div className="element__likes-wrapper">
                    <button aria-label="сердечко" className="element__like" type="button"></button>
                    <p className="element__likes">{props.card.likes}</p>
                </div>
            </div>
        </li>


    )

}

export default Card;