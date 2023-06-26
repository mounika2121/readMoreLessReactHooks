// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  Heading,
  Para,
  Img,
  Description,
  ButtonContainer,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [readBtnClicked, setReadBtnClicked] = useState(false)

  const onReadMore = () => {
    setReadBtnClicked(preState => !preState)
  }

  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {readBtnClicked ? (
        <div>
          <Description>{reactHooksDescription}</Description>
          <ButtonContainer>
            <Button type="button" onClick={onReadMore}>
              Read Less
            </Button>
          </ButtonContainer>
        </div>
      ) : (
        <div>
          <Description>{reactHooksDescription.slice(0, 170)}</Description>
          <ButtonContainer>
            <Button type="button" onClick={onReadMore}>
              Read More
            </Button>
          </ButtonContainer>
        </div>
      )}
    </AppContainer>
  )
}

export default ReadMore
