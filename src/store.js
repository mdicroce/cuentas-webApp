import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly'


const reducer = combineReducers({

})

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store