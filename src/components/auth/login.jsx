import React, { Component } from 'react';
import { input, button } from '../../utils/tools';
// // import { onLogin } from '../../store/actions/authAction'
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { onLogin } from '../../services/authService';

// const mapStateToProps = state => {
//     return {
//         user: state.authReducer.user
//     }
// }

// const mapDispacthToProps = (dispatch) => {
//     // return bindActionCreators({ onLogin }, dispatch)
// };

class Login extends Component {

    state = {
        payload: {
            username: '',
            password: ''
        }
    }

    async componentDidMount () {
        // const { payload } = this.state;
        // const payload = await onLogin();
        // console.log(payload);
    }

    onLogin = e => {
        e.preventDefault();
        const { payload } = this.state;

        payload.username = e.target.username.value;
        payload.password = e.target.password.value;

        this.setState({ payload })
        return onLogin(payload);
    }

    render () {
        return (
            <div className="container mt-5">
                <div className="offset-md-4">
                    <h1>Login Form</h1>
                    <form onSubmit={this.onLogin}>
                        <div className="form-group">
                            {input("text", "username", "Username ...", "col-md-4", "form-control")}
                        </div>
                        <div className="form-group">
                            {input("password", "password", "Password ...", "col-md-4", "form-control")}
                        </div>
                        <div className="form-group">
                            {button("Login", "fa fa-login", "btn btn-sm btn-success")}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
// export default connect(mapStateToProps, mapDispacthToProps)(Login);
export default Login;