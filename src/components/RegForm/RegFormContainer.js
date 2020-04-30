import {connect } from 'react-redux'
import { reduceFieldsDataCreator } from '../../reducers/reduceFieldsData'
import { compose } from 'redux'
import RegForm from './RegForm'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveFieldsValues: (fields) => {
            dispatch(reduceFieldsDataCreator(fields))
        }
    }
}

const RegFormContainer = connect (mapStateToProps, mapDispatchToProps)(RegForm)

export default RegFormContainer

