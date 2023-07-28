/** MUI */
import { Button } from "@mui/material";

export default function HomeRoot(  ) {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        This could be Home's Title
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        This could be Home's Content
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Testando um botão Bootstrap
                    </div>
                    <div className="col">
                        <button type="button" class="btn btn-primary">Primary</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Testando um botão MUI
                    </div>
                    <div className="col">
                        <Button variant="contained">Primary</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}