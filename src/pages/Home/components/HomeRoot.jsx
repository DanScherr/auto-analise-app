/** MUI */
import { HomeMount } from "./HomeMount";
import tccDesc from "../../../static/texto/home/tcc-desc";
import maieuticaDesc from "../../../static/texto/home/maieutica";
import logicaInformalDesc from "../../../static/texto/home/logica-informal-desc";
/** MUI */
import { Grid } from "@mui/material";

export default function HomeRoot(  ) {
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
                            xs={4}
                            sm={4}
                            md={4}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <HomeMount.Card 
                            title="Maieutica"
                            desc={maieuticaDesc}
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
                            xs={4}
                            sm={4}
                            md={4}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
        
    )
}