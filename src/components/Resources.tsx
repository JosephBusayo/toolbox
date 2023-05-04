import { useState } from 'react';

interface Props{
    title: string,
    categorybtn : {
        text: string,
        color: string
    }[],
    resources : {
        image: string,
        desc: string
    }[],
    setToFalse : () => void
}

export function Resources( {title, categorybtn, resources, setToFalse} : Props ){
    
    const [toShow, setToShow] = useState('all')
    const filteredResource = toShow === 'all' ? resources : resources.filter(resource => resource.category === toShow);

    const change = (text : string) =>{
        setToShow(text)
        console.log(text)
    }

    return(
        <section className="resources" onClick={() => setToFalse()} >
            <section className="upper">
                <h1 className="resources-title"> {title} </h1>

                <div className="resource-category-container">
                    {categorybtn.map((item, index) => (
                        <div style={{backgroundColor: item.color}} key={index} className="resource-category" onClick={() => change(item.text)}> 
                            {item.text}
                        </div>
                    ))}
                </div>
            </section>


            <section className="lower">
                {filteredResource.map((resource, index)=> (
                    <div className="link-container" key={index}>
                        <div className="link-icon-div">
                            <img src={`assets/${resource.image}`} alt="resource-icon" className="resource-icon"/>
                        </div>

                        <p className="resource-desc">{resource.desc}</p>
                    </div>
                ))}
            </section>
        
        </section>
    )
}