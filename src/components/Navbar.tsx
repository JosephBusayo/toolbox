import {Link} from 'react-router-dom'

interface Props{
    isActive: boolean,
    toggleActive : () => void
}

export function Navbar( {isActive, toggleActive} : Props){
    return(
        <section className="nav">
            <p className="nav-title">Toolbox</p>

            <div>
                <button
                    className={`menu-btn ${isActive ? 'active': ''} `}
                    onClick={() => toggleActive()}
                    >
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                </button>

                <div className="desktop-nav">
                    <p> <Link className="link" to='/'>HOME</Link> </p>
                    <p> <Link className="link" to='/category'>CATEGORIES</Link> </p>
                    <p> <Link className="link" to='/support'>SUPPORT</Link> </p>
                </div>
            </div>

            <div className={`mobile-nav ${isActive ? 'active' : ''} `}>
                <p> <Link className="link" to='/' onClick={() => toggleActive()} > HOME</Link> </p>
                <p> <Link className="link" to='/category' onClick={() => toggleActive()}>CATEGORIES</Link> </p>
                <p> <Link className="link" to='/support' onClick={() => toggleActive()}>SUPPORT</Link> </p>
            </div>
        </section>
    )
}