import React from 'react'
import { connect } from 'react-redux'
import { formPrivilegeAdd } from '../redux'

function FormPrivilegeContainer(props) {
    return props.formPrivileges ? (
        <div>
            <table>
                <thead>
                    <th>Name:</th>
                    <th>Read:</th>
                    <th>Write:</th>
                </thead>
                {props.formPrivileges.map(formPrivilege =>
                    <tbody>
                        <tr key={formPrivilege.uuid}>
                            <td>{formPrivilege.name}</td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                        </tr>
                    </tbody>

                )}
            </table>
        </div>
    ) : (
        
            <h2>No Privileges!</h2>
        )
}

const mapStateToProps = state => {
    return {
        formPrivileges: state.formPrivileges
    }
}
const mapDispatchToProps = dispatch => {
    return {
        formPrivilegeAdd: () => dispatch(formPrivilegeAdd())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormPrivilegeContainer)