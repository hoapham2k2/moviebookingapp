export default class RegisterRequestDTO {
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public phone: string;

  constructor() {
    this.email = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
    this.phone = "";
  }
}
