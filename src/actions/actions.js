const GET_FIELDS_DATA = "GET_FIELDS_DATA"

export const getFielsdDataCreator = () => ({type: GET_FIELDS_DATA})


export const addUser =() => {
	return {
		type: "ADD_USER",
		
	}
}



// export const handleInputChange = (name, value) => {
// 	return {

// 		type: "HANDLE_INPUT_CHANGE",
// 		payload: { [name]: value}
// 	}
// }




// const reduceFieldsData = (state, action) => {
//     switch (action.type) {
//         case GET_FIELDS_DATA: 
//             return {
//                 ...state,
//             }
//         default: 
//             return state;
//     }
// }

