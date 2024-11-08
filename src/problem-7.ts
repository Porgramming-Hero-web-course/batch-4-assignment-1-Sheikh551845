{
    class Car {
        
        constructor(public make: string, public model: string, public year: number) {
        
        }
      
        getCarAge(): number {
          const currentYear = new Date().getFullYear();
         const gap:number = currentYear - this.year;
         return gap;
        }
      }
      
     
      const car = new Car("Honda", "Civic", 2020);
      const YearDifferent:number=car.getCarAge();
      console.log(YearDifferent) 
      
}