export default class LoginRequestDTO {
  public email: string;
  public password: string;

  public constructor() {
    this.email = "";
    this.password = "";
  }
}
