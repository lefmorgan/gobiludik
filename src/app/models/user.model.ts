export interface UserI {
  id?: number;
  username: string;
  email: string;
  password: string;
  avatar: string;
}

export class User implements UserI {
  id?: number;
  username = '';
  email = '';
  password = '';
  avatar = '';

  constructor(object: UserI | {} = {}) {
    Object.assign(this, object);
  }
}
