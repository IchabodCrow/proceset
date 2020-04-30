const GET_FIELDS_DATA = "GET_FIELDS_DATA"

const initialValue = {
    fields: ''
}

const reduceFieldsData = (state = initialValue, action) => {
    switch (action.type) {
        
        case GET_FIELDS_DATA: 
       
        let fieldsValue = action.fields
            return {
                ...state, 
                firstName: fieldsValue.firstName,
                secondName: fieldsValue.secondName,
                email: fieldsValue.email,
                password: fieldsValue.passwordField,
                repPas: fieldsValue.repPas
            }
        default: 
            return state;
    }
}

export default reduceFieldsData

export const reduceFieldsDataCreator = (fields) => ({ type: GET_FIELDS_DATA, fields})