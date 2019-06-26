'use strict';

// Tools
let { expect } = require('chai');

// Models
let User = require('../../src/model/User');

describe('Model User', function() {
  const user1 = new User();
  const user2 = User.fromJson({ id: 1, username: 'John' });

  it('should create an instance of User [expect().to.be.instanceof()]', function() {
    expect(user1).to.be.instanceof(User);
  });

  it('should have the property id undefined [expect().to.have.own.property().with.undefined]', function() {
    expect(user1).to.have.property('id').with.undefined;
  });

  it('should have the property id [expect().to.have.own.property().with.undefined]', function() {
    expect(user1).to.have.own.property('id').with.undefined;
  });

  it('should have the properties with a value [expect().to.have.property().to.equal()]', function() {
    expect(user2)
      .to.have.property('id')
      .to.equal(1);
    expect(user2)
      .to.have.property('username')
      .to.equal('Johnny');
  });
});
