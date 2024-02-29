//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
import reducer from "./reducers"

//引入redux-thunk，用于支持异步action
import {thunk} from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

//暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))