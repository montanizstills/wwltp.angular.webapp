interface GenreInterface {
  key: String;
  subgenres: String[];
}
export class Genre extends Map{
  map = new Map();

  constructor(obj?:GenreInterface) {
    super()
    this.map.set(obj.key,obj.subgenres)
  }
}
