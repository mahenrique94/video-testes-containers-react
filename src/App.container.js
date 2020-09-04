import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import App from './App'

const mapStateToProps = state => ({
  count: state,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT'}),
  decrement: () => dispatch({ type: 'DECREMENT'}),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
)
