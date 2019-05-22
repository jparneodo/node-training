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
  fromJson(data) {
    assert(typeof data === 'object', 'Pet in json');
    this.id = data.id;
    this.category = data.category;
    this.name = data.name;
    this.photoUrls = data.photoUrls;
    this.tags = data.tags;
    this.status = data.status;
  }
}

module.exports = Pet;
