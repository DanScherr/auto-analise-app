import CriarCardAutocomplete from "./Card/CriarCardAutocomplete";
import CriarCardCarousel from "./Card/CriarCardCarousel";
import CriarCardFormsCarousel from "./Card/CriarCardFormsCarousel";
import CriarCardFormsList from "./Card/CriarCardFormsList";
import CriarCardRateFeeling from "./Card/CriarCardRateFeeling";
import CriarCardRoot from "./Card/CriarCardRoot";
import CriarRoot from "./CriarRoot";

export const CriarMount = {
    Root: CriarRoot,
    Card: {
        Root: CriarCardRoot,
        Carousel: CriarCardCarousel,
        Autocomplete: CriarCardAutocomplete,
        RateFeeling: CriarCardRateFeeling,
        Form: {
            Carousel: CriarCardFormsCarousel,
            List: CriarCardFormsList,
        }
    }
}