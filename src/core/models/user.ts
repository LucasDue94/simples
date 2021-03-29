export class User {
  username!: string;
  password!: string;

  constructor(obj?: {}) {
    if (obj) {
      // @ts-ignore
      Object.keys(obj).forEach(([key, value]) => this[key] = value);
    }
  }
}
