import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameButton from '../GameButton'
import GameContext from '../../context/GameContext'
import {
  MainContainer,
  ScoreBoard,
  ScoreBoardHeading,
  ScoreBtn,
  Score,
  ButtonsContainer,
  ResultButton,
  Para,
  GameResult,
  NewGameBtn,
  GameRules,
  RulesImg,
  RulesContainer,
  ClosePopup,
  GameScore,
} from './StyledComponents'

let gameSelections = []
class PlayingView extends Component {
  state = {score: 0, choice: '', result: ''}

  genOpponentChoice = () => {
    const {choicesList} = this.props
    const {choice} = this.state
    const selectedByUser = choice.toLowerCase()
    const opSelect = Math.floor(Math.random() * choicesList.length)
    const genId = choicesList[opSelect].id
    const selectedByOpponent = genId.toLowerCase()
    gameSelections = [
      ...choicesList.filter(i => i.id === choice),
      choicesList[opSelect],
    ]
    if (
      (selectedByUser === 'paper' && selectedByOpponent === 'rock') ||
      (selectedByUser === 'scissors' && selectedByOpponent === 'paper') ||
      (selectedByUser === 'rock' && selectedByOpponent === 'scissors')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (
      (selectedByUser === 'scissors' && selectedByOpponent === 'rock') ||
      (selectedByUser === 'rock' && selectedByOpponent === 'paper') ||
      (selectedByUser === 'paper' && selectedByOpponent === 'scissors')
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (selectedByUser === selectedByOpponent) {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    }
  }

  choiceChoose = id => {
    this.setState({choice: id}, this.genOpponentChoice)
  }

  onPlayAgain = () => {
    gameSelections = []
    this.setState({choice: '', result: ''})
  }

  renderOnResult = r => {
    const {choicesList} = this.props
    const {result} = this.state
    if (r === '') {
      return (
        <>
          {choicesList.map(i => (
            <GameButton key={i.id} data={i} />
          ))}
        </>
      )
    }
    return (
      <>
        <ResultButton>
          <Para>YOU</Para>
          <GameButton data={gameSelections[0]} altValue="your choice" />
        </ResultButton>
        <ResultButton>
          <Para>OPPONENT</Para>
          <GameButton data={gameSelections[1]} altValue="opponent choice" />
        </ResultButton>
        <div>
          <GameResult>{result}</GameResult>
          <NewGameBtn onClick={this.onPlayAgain}>PLAY AGAIN</NewGameBtn>
        </div>
      </>
    )
  }

  render() {
    const {score, result} = this.state
    return (
      <GameContext.Provider
        value={{
          score,
          choiceByUser: this.choiceChoose,
          gameSelections,
        }}
      >
        <MainContainer>
          <ScoreBoard>
            <ScoreBoardHeading>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </ScoreBoardHeading>
            <ScoreBtn>
              <Score>Score</Score>
              <GameScore>{score}</GameScore>
            </ScoreBtn>
          </ScoreBoard>
          <ButtonsContainer>{this.renderOnResult(result)}</ButtonsContainer>
          <Popup
            modal
            trigger={
              <GameRules type="button" className="trigger-button">
                RULES
              </GameRules>
            }
          >
            {close => (
              <>
                <RulesContainer>
                  <ClosePopup onClick={() => close()}>
                    <RiCloseLine />
                  </ClosePopup>
                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesContainer>
              </>
            )}
          </Popup>
        </MainContainer>
      </GameContext.Provider>
    )
  }
}

export default PlayingView
