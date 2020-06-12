import { combinedReducers } from 'redux'
import formsPrivilegeReducer from './formPrivilege/FormPrivilegeReducer';


const rootReducer = combinedReducers({
   formsPrivilegeReducer: formsPrivilegeReducer
})

export default rootReducer