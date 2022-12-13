import img1 from "../images/cbr1000.jpg"
import img2 from "../images/sportster.jpg"
import img3 from "../images/z400.jpg"

function MotorcycleCard(props) {

    const { motorcycle } = props;

    return (
        <div>
            <img src={motorcycle.image} />
            <h1>{motorcycle.make}</h1>
            <p>Model</p>
            <p>{motorcycle.model}</p>
            <p>Year</p>
            <p>{motorcycle.year}</p>
            <p>CC</p>
            <p>{motorcycle.cc}</p>
            <p>Skill</p>
            <p>{motorcycle.skills}</p>
        </div>
    )
}

export default MotorcycleCard