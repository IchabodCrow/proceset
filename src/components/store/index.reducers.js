const INCREMENT = "INCREMENT"

export const incAction = () => ({
  type: INCREMENT
})



export const getReducer = (state = {count: 12}, action) => {
  switch(action.type) {
    case INCREMENT: 
      return {
        count: state.count + 1
      }
    default: 
      return state
  }
} 