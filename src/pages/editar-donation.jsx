import { useState } from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";
import { DivMainDonation } from "../style/divmainpagestyle";
import { FormCadDonor } from "../components/forms/form_cad_donor";
import { FormSearchDonation } from "../components/forms/form_search_donation";
import { FormCadDonation } from "../components/forms/form_cad_donation";
export const EditDonationPage = () => {
    const [searchDonationId, setSearchDonationId] = useState(null);

    function donationSearch(coddonation) {
        setSearchDonationId(coddonation);
    };
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMainDonation>
                    <FormSearchDonation searchDonation={donationSearch} />
                    <FormCadDonor searchDonation={searchDonationId} fieldsetdonor="disabled" />
                </DivMainDonation>
                <FormCadDonation searchDonation={searchDonationId} />
            </MainSecondary>
        </MainPrimary>
    );
};