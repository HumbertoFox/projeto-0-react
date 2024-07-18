import { useState } from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";
import { FormSearchDonor } from "../components/forms/form_search_donor";
import { FormCadDonor } from "../components/forms/form_cad_donor";
import { DivMainEditDonor } from "../style/divmainpagestyle";
export const EditDonorPage = () => {
    const [searchDonorCoNaTe, setSearchDonorCoNaTe] = useState(null);
    
    function donorSearch(codnamtel) {
        setSearchDonorCoNaTe(codnamtel);
    };
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMainEditDonor>
                    <FormSearchDonor searchDonor={donorSearch} />
                    <FormCadDonor searchDonor={searchDonorCoNaTe} />
                </DivMainEditDonor>
            </MainSecondary>
        </MainPrimary>
    );
};