import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';

import './LoginForm.css';

class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render () {
		let {email, password} = this.state;
		let {isLoginPending, isLoginSuccess, loginError} = this.props;

		return (
			<div className="Login-form-wrapper" onSubmit={this.onSubmit}>
				<Container>
					<Form name="loginForm" className="login-form">
						<h3>Login Form</h3>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" name="email" onChange={e => this.setState({email: e.target.value})} />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
    						<Form.Label>Password</Form.Label>
    						<Form.Control type="password" name="password" onChange={e => this.setState({password: e.target.value})}/>
  						</Form.Group>

  						<Form.Group>
  							<Form.Control type="submit" value="Login" className="sbt-btn" />
  						</Form.Group>

						{isLoginPending && <div className="pending">Please wait...</div>}
						{isLoginSuccess && <div className="success">Welcome back!</div>}
						{loginError && <div className="error">{loginError.message}</div>}
					</Form>	
				</Container>			
			</div>
		);
	}

	onSubmit = (e) => {
		e.preventDefault();
		let { email, password } =this.state;
		this.props.login(email, password);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoginPending: state.isLoginPending,
		isLoginSuccess: state.isLoginSuccess,
		loginError: state.loginError	
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => dispatch(login(email, password))
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);