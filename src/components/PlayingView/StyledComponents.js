import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: auto;
  color: #ffffff;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

export const ScoreBoard = styled.div`
  border: 2px solid #ffffff;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 50%;
    padding-left: 25px;
    padding-right: 25px;
  }
`

export const ScoreBoardHeading = styled.h1`
  font-family: 'Bree Serif';
  margin: 0px;
  font-weight: 500;
  font-size: 25px;
`

export const ScoreBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-weight: 500;
  border-radius: 8px;
  border-width: 0px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 22px;
  padding-right: 22px;
  font-size: 23px;
  display: flex;
  font-family: 'Bree Serif';
  flex-direction: column;
  align-items: center;
`
export const Score = styled.p`
  font-size: 23px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 6px;
  font-family: 'Bree Serif';
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 55px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const ResultButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 9px;
  font-size: 20px;
`

export const GameResult = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 8px;
`

export const NewGameBtn = styled(ScoreBtn)`
  font-size: 16px;
  margin-top: 15px;
  padding: 10px;
  padding-left: 34px;
  padding-right: 34px;
  border-radius: 10px;
  cursor: pointer;
`

export const GameRules = styled(ScoreBtn)`
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  align-self: flex-end;
  cursor: pointer;
`

export const RulesImg = styled.img`
  height: 350px;
  width: 100%;
`

export const RulesContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ClosePopup = styled.button`
  padding: 10px;
  cursor: pointer;
  border-width: 0px;
  align-self: flex-end;
  margin-bottom: 5px;
`

export const GameScore = styled.p`
  font-size: 40px;
  font-weight: bold;
  padding: 0px;
  font-family: 'Roboto';
  margin: 0px;
`
