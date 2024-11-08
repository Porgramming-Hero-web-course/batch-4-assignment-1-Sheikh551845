{
type Circle = { 
               s: "circle"; 
               r: number
              };
type Rectangle = { 
                  s: "rectangle"; 
                  w: number; 
                  h: number 
                 };

type Shape = Circle | Rectangle;

function calculateShapeArea(A: Shape): number {
    let area:number=0;
    if (A.s === "circle") 
       {
        area= Math.PI * A.r * A.r;
       } 
    else if (A.s === "rectangle") 
        {
        area= A.w * A.h;
        }

    return area
    
}


const circleArea = calculateShapeArea({ s: "circle", r: 5 });
console.log(circleArea.toFixed(2)); 

const rectangleArea = calculateShapeArea({ 
                                           s: "rectangle", 
                                           w: 4,
                                           h: 3 
                                        });
console.log(rectangleArea); 

}