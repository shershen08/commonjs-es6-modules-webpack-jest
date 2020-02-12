import {adder, adderIfEven} from './utils.js';
import {AppLoader} from './app.js';

// test('should add two numbers', () => {
//     const received = 1 + 4;
//     const expected = 5;
//     expect(received).toBe(expected);
//   })

describe("all tests in our app 1", () => {

  test('adder', () => {
    expect(adder(2,2)).toBe(4);
  })

})


describe("all tests in our app 2", () => {

  test('adderIfEven', () => {
    expect(adderIfEven(1,2)).toBe(0);
    expect(adderIfEven(2,2)).toBe(4);
  })

})

  test('AppLoader class', () => {
    const al = new AppLoader();
    expect(al.loaded).toBeFalsy();
    al.setLoaded()
    expect(al.loaded).toBeTruthy();
  })

  