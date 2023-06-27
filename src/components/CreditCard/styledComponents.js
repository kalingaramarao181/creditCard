import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

export const Container = styled.div`
  background-color: ${props => (props.creditCard ? '#3b4b69' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 50vw;
`

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  width: 40vw;
  height: 40vh;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  padding: 10px;
  border-bottom: solid #ffd773 3px;
  color: white;
  font-weight: 500;
`

export const CardNumber = styled.p`
  height: 40px;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
  color: white;
  margin-top: 30px;
`
export const Form = styled.form`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 30px;
  box-shadow: 2px 2px 1px 2px #888888;
`

export const InputElement = styled.input`
  height: 40px;
  width: 300px;
  padding: 10px;
  border-radius: 4px;
  border-width: 0px;
  margin-bottom: 20px;
`

export const HolderName = styled.p`
  color: white;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: ${props => (props.title ? '12px' : '18px')};
`

export const PaymentTitle = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
`
