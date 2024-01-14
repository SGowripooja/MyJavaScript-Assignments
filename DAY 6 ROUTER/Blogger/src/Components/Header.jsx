
import './Header.css';
import Header1 from '../assets/Header1.png'

export default function Header() {

    return (
        <div>
            <h2 className="title">Blogger</h2>
            <h5 className="tagline">A frame to learn new things!!

            </h5>
        <img className="pic" src={Header1} alt="header" />
        </div>
    )
}