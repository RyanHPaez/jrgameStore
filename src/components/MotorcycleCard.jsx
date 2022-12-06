import img1 from "../images/cbr1000.jpg"
import img2 from "../images/sportster.jpg"
import img3 from "../images/z400.jpg"

function MotorcycleCard(props) {

    const { motorcycle } = props;

    console.log("image2", img2)

        return (
            <div>
                <img src={motorcycle.image}/>
                <h1>{motorcycle.make}</h1>
                <p>{motorcycle.model}</p>
                <p>{motorcycle.year}</p>
                <p>{motorcycle.css}</p>
                <p>{motorcycle.skill}</p>
            </div>
        )
}

export default MotorcycleCard