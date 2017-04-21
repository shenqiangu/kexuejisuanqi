var jisuanqi = require('./index')

console.log(jisuanqi.add(1, 2))
console.log(jisuanqi.kexue('2+2*2'))

require('mathjs').eval = undefined

try {
    console.log(jisuanqi.kexue('3+3'));
} catch (err) {
    console.error(err)
}

var kexue = require('./dist/jisuanqi.js')
console.log(kexue.kexue('1+1*6'))
