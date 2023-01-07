import { getRandomName, getRandomEmail, getRandomPassword } from '../data-providers';

class User {
  constructor({
    name,
    email,
    password,
    confirmPassword = password,
  } = {}) {
    this.name = name || getRandomName();
    this.email = email || getRandomEmail();
    this.password = password || getRandomPassword();
    this.confirmPassword = confirmPassword;
  }
}

export default User;
