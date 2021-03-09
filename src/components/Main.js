import pencil from "../images/profile_pencil_big.svg";
import Card from './Card';
import {api} from "../utils/api.js";
import {useState, useEffect} from "react";


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                const cards = data.map(item => {
                    return {
                        key:item._id,

                        id: item._id,
                        src: item.link,
                        alt: item.name,
                        title: item.name,
                        likes: item.likes.length


                    }
                })
                setCards(cards);
            })
            .catch( err => console.log(err))
    }, [])

    useEffect(() => {
        api.getInitialInfo ()
            .then((info) => {
                setUserName  (info.name);
                setUserDescription (info.about);
                setUserAvatar(info.avatar);

            })
            .catch( err => console.log(err))

    },[])
    return (
        <div>
            <main className="content">
                <section className="profile">
                    <div onClick={onEditAvatar} className="profile__image-wrapper">
                        <img alt="аватар пользователя" className="profile__image" src={userAvatar}/>
                        <img alt="карандаш" className="profile__pencil" src={pencil}/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-wrapper">
                            <h1 className="profile__title" >{userName}</h1>
                            <button onClick={onEditProfile} aria-label="редактировать" className="profile__edit-button"
                                    type="button"></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button onClick={onAddPlace} aria-label="добавить"
                            className="button button_type button_type_add-card" type="button"></button>
                </section>
                <section>
                    <ul className="elements">
                        {cards.map((card)=> {
                            return <Card card={card} onCardClick={onCardClick} key={card.key}/>
                        })}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Main;



