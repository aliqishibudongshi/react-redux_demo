//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
import { Provider} from "react-redux"
//引入App
import App from './App'
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)