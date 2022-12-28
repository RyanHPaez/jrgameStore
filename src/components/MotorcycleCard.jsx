// eslint-disable-next-line
import img1 from "../images/cbr1000.jpg";
// eslint-disable-next-line
import img2 from "../images/sportster.jpg";
// eslint-disable-next-line
import img3 from "../images/z400.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function MotorcycleCard(props) {
  const { motorcycle } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="hero-image ">
            <div className="hero-type ">
              <div className="info ">
                <Link to="/specs">
                  <img
                    src={motorcycle.image}
                    alt="motorcycles"
                    className="topbikes "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Grid
          container
          rowSpacing={1}
          mt={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <h1>{motorcycle.make}</h1>
            Model:
            {motorcycle.model}
          </Grid>
          <Grid item xs={6}>
            Year:
            {motorcycle.year}
          </Grid>
          <Grid item xs={6}>
            Engine Size:
            {motorcycle.cc}
          </Grid>
          <Grid item xs={6}>
            Skill level:
            {motorcycle.skill}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MotorcycleCard;
