// eslint-disable-next-line
import img1 from "../images/cbr1000.jpg";
// eslint-disable-next-line
import img2 from "../images/sportster.jpg";
// eslint-disable-next-line
import img3 from "../images/z400.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function MotorcycleCard(props) {
  const { motorcycle } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="hero-image ">
            <div className="hero-type ">
              <div className="info ">
                <img
                  src={motorcycle.image}
                  alt="motorcycles"
                  class="topbikes "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
        
            
            <Grid
              container
              rowSpacing={3}
              mt={7}
              ml={18}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={16}>
                <h1>{motorcycle.make}</h1>
                Model:<br></br>
                {motorcycle.model}
              </Grid>
              <Grid item xs={18}>
                Year:<br></br>
                {motorcycle.year}
              </Grid>
              <Grid item xs={17}>
                Engine Size:<br></br>
                {motorcycle.cc}
              </Grid>
              <Grid item xs={17}>
                Skill level:<br></br>
                {motorcycle.skills}
              </Grid>
            </Grid>{" "}
            
          
        </div>
      </div>
    </div>
  );
}

export default MotorcycleCard;
