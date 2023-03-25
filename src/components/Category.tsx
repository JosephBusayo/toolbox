import {Link} from 'react-router-dom'


export function Category(){
    return(
        <section className="category">
            <div className="category-text-wrapper">
                <h1 className="category-text-header">Select A Category</h1>
                <p className="category-text-p">Get links to free resources on<br/> your chosen category</p>
            </div>

            <div className="category-box-wrapper">
                <Link className="link" to='/uiux'> <div className="box ui-box">UI UX Design </div> </Link> 
                <Link className="link" to='/software'> <div className="box web-box"> Web Design </div> </Link> 
                <Link className="link" to='/graphics'> <div className="box graphics-box">  Graphics Design </div> </Link> 
                <Link className="link" to='/software'> <div className="box software-box"> Software Development </div> </Link>
            </div>
        </section>
    )
}