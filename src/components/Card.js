import locationPic from "../pictures/location.svg"

export default function Card(prop){
    return(
        <>
            <div className="card">
                <div className="card--image">
                    <img src={prop.imageURL} alt=""></img>
                </div>
                <div className="card--info">
                    <div className="card--info-view">
                        <img src={locationPic} alt=""></img>
                        <span>{prop.title}</span>
                        <a href={prop.googleMapsLink}>View on Google Maps</a>
                    </div>
                    <div className="card--info-main">
                        <h1>{prop.location}</h1>
                        <p className="card-date"><b>{prop.startDate} - {prop.endDate}</b></p>
                        <p className="card-des">{prop.description}</p>
                    </div>
                </div>
            </div>
            {prop.length!==prop.id && <hr/>}
            
        </>
    )
}