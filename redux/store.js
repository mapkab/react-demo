import {creatstore} from 'redux'
import reducer from './reducer'



export default configureStore(initialState={todo:[]}){
	return creatStore(reducer,initialState)
}