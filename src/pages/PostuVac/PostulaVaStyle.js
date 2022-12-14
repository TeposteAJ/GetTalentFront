import styled from "styled-components";
import { sizeQuery } from "../../styles/variables";
import { btnReset, v } from "../../styles/variables";

export const SFoormTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
`;
export const SLlaabel = styled.label`
  min-width: 320px;
  display: block;
  font-size: 11px;
  font-weight: 600; 
  margin-left: 0px;
  column-count: auto;
  margin-bottom: calc(${v.smSpacing} / 4);
  /* se creo una condicional donde si quieres que el texto de SLlabel ocupe otra 
     direccion puedas colocarselo con el custom prop alignText, sino existe ese prop
     por default la orientacion del texto sera a la izquierda */
  text-align: ${(props) => (props.alignText ? props.alignText : "left")};
  inline-size: min-content;
  @media screen and (max-width: ${sizeQuery.LaptopL}) {
    width: 70%;
  }
`;
export const SIinput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textFade};
  width: 100%;
  padding: ${v.smSpacing};
  font-size: 15px;
  border-radius: ${v.borderRadius};
`;
export const SFform = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.bg2};
  border-radius: ${v.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const SBbutton = styled.button`
  ${btnReset};
  width: 200%;
  background: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textSecondary};
  padding: ${v.smSpacing};
  display: flex;
  float: center;
  background-color: #173b5a;
  color: white;
  justify-content: center;
  border-radius: ${v.borderRadius};
  margin-top: ${v.mdSpacing};
  cursor: pointer;
`;
export const Link = styled.link`
background-color: pink;
`;