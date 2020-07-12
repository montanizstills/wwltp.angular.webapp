interface GenreInterface {
  key: String;
  subgenres: String[];
}
export class Genre {
  map = new Map();

  constructor(obj?:GenreInterface) {
    this.map.set(obj.key,obj.subgenres)
  }
}
