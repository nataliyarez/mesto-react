import logo from './logo.svg';
import './index.css';
import headerLogo from './images/header_logo.svg';

function App() {
  return (
    <div className="App">
      <body className="body">
      <div className="page">
        <header className="header">
          <img alt="Лого" className="header__logo" src={headerLogo}/>
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__image-wrapper">
              <img alt="аватар пользователя" className="profile__image"
                   src="<%=require('./images/profile_black.jpg')%>"/>
                <img alt="карандаш" className="profile__pencil" src="<%=require('./images/profile_pencil_big.svg')%>"/>
            </div>
            <div className="profile__info">
              <div className="profile__title-wrapper">
                <h1 className="profile__title">Жак Ив-Кусто</h1>
                <button aria-label="редактировать" className="profile__edit-button" type="button"></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button aria-label="добавить" className="button button_type button_type_add-card" type="button"></button>
          </section>
          <section>
            <ul className="elements">
            </ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__text">© 2020 Mesto Russia</p>
        </footer>
      </div>
      <div className="popup">
        <div className="popup__window">
          <button aria-label="закрыть" className="popup__close-button" type="button"></button>
          <h3 className="popup__text"> Редактировать профиль</h3>
          <form className="form" name="form__edit" noValidate>
            <div className="form__input-wrapper">
              <input className="form__input" id="name" name="name" type="text" required minLength="2" maxLength="40"/>
                <span id="name-error" className="error"></span>
                <input className="form__input" id="job" name="job" type="text" required minLength="2" maxLength="200"/>
                  <span id="job-error" className="error"></span>
            </div>
            <button className="form__button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_card">
        <div className="popup__window">
          <button aria-label="закрыть" className="popup__close-button popup__close-button_card" type="button"></button>
          <h3 className="popup__text"> Новое место</h3>
          <form className="form form_card" name="form__card" noValidate>
            <div className="form__input-wrapper">
              <input className="form__input form__input_card" id="title" name="title" placeholder="Название" type="text"
                     minLength="2" maxLength="30" required />
                <span id="title-error" className="error"></span>
                <input className="form__input form__input_card" id="image" name="image" placeholder="Ссылка на картинку"
                       required type="url" />
                  <span id="image-error" className="error"></span>
            </div>
            <button className="form__button form__button_card" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_image">
        <div className="popup__wrapper">
          <button aria-label="закрыть" className="popup__close-button popup__close-button_image" type="button"></button>
          <img alt="Архыз" className="popup__image" id="image_popup"
               src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" />
            <h3 className="popup__title">Архыз</h3>
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__window">
          <button aria-label="закрыть" className="popup__close-button popup__close-button_avatar"
                  type="button"></button>
          <h3 className="popup__text">Обновить аватар</h3>
          <form className="form form_avatar" name="form__avatar" noValidate>
            <div className="form__input-wrapper">
              <input className="form__input form__input_card" id="avatar" name="image" placeholder="Ссылка на картинку"
                     required type="url" />
                <span id="avatar-error" className="error"></span>
            </div>
            <button className="form__button form__button_avatar" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_delete">
        <div className="popup__window">
          <form className="form form_delete" name="form__delete" noValidate>
            <button aria-label="закрыть" className="popup__close-button popup__close-button_delete"
                    type="button"></button>
            <h3 className="popup__text">Вы уверены?</h3>
            <button className="form__button form__button_delete" type="button">
              Да
            </button>
          </form>
        </div>
      </div>
      <template className="card-template" id="card-template">
        <li className="element">
          <img alt="Архыз" className="element__image" id="image_card"
               src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" />
            <button aria-label="корзина" className="button button_type button_type_basket" type="button"></button>
            <div className="element__text-wrapper">
              <h3 className="element__text"></h3>
              <div className="element__likes-wrapper">
                <button aria-label="сердечко" className="element__like" type="button"></button>
                <p className="element__likes">0</p>
              </div>
            </div>
        </li>
      </template>

      </body>
    </div>
  );



}

export default App;
