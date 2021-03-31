import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'antd/dist/antd.css'
import './theme/style/main.css'
import './mock'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
            <App />
        </React.Suspense>
    </RecoilRoot>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
