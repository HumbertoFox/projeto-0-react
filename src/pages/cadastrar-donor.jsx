import { FormCadDonor } from "../components/forms/form_cad_donor";
import { HeaderMenu } from "../components/header/header";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
export const CadDonorPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <FormCadDonor $donorCod="disabled" />
            </MainSecondary>
        </MainPrimary>
    );
};