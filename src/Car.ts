interface Vehicle {
    make : string;
    model : string;
    year : number;
    start : ()=>void;
    }
    
    class Car implements Vehicle {
    make : string;
    model : string;
    year : number;
    
    
    constructor (make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
      }
      start = (): void => {
        console.log("[Engine Started] ");
      };
        }
        
      const fordMustang = new Car("United States",  "Ford Mustang", 1969);
      console.log(fordMustang)
        