const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(name) {
    this.name = name;
  }
  encrypt(message, key) {
    if (typeof (arguments[0]) !== 'string' || arguments.length < 2 || typeof (arguments[1]) !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const MESSAGE = message.toUpperCase().split('')
    const MESSAGEclean = [];//убираем пробелы и небуквы в тексте
    MESSAGE.forEach(item => {
      if (Alphabet.includes(item)) {
        MESSAGEclean.push(item)
      }
    });

    const KEY = key.toUpperCase().split('')
    const KEYhowMSG = [];//повторяем ключ длиной как текст
    let count = 0;
    let i = 0;
    while (count < MESSAGEclean.length) {
      KEYhowMSG.push(KEY[i]);
      count++;
      i++;
      if (i === KEY.length) {
        i = 0;
      }
    }
    const ResFormula = [];//получаем ряд шифробукв по формуле C=(M+K)%26
    for (let i = 0; i < MESSAGEclean.length; i++) {
      ResFormula.push(Alphabet[(Alphabet.indexOf(MESSAGEclean[i]) + Alphabet.indexOf(KEYhowMSG[i])) % 26])
    }

    const Result = [];//пушим ряд с учетом пробелов и небукв
    let position = 0;
    MESSAGE.forEach((item) => {
      if (Alphabet.includes(item)) {
        Result.push(ResFormula[MESSAGEclean.indexOf(item, position)])
        position++;
      } else {
        Result.push(item);
      }
    })
    if (this.name === false) {
      Result.reverse();
    }
    return Result.join('');
  }


  decrypt(encryptedMessage, key) {
    if (typeof (arguments[0]) !== 'string' || arguments.length < 2 || typeof (arguments[1]) !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const MESSAGE = encryptedMessage.toUpperCase().split('')
    const MESSAGEclean = [];//убираем пробелы и небуквы в зашифрованном тексте
    MESSAGE.forEach(item => {
      if (Alphabet.includes(item)) {
        MESSAGEclean.push(item)
      }
    });

    const KEY = key.toUpperCase().split('')
    const KEYhowMSG = [];//повторяем ключ длиной как текст
    let count = 0;
    let i = 0;
    while (count < MESSAGEclean.length) {
      KEYhowMSG.push(KEY[i]);
      count++;
      i++;
      if (i === KEY.length) {
        i = 0;
      }
    }
    const ResFormula = [];//получаем ряд шифробукв по формуле C=(M-K)%26. Если разность отрицательная то по модулю 26 т.е. -х +26
    for (let i = 0; i < MESSAGEclean.length; i++) {
      let resMod = (Alphabet.indexOf(MESSAGEclean[i]) - Alphabet.indexOf(KEYhowMSG[i]));
      if (resMod < 0) {
        resMod = resMod + 26;
      }
      ResFormula.push(Alphabet[resMod % 26])
    }

    const Result = [];//пушим ряд с учетом пробелов и небукв
    let position = 0;
    MESSAGE.forEach((item) => {
      if (Alphabet.includes(item)) {
        Result.push(ResFormula[MESSAGEclean.indexOf(item, position)])
        position++;
      } else {
        Result.push(item);
      }
    })
    if (this.name === false) {
      Result.reverse();
    }
    return Result.join('');
  }

}
module.exports = {
  VigenereCipheringMachine
};
