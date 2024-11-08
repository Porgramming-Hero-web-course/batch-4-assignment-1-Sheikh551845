{
    interface obj{
        name:string,
        age: number,
        roll: number
    };

    const NewObj:obj={
        name:"Sheikh",
        age: 25,
        roll:3416
    }

    function getProperty<T, K extends keyof T>(A:T, Key:K){
        const Value= A[Key]
     return Value
    }

    const Returns = getProperty(NewObj, "roll")

    console.log(Returns)
}