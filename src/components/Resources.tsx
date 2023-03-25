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
    setToFalse : () => void
}

export function Resources( {title, category, links, setToFalse} : Props ){
    return(
        <section className="resources" onClick={() => setToFalse()} >
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
                            <img src={`assets/${link.image}`} alt="link-icon" className="link-icon"/>
                        </div>

                        <p className="link-desc">{link.desc}</p>
                    </div>
                ))}
            </section>
        
        </section>
    )
}