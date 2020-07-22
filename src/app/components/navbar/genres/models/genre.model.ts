export interface Genre {
  //allows any property whose name is a string to take on any value
  //   readonly [prop: string]: any
  id: String;
  subgenres: Array<String>
}

// export class Genre extends Map implements GenreInterface {
//   constructor(obj?: GenreInterface) {
//     super()
//     // this.set(obj.names,obj.value)
//     // obj.forEach(property => {
//     //   this.set(property,Reflect.get(this,property))
//     // });
//   }
// }