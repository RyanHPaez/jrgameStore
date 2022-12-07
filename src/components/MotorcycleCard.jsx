import img1 from "../images/cbr1000.jpg"// eslint-disable-next-line
import img2 from "../images/sportster.jpg"// eslint-disable-next-line
import img3 from "../images/z400.jpg"// eslint-disable-next-line

function MotorcycleCard(props) {

    const { motorcycle } = props;

        return (
<div className="container">
    <div className="row">
            
      <div className="hero-image ">
        <div className="hero-type ">
            <div className="info ">
                <img src={motorcycle.image}
                alt='motorcycles'
                class="topbikes "/>
                </div>
                <div className="row">
                <div className="col-sm-12 ">
                <h1>{motorcycle.make}</h1>
                <p>Model: 
                {motorcycle.model}</p></div>
                
                <p>Year:</p>
                <p>{motorcycle.year}</p></div>
                <p>CC:</p>
                <p>{motorcycle.cc}</p>
                <p>Skill:</p>
                <p>{motorcycle.skills}</p>
            </div></div></div></div>
        )
}

export default MotorcycleCard