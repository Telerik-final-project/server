/* globals Buffer*/

const bcrypt = require('bcrypt');
const crypto = require('crypto');

const algorithm = 'aes-128-ctr';
const key = new Buffer('9vApxLk5G3PAsJrM', 'utf8');
const iv = new Buffer('FnJL7EDzjqWjcaY9', 'utf8');

class Cryptography {
    constructor() {}
    /**
     * @description Compares the plain text password with a hashed one
     * @param {Number|string} user Usually a user_id should be passed
     * @param {string} survey The survey name
     * @param {Number} date
     * @return {string} The encrypted combination of the arguments
     */
    static encrypt(user, survey, date = null) {
        let text;
        if (date) {
            text = user + '&&' + survey + '&&' + date;
        } else {
            text = user + '&&' + survey;
        }
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    /**
     * @description Decrypts a given string
     * @param {string} text
     * @return {string} Decrypted string
     */
    static decrypt(text) {
        try {
            const decipher = crypto.createDecipheriv(algorithm, key, iv);
            let dec = decipher.update(text, 'hex', 'utf8');
            dec += decipher.final('utf8');
            return dec;
        } catch (err) {
            throw err;
        }
    }

    /**
     * @description Takes a password in plain text and hashes it
     * @param {string} password
     * @return {Promise<string>} Hashed password
     */
    static hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    /**
     * @description Compares the plain text password with a hashed one
     * @param {string} password Password in plain text
     * @param {string} hash Hashed password
     * @return {Promise<boolean>} True if the passwords are the same.
     * False if the passwords are different
     */
    static comparePasswords(password, hash) {
        return bcrypt.compare(password, hash);
    }
}

module.exports = Cryptography;
