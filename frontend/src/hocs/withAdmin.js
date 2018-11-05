import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as authActions from '../redux/modules/auth'
import { withRouter } from 'react-router-dom'

const withAdmin = Component =>
  class EnhancedComponent extends React.PureComponent {
    componentDidMount = () => {
      if (!this.props.isAdmin) {
        this.props.history.replace('/?login=true')
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

const mapStateToProps = state => ({
  ...state.auth,
})

const mapDispatchToProps = {
  ...authActions,
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withAdmin,
)
