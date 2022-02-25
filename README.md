<h1 align="center">Welcome to gen-random-password 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> A easy library for generating random passwords

## Usage

the first param is the length of password
```javascript
const gen = require('gen-random-password')

// generate pure number password
gen.generateNumber(8) // 13848247

// generate pure uppercases password
gen.generateUppercase(8) // DXJPKJAM 

// generate pure lowercases password
gen.generateLowercase(8) // usnqbdoh

// generate mixed(`number`+`uppercases`+`lowercases`) password
gen.generateMixed(8) // 8WjrsEeH

// generate custom password by internal chars and custom chars
gen.generate(8, gen._number, gen._lowercases, gen._uppercases, '!@#$%^&*()_+') //T7J!1W29

```

## Author

👤 **Selenium39**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_