'use strict';

// Tools
let { expect } = require('chai');

// Models
let Pet = require('../src/model/Pet');

describe('Pet', function() {
  it('should create an instance of Pet', function() {
    var instance = new Pet();
    expect(instance).to.be.instanceof(Pet);
  });

  it('should have the property id (base name: "id") undefined (to.have.property)', function() {
    var instance = new Pet();
    expect(instance).to.have.property('id').with.undefined;
  });

  it('should have the property id (base name: "id") (to.have.own.property)', function() {
    var instance = new Pet();
    expect(instance).to.have.own.property('id').with.undefined;
  });

  it('should have the property id (base name: "id") with a value', function() {
    var instance = new Pet();
    instance.fromJson({ id: 1, name: 'Laïka' });
    expect(instance)
      .to.have.property('id')
      .to.equal(1);
  });
});
