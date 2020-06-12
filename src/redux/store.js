import { createStore } from 'redux'
import formsPrivilegeReducer from './formPrivilege/FormPrivilegeReducer'

const store = createStore(formsPrivilegeReducer)


export default store