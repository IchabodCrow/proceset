const LOAD = "http://localhost:3000/setting"

const reducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD: 
         return {
            initialData: action.initialData
         }
        default: 
         return state
    }
}

export const load = initialData => ({type: LOAD, initialData})

export default reducer