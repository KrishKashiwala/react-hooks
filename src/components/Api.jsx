import React from 'react'
import FormikExample from './FormikExample'
const Api = ({ val, count }) => {
    return (
        <div>
            {/* <pre key={count}>{JSON.stringify(val[count], null, 2)}</pre> */}
            {/* { console.log('hello fuck you', val)} */}
            <FormikExample />
        </div>

    )
}
export default Api;