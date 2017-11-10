export default class Article {
  id: number;
  title: string;
  body: string;

  constructor(id: number, title: string, body: string) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
