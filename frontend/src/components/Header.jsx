import HOMELOGOIMG from '../assets/homeLogo.jpg';

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={HOMELOGOIMG} alt="home logo" />
                <h1>Home</h1>
            </div>
            <nav>
                <button className='login-btn'>Login</button>
                <button className='register-btn'>Register</button>
            </nav>
        </header>
    );
}