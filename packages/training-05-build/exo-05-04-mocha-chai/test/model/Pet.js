'use strict';

// Tools
let { expect } = require('chai');

// Models
let Pet = require('../../src/model/Pet');

describe('Model Pet', function() {
  const pet1 = new Pet();
  const pet2 = Pet.fromJson({ id: 1, name: 'Laïka' });

  it('should create an instance of Pet [expect().to.be.instanceof()]', function() {
    expect(pet1).to.be.instanceof(Pet);
  });

  it('should have the property id undefined [expect().to.have.own.property().with.undefined]', function() {
    expect(pet1).to.have.property('id').with.undefined;
  });

  it('should have the property id [expect().to.have.own.property().with.undefined]', function() {
    expect(pet1).to.have.own.property('id').with.undefined;
  });

  it('should have the properties with a value [expect().to.have.property().to.equal()]', function() {
    expect(pet2)
      .to.have.property('id')
      .to.equal(1);
    expect(pet2)
      .to.have.property('name')
      .to.equal('Laïka');
  });
});
