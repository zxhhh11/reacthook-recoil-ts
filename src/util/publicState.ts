import { atom, selector, useRecoilState } from 'recoil'

import { UserLog } from '../api/user'
import { getUserInfo } from './util'
import { history } from './history'

//sync state
export const textState = atom({
    key: 'textState',
    default: 32
})
export const userInfo = atom({
    key: 'userInfo',
    default: { AccountID: '' }
})
export const userRole = atom({
    key: 'userRole',
    default: ''
})
// const tempCelcius = selector({
//     key: 'tempCelcius',
//     get: ({ get }) => ((get(tempFahrenheit) - 32) * 5) / 9,
//     set: ({ set }, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32)
// })

//async state

export const currentUserRole = selector({
    key: 'currentUserRole',
    get: async ({ get }) => {
        const { AccountID } = get(userInfo)
        console.log(AccountID, 'AccountID vdv')

        const response = await UserLog.getRole(AccountID)
        console.log(response, 'response')
        return response.data.data
    }
})
