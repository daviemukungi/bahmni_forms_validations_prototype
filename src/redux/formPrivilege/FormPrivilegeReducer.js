import { FORM_PRIVILEGE_FETCH_REQUEST ,FORM_PRIVILEGE_ADD , FORM_PRIVILEGE_REMOVE } from './FormPrivilegeType'
  const initialState = {
  loading: false,
  error: [],    
  formPrivileges : [
      {name : 'TB Form Read' , uuid : '123@123'}

  ]
}

const formsPrivilegeReducer = (state = initialState , action) =>{
    switch (action.type) {
        case FORM_PRIVILEGE_FETCH_REQUEST : 
        return {
            ...state
            
        }
        case FORM_PRIVILEGE_ADD :
        return {
            ...state , 
            formPrivileges : [...state.formPrivileges, { 
                name : action.payload,
                uuid : action.payload
             }],    
            }
        default : return state
    } 
}

export default formsPrivilegeReducer

