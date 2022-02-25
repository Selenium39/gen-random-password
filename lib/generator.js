class PasswordGenerator {
  constructor () {
    this._number = '0123456789'
    this._uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this._lowercases = 'abcdefghijklmnopqrstuvwxyz'
  }

  generate (len, ...chars) {
    if (!Number.isInteger(len)) throw new Error('password length is not an integer')
    let password = ''
    chars = Array.from(chars.join(''))
    for (let i = 0; i < len; i++) {
      password += chars[Math.floor(Math.random() * chars.length)]
    }
    return password
  }

  generateNumber (len) {
    return this.generate(len, this._number)
  }

  generateUppercase (len) {
    return this.generate(len, this._uppercases)
  }

  generateLowercase (len) {
    return this.generate(len, this._lowercases)
  }

  generateMixed (len) {
    return this.generate(len, this._number, this._uppercases, this._lowercases)
  }
}

module.exports = new PasswordGenerator()
