const SET_START_PORTION = "SET_START_PORTION"
const SET_MAX_PORTION = "SET_MAX_PORTION"
const SET_ARRAY_ONE_POSITION = "SET_ARRAY_ONE_POSITION"

let defaultState = {
  startPortion : 0,
  maxPortion : 5,
  arrayOnePortion: []
}


const carouselNewItems = (state = defaultState, action) => {
  switch (action.type){
    case SET_START_PORTION:
      return {...state, startPortion: action.startPortion}
    case SET_MAX_PORTION:
      return {...state, maxPortion: action.maxPortion}
    case SET_ARRAY_ONE_POSITION:
      debugger
        return {...state, arrayOnePortion:action.arrayOnePortion}
    default:
      return state
  }
}
 
export const setStartPortion = (startPortion) => ({type : SET_START_PORTION, startPortion})
export const setMaxPortion = (maxPortion) => ({type : SET_MAX_PORTION, maxPortion})
export const setArrayOnePortion = (arrayOnePortion) => ({type : SET_ARRAY_ONE_POSITION, arrayOnePortion})

export default carouselNewItems;
