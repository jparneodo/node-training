/**
 *
 */
class Pet {
  constructor() {
    /**
     * @member {Integer} id
     */
    this.id = undefined;
    /**
     * @member {module:model/Category} category
     */
    this.category = undefined;
    /**
     * @member {String} name
     */
    this.name = undefined;
    /**
     * @member {Array.<String>} photoUrls
     */
    this.photoUrls = undefined;
    /**
     * @member {Array.<module:model/Tag>} tags
     */
    this.tags = undefined;
    /**
     * pet status in the store
     * @member {module:model/Pet.StatusEnum} status
     */
    this.status = undefined;
  }
  static fromJson(data) {
    const dataType = typeof data;
    if (typeof data !== 'object') {
      throw Error('json expected, found ' + dataType);
    }
    const pet = new Pet();
    pet.id = data.id;
    pet.category = data.category;
    pet.name = data.name;
    pet.photoUrls = data.photoUrls;
    pet.tags = data.tags;
    pet.status = data.status;
    return pet;
  }
}

module.exports = Pet;
