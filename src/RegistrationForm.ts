export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  age: number;
  termsAccepted: boolean;
}

export class RegistrationForm {
  validateFirstName(firstName: string): boolean {
    return /^[A-Za-zА-Яа-яЁё]{2,30}$/.test(firstName);
  }

  validateLastName(lastName: string): boolean {
    return /^[A-Za-zА-Яа-яЁё]{2,30}$/.test(lastName);
  }

  validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  validatePassword(password: string): boolean {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password);
  }

  validateConfirmPassword(
    password: string,
    confirmPassword: string
  ): boolean {
    return password === confirmPassword;
  }

  validatePhone(phone: string): boolean {
    return /^\+?[0-9]{10,15}$/.test(phone);
  }

  validateAge(age: number): boolean {
    return Number.isInteger(age) && age >= 18 && age <= 100;
  }

  validateTermsAccepted(termsAccepted: boolean): boolean {
    return termsAccepted === true;
  }

  validateForm(data: RegistrationFormData): boolean {
    return (
      this.validateFirstName(data.firstName) &&
      this.validateLastName(data.lastName) &&
      this.validateEmail(data.email) &&
      this.validatePassword(data.password) &&
      this.validateConfirmPassword(
        data.password,
        data.confirmPassword
      ) &&
      this.validatePhone(data.phone) &&
      this.validateAge(data.age) &&
      this.validateTermsAccepted(data.termsAccepted)
    );
  }
}