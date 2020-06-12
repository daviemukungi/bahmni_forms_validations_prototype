import React , {useState} from 'react'
import { connect } from 'react-redux'
import { formPrivilegeAdd } from '../redux'

function FormPrivilegeContainerAdd (props) {
 const [newPrivilege , setNewPrivilege ] = useState()
    return (
        <div>
            <input type ="text" value = {newPrivilege} onChange = { e => setNewPrivilege(e.target.value)}/>
            <button onClick={() => props.formPrivilegeAdd(newPrivilege)}>Add Privilege</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        formPrivileges : state.formPrivileges
    }
}
const mapDispatchToProps = dispatch => {
    return {
        formPrivilegeAdd : newPrivilege => dispatch(formPrivilegeAdd(newPrivilege))  
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(FormPrivilegeContainerAdd)
