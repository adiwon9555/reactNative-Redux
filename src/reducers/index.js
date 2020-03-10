import { combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'
import LibrarySelectReducer from './LibrarySelectReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibrary: LibrarySelectReducer
})