import addTwoNumbers from './addTwoNumbers';

/*
 * Describe method is one of what jest calls Globals methods, 
 * which you don't have to import * or require to use. The describe statement, 
 * in particular, is used to group similar test together.
*/
describe('test addTwoNumbers function', () => {

    /*
    * test or it functions are the bread and butter though. This is the function 
    * that actually runs your tests. According to Jest's documentation, the 
    * first argument is the name of the test, the second argument is the 
    * callback where you add your testing logic (assertions, etc.), and the third argument, 
    * which is optional, is the time out.
    * The test function also has an alias that can be used interchangeably 
    * it(): it('test', () => {})
    */
  it('with params 1 and 2', () => {
    expect(addTwoNumbers(1,2)).toBe(3)
  })

  it('with params 2 and 2', () => {
    expect(addTwoNumbers(2,2)).toBe(4)
  })
})
