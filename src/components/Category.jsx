import {Link} from 'react-router-dom'


export function Category(){
    return(
        <section className="category">
            <div className="category-text-wrapper">
                <h1 className="category-text-header">Select A Category</h1>
                <p className="category-text-p">Get links to free resources on<br/> your chosen category</p>
            </div>

            <div className="category-box-wrapper">
                <div className="box ui-box">       <Link className="link" to=''>UI UX Design</Link> </div>
                <div className="box web-box">      <Link className="link" to=''>Web Design</Link> </div>
                <div className="box graphics-box"> <Link className="link" to=''>Graphics Design</Link> </div>
                <div className="box software-box"> <Link className="link" to=''>Software Development</Link> </div>
            </div>
        </section>
    )
}