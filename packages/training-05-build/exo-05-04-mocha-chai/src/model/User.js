/**
 *
 */
class User {
  constructor() {
    /**
     * @member {Integer} id
     */
    this.id = undefined;
    /**
     * @member {String} name
     */
    this.username = undefined;
  }
  static fromJson(data) {
    const dataType = typeof data;
    if (typeof data !== 'object') {
      throw Error('json expected, found ' + dataType);
    }
    const user = new User();
    user.id = data.id;
    user.username = data.username;
    return user;
  }
}

module.exports = User;
