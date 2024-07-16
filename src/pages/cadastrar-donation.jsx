import { FormCadDonation } from "../components/forms/form_cad_donation";
import { FormCadDonor } from "../components/forms/form_cad_donor";
import { FormSearchDonor } from "../components/forms/form_search_donor";
import { HeaderMenu } from "../components/header/header";
import { DivMainDonation } from "../style/divmainpagestyle";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
export const CadDonationPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMainDonation>
                    <FormSearchDonor />
                    <FormCadDonor fieldsetdonor="disabled" />
                </DivMainDonation>
                <FormCadDonation coddonation="disabled" />
            </MainSecondary>
        </MainPrimary>
    );
};