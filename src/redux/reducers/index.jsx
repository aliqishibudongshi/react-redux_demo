import { combineReducers} from 'redux'
//引入为Count组件服务的reducer
import count from './count'
//引入为Person组件服务的reducer
import persons from './person'

//合并reducer
export default combineReducers({
    count,
    persons
})
