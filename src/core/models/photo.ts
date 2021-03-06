export class Photo {
  id!: number;
  ambumId!: number;
  title!: string;
  url!: string;
  thumbnailUrl!: string;

  constructor(obj?: {}) {
    if (obj) {
      // @ts-ignore
      Object.entries(obj).forEach(([key, value]) => this[key] = value);
    }
  }
}
