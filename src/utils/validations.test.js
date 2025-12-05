import { describe, it, expect } from 'vitest';
import { validateName, validateEmail, validatePhone, validateGuestCount } from './validations';

describe('Form Validations', () => {
  // ============ NAME VALIDATION TESTS ============
  describe('validateName', () => {
    it('should return error for empty name', () => {
      expect(validateName('')).toBe('Name is required');
      expect(validateName('   ')).toBe('Name is required');
    });

    it('should accept valid names with letters only', () => {
      expect(validateName('John')).toBe('');
      expect(validateName('John Doe')).toBe('');
      expect(validateName('Mary Jane Watson')).toBe('');
    });

    it('should accept names with spaces', () => {
      expect(validateName('John Doe')).toBe('');
      expect(validateName('J Doe')).toBe('');
    });

    it('should reject names with numbers', () => {
      expect(validateName('John123')).toBe('Name can only contain letters and spaces');
      expect(validateName('John1')).toBe('Name can only contain letters and spaces');
    });

    it('should reject names with special characters', () => {
      expect(validateName('John@Doe')).toBe('Name can only contain letters and spaces');
      expect(validateName('John-Doe')).toBe('Name can only contain letters and spaces');
      expect(validateName('John_Doe')).toBe('Name can only contain letters and spaces');
    });
  });

  // ============ EMAIL VALIDATION TESTS ============
  describe('validateEmail', () => {
    it('should return error for empty email', () => {
      expect(validateEmail('')).toBe('Email is required');
      expect(validateEmail('   ')).toBe('Email is required');
    });

    it('should accept valid email addresses', () => {
      expect(validateEmail('user@example.com')).toBe('');
      expect(validateEmail('john.doe@company.co.uk')).toBe('');
      expect(validateEmail('test+tag@domain.com')).toBe('');
    });

    it('should reject invalid email formats', () => {
      expect(validateEmail('invalid.email')).toBe('Please enter a valid email address');
      expect(validateEmail('invalid@')).toBe('Please enter a valid email address');
      expect(validateEmail('@invalid.com')).toBe('Please enter a valid email address');
      expect(validateEmail('invalid@.com')).toBe('Please enter a valid email address');
    });

    it('should reject email without domain', () => {
      expect(validateEmail('user@localhost')).toBe('Please enter a valid email address');
    });
  });

  // ============ PHONE VALIDATION TESTS ============
  describe('validatePhone', () => {
    it('should return error for empty phone', () => {
      expect(validatePhone('')).toBe('Phone number is required');
      expect(validatePhone('   ')).toBe('Phone number is required');
    });

    it('should accept valid phone numbers (8-10 digits)', () => {
      expect(validatePhone('12345678')).toBe(''); // 8 digits
      expect(validatePhone('123456789')).toBe(''); // 9 digits
      expect(validatePhone('1234567890')).toBe(''); // 10 digits
    });

    it('should accept phone numbers with formatting', () => {
      expect(validatePhone('(123) 456-7890')).toBe(''); // Formatted 10 digits
      expect(validatePhone('123-456-7890')).toBe(''); // Formatted 10 digits
      expect(validatePhone('0412345678')).toBe(''); // Australian format 10 digits
    });

    it('should reject phone numbers with 7 or fewer digits', () => {
      expect(validatePhone('1234567')).toBe('Invalid phone number');
      expect(validatePhone('123')).toBe('Invalid phone number');
    });

    it('should reject phone numbers with more than 10 digits', () => {
      expect(validatePhone('12345678901')).toBe('Invalid phone number');
      expect(validatePhone('12345678901234')).toBe('Invalid phone number');
    });

    it('should reject phone numbers with letters', () => {
      expect(validatePhone('123ABC7890')).toBe('Invalid phone number');
      expect(validatePhone('phone123')).toBe('Invalid phone number');
    });
  });

  // ============ GUEST COUNT VALIDATION TESTS ============
  describe('validateGuestCount', () => {
    it('should return error for empty guest count', () => {
      expect(validateGuestCount('')).toBe('Number of guests is required');
      expect(validateGuestCount(null)).toBe('Number of guests is required');
      expect(validateGuestCount(undefined)).toBe('Number of guests is required');
    });

    it('should accept valid guest counts', () => {
      expect(validateGuestCount('1')).toBe('');
      expect(validateGuestCount('10')).toBe('');
      expect(validateGuestCount('100')).toBe('');
      expect(validateGuestCount('500')).toBe('');
    });

    it('should accept numeric guest counts', () => {
      expect(validateGuestCount(1)).toBe('');
      expect(validateGuestCount(50)).toBe('');
      expect(validateGuestCount(250)).toBe('');
    });

    it('should reject zero or negative guest counts', () => {
      expect(validateGuestCount('0')).toBe('Must have at least 1 guest');
      expect(validateGuestCount(0)).toBe('Must have at least 1 guest');
      expect(validateGuestCount('-5')).toBe('Must have at least 1 guest');
    });

    it('should reject guest counts over 500', () => {
      expect(validateGuestCount('501')).toBe('Maximum 500 guests allowed');
      expect(validateGuestCount(1000)).toBe('Maximum 500 guests allowed');
    });
  });
});
