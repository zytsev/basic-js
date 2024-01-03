const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      value = ' ';
    }
    this.res.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position > this.res.length - 1) {
      this.res = []
      throw new Error("You can\'t remove incorrect link!")
    }
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;

  },
  finishChain() {
    let finish = this.res;
    this.res = []
    return finish.join('~~');
  }
};

module.exports = {
  chainMaker
};
