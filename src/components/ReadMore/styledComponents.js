// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
`
export const Para = styled.p`
  color: #334155;
`
export const Img = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`
export const Description = styled.p`
  color: #334155;
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const ButtonContainer = styled.div`
  text-align: center;
`
export const Button = styled.button`
height: 40px;
width: 120px;
color: white;
background-color: #1f81ff;
border: none;
cursor: pointer;
border-radius: 8px;
}
`
