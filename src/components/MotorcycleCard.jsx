import img1 from "../images/cbr1000.jpg"


function MotorcycleCard(props) {

    const { motorcycle } = props;

        return (
            <div>
                <img src={img1}/>
                <h1>{motorcycle.make}</h1>
                <p>{motorcycle.model}</p>
                <p>{motorcycle.year}</p>
                <p>{motorcycle.css}</p>
                <p>{motorcycle.skill}</p>
            </div>
        )
}

export default MotorcycleCard