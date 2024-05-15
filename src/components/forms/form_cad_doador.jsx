import { useForm } from "react-hook-form";
import { DivBtn, DivRadio, FormDoador } from "../../style/formcaddoadorstyle";

export const FormCadDoador = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <FormDoador method="POST" action="">
            <label htmlFor="nome">Nome do Doador</label>
            <input type="text" name="nome" id="nome" />
            <label htmlFor="contato1">Número Móvel do Responsável</label>
            <input type="tel" name="contato1" id="contato1" />
            <label htmlFor="contato2">Número Móvel do Responsável/Opcional</label>
            <input type="tel" name="contato2" id="contato2" />
            <label htmlFor="contato3">Número Fixo do Contato/Opcional ou Ramal</label>
            <input type="tel" name="contato3" id="contato3" />
            <label htmlFor="cep">Cep</label>
            <input type="number" name="cep" id="cep" />
            <label htmlFor="rua">Logradouro: Av/Travessa/Rua</label>
            <input type="text" name="rua" id="rua" />
            <label htmlFor="nunresidencia">Número da Casa/Edifício/Empresa</label>
            <input type="text" name="nunresidencia" id="nunresidencia" />
            <DivRadio>
                <input type="radio" name="tiporesidencia" id="casa" value="casa" />
                <label htmlFor="casa">Casa</label>
                <input type="radio" name="tiporesidencia" id="edificio" value="edificio" />
                <label htmlFor="edificio">Edifício</label>
                <input type="radio" name="tiporesidencia" id="empresa" value="empresa" />
                <label htmlFor="empresa">Empresa</label>
            </DivRadio>
            <label htmlFor="cnpj">Cnpj</label>
            <input type="number" name="cnpj" id="cnpj" />
            <label htmlFor="predio">Nome do Edifício/Empresa</label>
            <input type="text" name="predio" id="predio" />
            <label htmlFor="bloco">Bloco</label>
            <input type="text" name="bloco" id="bloco" />
            <label htmlFor="salaap">Apartamento/Sala</label>
            <input type="text" name="salaap" id="salaap" />
            <label htmlFor="pontoref">Ponto de Referência</label>
            <textarea name="pontoref" id="pontoref"></textarea>
            <label htmlFor="bairro">Bairro/Distrito</label>
            <input type="text" name="bairro" id="bairro" />
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" />
            <DivBtn>
                <input type="submit" title="Cadastrar Doador e ir para Cadastrar Doação" name="cadastrar_doacao" id="cadastrar_doacao" value={"Cad Doador/Doação"} />
                <input type="submit" title="Cadastrar Doador" name="cadastrar_doador" id="cadastrar_doador" value={"Cadastrar Doador"} />
            </DivBtn>
        </FormDoador>
    )
}