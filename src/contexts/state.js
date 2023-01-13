import React from 'react'
import { ProviderComposer } from './providerComposer'
import {

} from './index'

const ContextProvider = ({ children }) => {
    return (
        <ProviderComposer
            contexts={[

            ]}>
            {children}
        </ProviderComposer>
    )
}

export default ContextProvider