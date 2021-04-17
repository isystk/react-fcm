import React from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

type Props = {
  history: any
}

class ReactRoot extends React.Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props)
  }

  render() {
    return <ConnectedRouter history={this.props.history}>{routes()}</ConnectedRouter>
  }
}

export default connect(null, null)(ReactRoot)
