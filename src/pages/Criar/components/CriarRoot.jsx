import { CriarMount } from "./CriarMount";

export default function CriarRoot(  ) {
    return (
        <div className="row justify-content-center">
            <div className="col col-8">
                <CriarMount.Card />
            </div>
        </div>
    );
};