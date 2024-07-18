import { useState } from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";
import { DivMainDonation } from "../style/divmainpagestyle";
import { FormCadDonation } from "../components/forms/form_cad_donation";
import { FormCadDonor } from "../components/forms/form_cad_donor";
import { FormSearchDonor } from "../components/forms/form_search_donor";
export const CadDonationPage = () => {
    const [searchDonorCoNaTe, setSearchDonorCoNaTe] = useState(null);
    
    function donorSearch(codnametel) {
        setSearchDonorCoNaTe(codnametel);
    };
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMainDonation>
                    <FormSearchDonor searchDonor={donorSearch} />
                    <FormCadDonor searchDonor={searchDonorCoNaTe} fieldsetdonor="disabled" />
                </DivMainDonation>
                <FormCadDonation searchDonor={searchDonorCoNaTe} coddonation="disabled" />
            </MainSecondary>
        </MainPrimary>
    );
};