import React from 'react'

const GameContext = React.createContext({
  score: 0,
  gameSelections: [],
  choiceByUser: () => {},
})

export default GameContext
