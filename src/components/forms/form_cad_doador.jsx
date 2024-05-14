import { useForm } from "react-hook-form";

export const FormCadDoador = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <form method="POST" action="">
            <label for="nome">Nome do Doador</label>
            <input type="text" name="nome" id="nome" />
            <label for="contato1">Número Móvel do Responsável</label>
            <input type="tel" name="contato1" id="contato1" />
            <label for="contato2">Número Móvel do Responsável/Opcional</label>
            <input type="tel" name="contato2" id="contato2" />
            <label for="contato3">Número Fixo do Contato/Opcional ou Ramal</label>
            <input type="tel" name="contato3" id="contato3" />
            <label for="cep">Cep</label>
            <input type="number" name="cep" id="cep" onblur="pesquisacep(this.value);" />
            <label for="rua">Logradouro: Av/Travessa/Rua</label>
            <input type="text" name="rua" id="rua" />
            <label for="nunresidencia">Número da Casa/Edifício/Empresa</label>
            <input type="text" name="nunresidencia" id="nunresidencia" />
            <div>
                <input type="radio" name="tiporesidencia" id="casa" value="casa" checked />
                <label for="casa">Casa</label>
                <input type="radio" name="tiporesidencia" id="edificio" value="edificio" />
                <label for="edificio">Edifício</label>
                <input type="radio" name="tiporesidencia" id="empresa" value="empresa" />
                <label for="empresa">Empresa</label>
            </div>
            <label for="cnpj">Cnpj</label>
            <input type="number" name="cnpj" id="cnpj" />
            <label for="predio">Nome do Edifício/Empresa</label>
            <input type="text" name="predio" id="predio" />
            <label for="bloco">Bloco</label>
            <input type="text" name="bloco" id="bloco" />
            <label for="salaap">Apartamento/Sala</label>
            <input type="text" name="salaap" id="salaap" />
            <label for="pontoref">Ponto de Referência</label>
            <textarea name="pontoref" id="pontoref"></textarea>
            <label for="bairro">Bairro/Distrito</label>
            <input type="text" name="bairro" id="bairro" />
            <label for="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" />
            <div >
                <div>
                    <input type="submit" name="cadastrar_doacao" id="cadastrar_doacao" />
                </div>
                <div>
                    <input type="submit" name="cadastrar_doador" id="cadastrar_doador" />
                </div>
            </div>
        </form>
    )
}