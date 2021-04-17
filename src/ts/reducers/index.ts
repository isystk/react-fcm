import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import parts from './parts'

const rootReducer = (history: any) =>
  combineReducers({
    parts,
    router: connectRouter(history),
  })

export default rootReducer
