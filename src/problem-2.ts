{
    function removeDuplicates(A: number[]){

        let arr: number[]=[];

        A.forEach(num => {
            if (arr.indexOf(num) === -1) {
            
                arr.push(num);
            }
        });
       
        return arr.sort((a, b) => a - b)
    }

   const New:number[]= removeDuplicates([1,2,5,3,3,4,5,2,6,1]);
console.log(New)
  
}