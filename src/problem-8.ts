{
    interface T
    {
        name:string,
        age:number,
        email: string
    }
    function validateKeys(obj: T, keys: (keyof T)[]): boolean {

        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
         
          if (!(key in obj)) {
            return false;
          }
        }
        return true;
      }
      
     
      const person:T = {
         name: "Alice", 
         age: 25, 
         email: "alice@example.com"
         };

      console.log(validateKeys(person, ["name", "age"])); 
      
      
}