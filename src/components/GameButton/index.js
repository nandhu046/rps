import {GameBtn, Image, BtnContainer} from './StyledComponents'

import GameContext from '../../context/GameContext'

const GameButton = props => {
  const {data, altValue} = props
  const {id, imageUrl} = data
  return (
    <GameContext.Consumer>
      {value => {
        const {choiceByUser, gameSelections} = value
        const onClickBtn = () => {
          choiceByUser(id)
        }
        return (
          <BtnContainer>
            {gameSelections.length === 0 ? (
              <GameBtn
                data-testid={`${id.toLowerCase()}Button`}
                onClick={onClickBtn}
              >
                <Image src={imageUrl} alt={id} />
              </GameBtn>
            ) : (
              <GameBtn>
                <Image src={imageUrl} alt={altValue} />
              </GameBtn>
            )}
          </BtnContainer>
        )
      }}
    </GameContext.Consumer>
  )
}

export default GameButton
