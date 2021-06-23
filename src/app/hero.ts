export class Hero {
  id: number = 0;
  name: string = '';

  constructor() {
    this.id = 0;
    this.name = '';
  }

  public avatar(): string {
    console.log('AVATAR');
    return `https://d2ph5fj80uercy.cloudfront.net/06/cat${this.id}.jpg`;
  }

  public photo(): string {
    return `https://d2ph5fj80uercy.cloudfront.net/06/cat${this.id}.jpg`;
  }
}
