export class User {
    public username: string;
    public password: string;
    public token: string;
    public message: string;

  public constructor(username: string, password: string, token: string, message: string) {
    this.username = username;
    this.password = password;
    this.token = token;
    this.message = message;
  }
}

