import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";
import { DivMainDonation } from "../style/divmainpagestyle";
import { FormCadDonor } from "../components/forms/form_cad_donor";
import { FormSearchDonation } from "../components/forms/form_search_donation";
import { FormCadDonation } from "../components/forms/form_cad_donation";
export const EditDonationPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMainDonation>
                    <FormSearchDonation />
                    <FormCadDonor fieldsetdonor="disabled" />
                </DivMainDonation>
                <FormCadDonation />
            </MainSecondary>
        </MainPrimary>
    );
};