import world from "../pictures/World.svg"

export default function Top(){
    return(
        <div className="top">
            <div className="top--image">
                <img src={world} alt=""></img>
            </div>
            <p className="top--content">my travel journal</p>
        </div>
    )
}