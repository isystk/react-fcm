import * as React from 'react'
import * as ReactDom from 'react-dom'
import { persistStore } from 'redux-persist'
import myConfigureStore, { history } from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/dist/js/adminlte.min.js'
import ReactRoot from './ReactRoot'

const store = myConfigureStore()
const pstore = persistStore(store)

const render = () => {
  ReactDom.render(
    <Provider store={store}>
      <PersistGate loading={<p>loading...</p>} persistor={pstore}>
        <ReactRoot history={history} />
      </PersistGate>
    </Provider>,
    document.getElementById('react-root'),
  )
}
render()
