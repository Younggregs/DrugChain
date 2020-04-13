
const drugs = (state = [], action) => {
    switch (action.type) {
      case 'ADD_DRUG':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      default:
        return state
    }
  }
  
  export default drugs