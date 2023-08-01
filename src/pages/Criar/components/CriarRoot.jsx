import { CriarMount } from "./CriarMount";

export default function CriarRoot(  ) {
    return (
        <div className="container position-absolute top-50 start-50 translate-middle">
            <div className="row h100 justify-content-center align-items-center">
                <div className="col col-10">
                    <CriarMount.Card.Root />
                </div>
            </div>
        </div>
        
    );
};