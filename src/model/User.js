export default class User {
  constructor(username, password, password2, name, address, role, token, id) {
    this.username = username;
    this.password = password;
    this.password2 = password2;
    this.name = name;
    this.address = address;
    this.role = role;
    this.token = token;
    this.id = id;
  }
}
