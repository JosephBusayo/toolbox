import { Typewriter } from 'react-simple-typewriter'
import {Link} from 'react-router-dom'
interface Props{
    isActive: boolean,
    setToFalse : () => void
}

export function Home( {isActive, setToFalse} : Props){
    return (
            <section className='home'  onClick={() => setToFalse()} >
                <div className='home-content-wrapper'>
                    <div className=''>
                        <h1 className='home-top-text'>
                            Get Free Resources for {' '}<br/>
                            <span className='typewriter'>
                                <Typewriter
                                    words={['UI UX', 'Web', 'Graphics']}
                                    loop={false}
                                    cursor
                                    cursorStyle=' '
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                                Design
                            </span>
                        </h1>
                        <p className='home-mid-text'>
                            toolbox connects designers to free<br/> 
                            online design & programming<br/> 
                            resources, articles, websites &<br/> 
                            more.
                        </p>

                        <button className='home-btn'> <Link className="link" to='/category'> GET STARTED </Link> </button>
                    </div>

                    <div className='mobile-home-img-wrapper'>
                        <img 
                            src="/assets/mobileTextImg.png" 
                            alt="design" 
                            className="home-img"
                        />
                    </div>
               
                    <div className='desktop-home-img-wrapper'>
                        <img 
                            src="/assets/desktopTextImg.png" 
                            alt="design" 
                            className="home-img"
                        />
                    </div>
                </div>

            </section>
        )
}
