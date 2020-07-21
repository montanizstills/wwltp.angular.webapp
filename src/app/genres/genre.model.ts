export interface Genre {
  id: string;
}

// interface GenreInterface {
//   //allows any property whose name is a string to take on any value
//   readonly [prop: string]: any
  
// }

// export class Genre extends Map implements GenreInterface {
//   constructor(obj?: GenreInterface) {
//     super()
//     // this.set(obj.names,obj.value)
//     // obj.forEach(property => {
//     //   this.set(property,Reflect.get(this,property))
//     // });
//   }
// }

// // class myNewClass{
// // [prop: string]: any
// // }

// // new myNewClass("newPropName"=5);
// // <myObj props="Nez">
// // console.log(prop) --> "nez"
// // {key= nez ...}