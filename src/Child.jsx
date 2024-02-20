
function Child({data, msg, changeData}) {

    let {name, age, address} = data

    const changingData = () => {
        let obj={
            name :"Ravees sir",
            age : 35,
            address : "TestYantra"
        }
        changeData(obj)
    }

    return (
        <>
            <h1 style={{color:"red"}}>{msg}</h1>
            <ul>
                <h2 style={{color:"blue"}}>

                    {/* <li>{data.name}</li>
                    <li>{data.age}</li>
                    <li>{data.address}</li> */}

                    <li>{name}</li>
                    <li>{age}</li>
                    <li>{address}</li>
                    <button onClick={changingData}>Click Me</button>
                </h2>
                
            </ul>
        </>
    )
}

export default Child;