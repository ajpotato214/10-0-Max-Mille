/* eslint-disable class-methods-use-this */
export default class IDynamoDBRepository {
  constructor() {
    if (this.constructor === IDynamoDBRepository) {
      throw new Error('Cannot instantiate interfaces');
    }
  }

  getTableStatus() {
    throw new Error("Method 'getTableStatus()' must be implemented.");
  }

  add() {
    throw new Error("Method 'add()' must be implemented.");
  }

  update() {
    throw new Error("Method 'update()' must be implemented.");
  }

  findOne() {
    throw new Error("Method 'findOne()' must be implemented.");
  }

  findAll() {
    throw new Error("Method 'findAll()' must be implemented.");
  }

  remove() {
    throw new Error("Method 'remove()' must be implemented.");
  }

  clear() {
    throw new Error("Method 'clear()' must be implemented.");
  }
}
