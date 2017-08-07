import React from 'react'
import * as postActions from '../../actions/post'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import CreateForm from './CreateForm'

// @todo need to Authenticate AND Authorize

class CreatePost extends React.Component {

	render () {
		const { createPost, auth, history, location } = this.props
		return (
			<div className="row center-xs">
				<div className="col-xs-12 col-sm-6 col-md-4">
					<div style={{ padding: '1em'}}>
						<CreateForm handleSubmit={createPost} 
							history={history} 
							location={location}
						/>
					</div>
				</div>
			</div>
		)

	}
}

const mapStateToProps = state => ({
	auth : { ...state.auth }
})

CreatePost = withRouter(connect(
	mapStateToProps,
	{ ...postActions }
)(CreatePost))

export default CreatePost