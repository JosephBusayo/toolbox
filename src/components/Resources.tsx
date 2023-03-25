interface Props{
    title: string,
    category : {
        text: string,
        color: string
    }[],
    links : {
        image: string,
        desc: string
    }[],

}


export function Resources( {title, category, links} : Props ){
    return(
        <section className="resources">
            <section className="upper">
                <h1 className="resources-title"> {title} </h1>

                <div className="resource-category-container">
                    {category.map((item, index) => (
                        <div style={{backgroundColor: item.color}} key={index} className="resource-category"> 
                            {item.text}
                        </div>
                    ))}
                </div>
            </section>


            <section className="lower">
                {links.map((link, index)=> (
                    <div className="link-container" key={index}>
                        <div className="link-icon-div">
                            <img src={`./${link.image}`} alt="link-icon" className="link-icon"/>
                        </div>

                        <p className="link-desc">{link.desc}</p>
                    </div>
                ))}
            </section>
        
        </section>
    )
}