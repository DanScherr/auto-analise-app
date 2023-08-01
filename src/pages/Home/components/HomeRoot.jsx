/** Components */
import { HomeMount } from "./HomeMount";
/** Assets */
import tccDesc from "../../../static/texto/home/tcc-desc";
import maieuticaDesc from "../../../static/texto/home/maieutica";
import logicaInformalDesc from "../../../static/texto/home/logica-informal-desc";
import img0 from './../../../static/images/home/card/0.png'
import img1 from  './../../../static/images/home/card/1.png'
import img2 from  './../../../static/images/home/card/2.png'
import img3 from  './../../../static/images/home/card/3.png'
import img4 from  './../../../static/images/home/card/4.png'
import img5 from  './../../../static/images/home/card/5.png'
/** MUI */
import { Grid } from "@mui/material";


export default function HomeRoot(  ) {
    let listOfImgs = [ img0, img1, img2, img3, img4, img5 ];

    return (
        <div className="row justify-content-center">
            <div className="col col-10">
                <Grid 
                    container 
                    spacing={{xs: 4, sm: 4, md: 2}} 
                    columns={{xs: 4, sm: 4, md: 4}}
                >
                    <Grid item xs={4} sm={4} md={4}>
                        <HomeMount.Card 
                            title="Cognitivo-Comportamental"
                            desc={tccDesc}
                            img={shuffle(listOfImgs).shift()}
                            xs={4}
                            sm={4}
                            md={4}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <HomeMount.Card 
                            title="Maieutica"
                            desc={maieuticaDesc}
                            img={shuffle(listOfImgs).shift()}
                            xs={4}
                            sm={4}
                            md={4}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}
                        sx={{mb: 9}}
                    >
                        <HomeMount.Card 
                            title="Logica Informal"
                            desc={logicaInformalDesc}
                            img={shuffle(listOfImgs).shift()}
                            xs={4}
                            sm={4}
                            md={4}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };