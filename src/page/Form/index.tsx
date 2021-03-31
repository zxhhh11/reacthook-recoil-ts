import {} from 'antd'

import { Button, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { currentUserRole, textState } from '../../util/publicState'
import { useRecoilState, useRecoilValue } from 'recoil'

import AdvancedForm from './AdvancedForm'
import BasicForm from './BasicForm'
import NoPermission from '../result/NoPermission'
import StepForm from './StepForm'

// import { renderRoutes } from 'react-router-config'

const Form = (props: any) => {
    // const [role, setRole] = useState('Common')
    const [text, setText] = useRecoilState(textState)
    const userRole = useRecoilValue(currentUserRole)
    // useEffect(() => {
    //     let isToggle = true
    //     const userInfo = getUserInfo(props.history)
    //     let role = 'Common'
    //     const AccountID = userInfo['userMessage'].AccountID
    //     UserLog.getRole(AccountID).then((res) => {
    //         if (isToggle && res) {
    //             role = res.data.data
    //             setRole(role)
    //         }
    //     })
    //     return () => {
    //         isToggle = false
    //     }
    // }, [])

    function testRecoil() {
        setText(text + 20)
    }
    return (
        <div>
            <Button type="primary" onClick={testRecoil}>
                Primary Button form
            </Button>
            <Switch>
                <Route
                    path="/form/basicform"
                    component={['Manager', 'Admin'].includes(userRole) ? BasicForm : NoPermission}
                ></Route>
                <Route
                    path="/form/stepform"
                    component={['Manager', 'Admin'].includes(userRole) ? StepForm : NoPermission}
                ></Route>
                <Route path="/form/advancedform" component={userRole === 'Admin' ? AdvancedForm : NoPermission}></Route>
                <Redirect exact path="/form" to="/form/basicform"></Redirect>

                <Redirect from="*" to="/404"></Redirect>
            </Switch>
        </div>
    )
}

export default Form
