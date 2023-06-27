import {useState} from 'react'

import {
  MainContainer,
  Container,
  Heading,
  Card,
  CardNumber,
  Form,
  InputElement,
  HolderName,
  PaymentTitle,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => setNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    setNumber('')
    setName('')
  }
  return (
    <MainContainer>
      <Container creditCard>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <HolderName title>CARDHOLDER NAME</HolderName>
          <HolderName>{name.toUpperCase()}</HolderName>
        </Card>
      </Container>
      <Container>
        <Form onSubmit={onSubmitForm}>
          <PaymentTitle>Payment Method</PaymentTitle>
          <InputElement
            value={number}
            onChange={onChangeNumber}
            type="text"
            placeholder="Card Number"
          />
          <InputElement
            value={name}
            onChange={onChangeName}
            type="text"
            placeholder="Cardholder Name"
          />
        </Form>
      </Container>
    </MainContainer>
  )
}
export default CreditCard
