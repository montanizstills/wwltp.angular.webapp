interface GenreInterface {
  //allows any property whose name is a string to take on any value
  readonly [prop: string]: any
}

export class Genre extends Map implements GenreInterface {
  constructor(obj?: GenreInterface) {
    super()
    // this.set(obj,obj.prop)
    // obj.forEach(property => {
    //   this.set(property,Reflect.get(this,property))
    // });
  }
}