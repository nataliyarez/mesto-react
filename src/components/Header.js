import headerLogo from "../images/header_logo.svg";

function Header() {
    return (
        <div>
            <header className="header">
            <img alt="Лого" className="header__logo" src={headerLogo}/>
            </header>
        </div>
    );
}

export default Header;