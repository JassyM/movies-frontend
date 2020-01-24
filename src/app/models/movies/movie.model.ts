export class Movie { 

  constructor(
    public id: string,
    public name: string,
    public genre: string,
    public score: string,
    public cover: string
  ) {

  }

  reset(){
    this.id = null;
    this.name = null;
    this.genre = null;
    this.score = null;
    this.cover = null;
  }
}