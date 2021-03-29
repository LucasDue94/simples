export class Album {
  id!: number;
  title!: string;

  constructor(obj?: {}) {
    if (obj) {
      // @ts-ignore
      Object.entries(obj).forEach(([key, value]) => this[key] = value);
    }
  }
}
