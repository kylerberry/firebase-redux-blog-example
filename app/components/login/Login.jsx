import React from 'react'

class Login extends React.Component {
	render() {
		return (
			<div>
				<input type="text" placeholder="email" />
				<input type="password" placeholder="password" />
				<button>Sign In</button>
				or
				<button>Create an Account</button>
			</div>		
		)
	}
}

export default Login