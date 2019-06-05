// combines all reducers
import { combineReducers } from 'redux'
import { createResponsiveStateReducer } from 'redux-responsive'

const rootReducer = combineReducers({
    browser: createResponsiveStateReducer({
        xs: 500,
        sm: 640,
        md: 768,
        lg: 960,
        xl: 1140,
    }),
});

export default rootReducer