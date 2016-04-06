import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  addItem(item) {
    this.get('items').pushObject(item);
    this.addCost(item.price);
  },

  removeItem(item) {
    this.get('items').removeObject(item);
    this.subtractCost(item.price);
  },

  addCost(price) {
    this.set('total',(this.get('total') + price));
  },

  subtractCost(price) {
    this.set('total', (this.get('total') - price));
  }

});
