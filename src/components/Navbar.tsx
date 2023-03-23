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
                    style={{height: '20px'}}
                    >
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                </button>

                <div className="desktop-nav">
                    <p> <Link to='/'>HOME</Link> </p>
                    <p> <Link to='/category'>CATEGORIES</Link> </p>
                    <p> <Link to='/support'>SUPPORT</Link> </p>
                </div>
            </div>
        </section>
    )
}