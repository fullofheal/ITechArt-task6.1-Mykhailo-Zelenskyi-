// # Chain of Responsibility

// Implement methods which possible call for array variable in chain.

class ChainOfResponsibility {

  constructor(array) {
    this.array = array ? array : []
  }

  addElement(...elements) {
    this.array.push(...elements);
    return this;
  }

  reverse() {
    // // custom implementation
    // let reverseArray = [];
    // for(let i = this.array.length - 1; i >= 0; i--) {
    //   reverseArray.push(this.array[i])
    // }
    // this.array = reverseArray;

    // // short implementation
    this.array = this.array.reverse();
    return this;
  }

  flatArray() {
    let flatArray = [].concat(...this.array);
    this.array = flatArray;
    return this;
  }

  value() {
    return this.array;
  }
}

const smallChain = new ChainOfResponsibility([1, 2, 3]);

console.log(smallChain.addElement('element', 2).reverse().addElement(['array', 'element', 1]).flatArray().value());