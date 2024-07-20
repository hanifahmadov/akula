/* exlint-disable */

/**
 *  [A-z] Starts with a letter (uppercase or lowercase)
 *  {3,23} containes characters between  3 < char < 23 
 *  [A-z0-9-_] can contains letters and can use //:[ _ , -]
 */
export const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;


/**
 *  Must be between 8 and 24 characters long {8,24}
 *  At least one lowercase letter is required (?=.*[a-z])
 *  At least one uppercase letter is required (?=.*[A-Z])
 *  At least one digit (0-9) is required (?=.*[0-9])
 *  At least one special character from the set  is required (?=.*[!@#$%]) //: [ !, @, #, $, % ] 
 * 
 */
export const PWD_REGEX = /^.{5,25}$/; 




/** 
 *  Email name can contains [ ".", "_", "%", "+", and "-" ]
 *  Must be between 2 and 63 characters long {2,63}
 *  Must include the at symbol
 *  Must include a literal dot (period) like: gmail.com
 *  At least one special character from the set ! @ # $ %
 *  Length of the password must be between 8 and 24 characters
 * 
 * */ 
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]{2,30}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/