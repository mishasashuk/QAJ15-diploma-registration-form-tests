import { expect } from 'chai';
import { RegistrationForm } from '../src/RegistrationForm.js';

describe('RegistrationForm Positive Tests', () => {
  const form = new RegistrationForm();

  it('should validate correct first name', () => {
    expect(form.validateFirstName('John')).to.be.true;
  });

  it('should validate correct last name', () => {
    expect(form.validateLastName('Smith')).to.be.true;
  });

  it('should validate correct email', () => {
    expect(form.validateEmail('test@gmail.com')).to.be.true;
  });

  it('should validate correct password', () => {
    expect(form.validatePassword('Password1')).to.be.true;
  });

  it('should validate matching passwords', () => {
    expect(
      form.validateConfirmPassword(
        'Password1',
        'Password1'
      )
    ).to.be.true;
  });

  it('should validate correct phone number', () => {
    expect(form.validatePhone('+12345678901')).to.be.true;
  });

  it('should validate correct age', () => {
    expect(form.validateAge(25)).to.be.true;
  });

  it('should validate accepted terms', () => {
    expect(form.validateTermsAccepted(true)).to.be.true;
  });

  it('should validate complete correct form', () => {
    const result = form.validateForm({
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@gmail.com',
      password: 'Password1',
      confirmPassword: 'Password1',
      phone: '+12345678901',
      age: 30,
      termsAccepted: true
    });

    expect(result).to.be.true;
  });

  it('should validate first name with russian letters', () => {
    expect(form.validateFirstName('Иван')).to.be.true;
  });

  it('should validate last name with russian letters', () => {
    expect(form.validateLastName('Петров')).to.be.true;
  });

  it('should validate minimum allowed age', () => {
    expect(form.validateAge(18)).to.be.true;
  });

  it('should validate maximum allowed age', () => {
    expect(form.validateAge(100)).to.be.true;
  });

  it('should validate phone without plus', () => {
    expect(form.validatePhone('1234567890')).to.be.true;
  });

  it('should validate password with multiple numbers', () => {
    expect(form.validatePassword('StrongPass123')).to.be.true;
  });
});