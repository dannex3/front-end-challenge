import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFAFA;
`;

export const Box = styled.div`
  padding-top: 200px;
  padding-left: 300px;
  display: flex;
  flex-direction: column;
  `

export const Search = styled.input`
  width: 800px;
  height: 45px;
  font-size: 16px;
  font-family: 'Helvetica', sans-serif;
  font-weight: 300;
  color: #000;
  background: #e5e5e5;
  box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;  

export const Button = styled.button`
  width: 250px;
  height: 55px;
  margin: 30px
  font-family: 'Helvetica', sans-serif;
  font-weight: 300;
  font-size: 18px;
  border-radius: 10px;
  color: #fff;
  background: #D12815;
  box-shadow: inset 0 0 1em red;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
    transition: 1s;
  }

  `;

export const Divider = styled.div`
  padding-top: 10px;
  padding-left: 270px;
  padding-bottom: 20px;
`;

export const ProductsContainer = styled.div`
`;

export const BoxItem = styled.div`
 width: 800px;
 height: 100%;
 padding: 20px;
 align-itens: center;
 display: flex;
 background: #e5e5e5;
`

export const NameItem = styled.strong`
  font-family: 'Helvetica', sans-serif;
  font-weight: 300;
  font-size: 16px;
  padding: 5px;
  background: #FFFAFA;
  border: 10px solid #e5e5e5;
`