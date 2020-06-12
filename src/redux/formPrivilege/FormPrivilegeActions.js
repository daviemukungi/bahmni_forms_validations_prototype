import { FORM_PRIVILEGE_FETCH_REQUEST , FORM_PRIVILEGE_ADD , FORM_PRIVILEGE_REMOVE} from './FormPrivilegeType'
import axios from 'axios'

export const formPrivilegeFetchRequest = () => {
    
    return {
        type: FORM_PRIVILEGE_FETCH_REQUEST
        
    }
}

export const formPrivilegeAdd = (newPrivilege) => {
    return {
        type: FORM_PRIVILEGE_ADD,
        payload : newPrivilege
    }
}

export const formPrivilegeRemove = () => {
    return {
        type: FORM_PRIVILEGE_REMOVE
    }
}

export const fetchPrivileges = () => {
    return () =>{ 
        axios.get('privilegeUrl')
        .then(response => {
            const privileges = response.data
        })
        .catch(error => {
            const errorMsg = error.message
        })
    }
}

