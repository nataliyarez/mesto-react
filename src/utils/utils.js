const profileEditButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.button_type_add-card')
const formElement = document.querySelector('.form');
const formCardElement = document.querySelector('.form_card');
const formAvatar = document.querySelector('.form_avatar');

const formInfoButton = document.querySelector('.form__button');
const formCardButton = document.querySelector('.form__button_card');
const formCardAvatar = document.querySelector('.form__button_avatar');


const avatar = document.querySelector('.profile__image-wrapper');
const avatarImage = document.querySelector('.profile__image');

const nameInfo = document.querySelector('#name');
const jobInfo = document.querySelector('#job');


const titleInfo = document.querySelector('.profile__title');
const subtitleInfo = document.querySelector('.profile__subtitle');
const imageInfo = document.querySelector('.profile__image');

const cardListSelector = '.elements';
const cardTemplate = '#card-template';

// валиадация
const defaultFormConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'popup__input_type_error',
};