import { useState } from 'react'
import Child from './Child'


function Parent() {
    const [data, setData] = useState({ name:"Tushar", age:25, address:"Odisha" })

    
    //# callback function we are creating here
    const changeData = (updatedData) => {
        console.log("function called in child")
        setData(updatedData)
    }

    return (
        <>
            <h2> This is Parent Class</h2>
            <Child data={data} msg="Hii Good AfterNoon EveryOne...!!!" changeData={changeData}> </Child>
        </>
    )
}

export default Parent