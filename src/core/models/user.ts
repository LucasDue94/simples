export class User {
  username!: string;
  password!: string;

  constructor(obj?: {}) {
    if (obj) {
      Object.keys(obj).forEach(([key, value]) => this[key] = value);
    }
  }
}
