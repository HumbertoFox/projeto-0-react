import React from "react";
import { DivObj, DivObjPrimary, DivObjsQuant, DivQuant, FormDoacao } from "../../style/formcaddoacaostyle";
import { DivBtn } from "../../style/formcaddoadorstyle";

export const FormCadDoacao = (props) => {
    return (
        <FormDoacao method="POST" action="">
            <fieldset disabled={props.text}>
                <legend>Lista de objetos a serem doados</legend>
                <DivObj>
                    <label htmlFor="codigodoacao">Código da Doação</label>
                    <input type="text" name="codigodoacao" id="codigodoacao" />
                </DivObj>
                <DivObjPrimary>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto1">objeto 1</label>
                            <input type="text" name="objeto1" id="objeto1" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant1">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant1" id="quant1" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto2">objeto 2</label>
                            <input type="text" name="objeto2" id="objeto2" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant2">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant2" id="quant2" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto3">objeto 3</label>
                            <input type="text" name="objeto3" id="objeto3" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant3">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant3" id="quant3" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto4">objeto 4</label>
                            <input type="text" name="objeto4" id="objeto4" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant4">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant4" id="quant4" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto5">objeto 5</label>
                            <input type="text" name="objeto5" id="objeto5" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant5">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant5" id="quant5" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto6">objeto 6</label>
                            <input type="text" name="objeto6" id="objeto6" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant6">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant6" id="quant6" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto7">objeto 7</label>
                            <input type="text" name="objeto7" id="objeto7" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant7">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant7" id="quant7" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto8">objeto 8</label>
                            <input type="text" name="objeto8" id="objeto8" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant8">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant8" id="quant8" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto9">objeto 9</label>
                            <input type="text" name="objeto9" id="objeto9" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant9">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant9" id="quant9" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto10">objeto 10</label>
                            <input type="text" name="objeto10" id="objeto10" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant10">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant10" id="quant10" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto11">objeto 11</label>
                            <input type="text" name="objeto11" id="objeto11" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant11">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant11" id="quant11" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto12">objeto 12</label>
                            <input type="text" name="objeto12" id="objeto12" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant12">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant12" id="quant12" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto13">objeto 13</label>
                            <input type="text" name="objeto13" id="objeto13" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant13">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant13" id="quant13" />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto14">objeto 14</label>
                            <input type="text" name="objeto14" id="objeto14" />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant14">Qantidade/Caixa/Sacola</label>
                            <input type="text" name="quant14" id="quant14" />
                        </DivQuant>
                    </DivObjsQuant>
                </DivObjPrimary>
                <label htmlFor="obs">Observações</label>
                <textarea name="obs" id="obs"></textarea>
            </fieldset>
            <DivBtn>
                <input type="submit" name="cadastrar_doacao" value={"Cadastrar Doação"} />
                <input type="submit" name="cadastrar_agendar" value={"Cadastrar e agendar"} />
            </DivBtn>
        </FormDoacao>
    )
}