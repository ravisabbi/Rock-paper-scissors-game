import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

import {
  AppContainer,
  HeaderSection,
  CustomText,
  ScoreHeading,
  ScoreContainer,
  Score,
  ChoicesList,
  ModalContainer,
  RuleImage,
  CloseButton,
  RulesButton,
  ResultContainer,
  ResultItem,
  ResultImage,
  ResultStatus,
  Person,
  PlayAgainButton,
} from './styledComponents'
import SelectButton from '../SelectButton'

class RockPaperScissors extends Component {
  state = {
    isGameInProgress: true,
    score: 0,
    selectedId: '',
    computerId: '',
    status: '',
  }

  onDecreaseScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  onIncreaseScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  onReset = () => {
    this.setState({
      isGameInProgress: true,

      selectedId: '',
      computerId: '',
      status: '',
    })
  }

  onClickItem = id => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const computerChooseId = choicesList[randomNumber].id

    let resultStatus = ''
    if (id === computerChooseId) {
      resultStatus = 'IT IS DRAW'
    } else if (id === 'ROCK' && computerChooseId === 'PAPER') {
      resultStatus = 'YOU LOSE'
      this.onDecreaseScore()
    } else if (id === 'PAPER' && computerChooseId === 'SCISSORS') {
      resultStatus = 'YOU LOSE'
      this.onDecreaseScore()
    } else if (id === 'SCISSORS' && computerChooseId === 'ROCK') {
      resultStatus = 'YOU LOSE'
      this.onDecreaseScore()
    } else {
      resultStatus = 'YOU WON'
      this.onIncreaseScore()
    }

    this.setState({
      isGameInProgress: false,
      selectedId: id,
      computerId: computerChooseId,
      status: resultStatus,
    })
  }

  renderingHeaderSection = () => {
    const {score} = this.state
    return (
      <HeaderSection>
        <CustomText>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </CustomText>
        <ScoreContainer>
          <ScoreHeading>Score</ScoreHeading>
          <Score>{score}</Score>
        </ScoreContainer>
      </HeaderSection>
    )
  }

  renderingResult = () => {
    const {selectedId, computerId, status} = this.state
    const {choicesList} = this.props
    const selectedItem = choicesList.find(
      eachItem => eachItem.id === selectedId,
    )
    const opponentItem = choicesList.find(
      eachItem => eachItem.id === computerId,
    )
    return (
      <ResultContainer>
        <ResultItem>
          <Person>You</Person>
          <ResultImage src={selectedItem.imageUrl} alt="your choice" />
        </ResultItem>
        <ResultItem>
          <Person>Opponent</Person>
          <ResultImage src={opponentItem.imageUrl} alt="opponent choice" />
        </ResultItem>
        <ResultItem>
          <ResultStatus>{status}</ResultStatus>
          <PlayAgainButton type="button" onClick={this.onReset}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultItem>
      </ResultContainer>
    )
  }

  renderingChoiceList = () => {
    const {choicesList} = this.props
    return (
      <ChoicesList>
        {choicesList.map(eachItem => (
          <SelectButton
            itemDetails={eachItem}
            onClickItem={this.onClickItem}
            key={eachItem.id}
          />
        ))}
      </ChoicesList>
    )
  }

  renderingPopUp = () => (
    <Popup trigger={<RulesButton type="button">Rules</RulesButton>} modal>
      {close => (
        <ModalContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size="20" />
          </CloseButton>
          <RuleImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ModalContainer>
      )}
    </Popup>
  )

  render() {
    const {isGameInProgress} = this.state
    return (
      <AppContainer>
        {this.renderingHeaderSection()}
        {isGameInProgress ? this.renderingChoiceList() : this.renderingResult()}
        {this.renderingPopUp()}
      </AppContainer>
    )
  }
}

export default RockPaperScissors
