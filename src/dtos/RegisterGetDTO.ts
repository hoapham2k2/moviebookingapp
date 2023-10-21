export default class RegisterGetDTO {
  public id: string;
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public phone: string;

  constructor() {
    this.id = "";
    this.email = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
    this.phone = "";
  }
}
