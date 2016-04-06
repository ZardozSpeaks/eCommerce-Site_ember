import Ember from 'ember';

export default Ember.Component.extend({
  updateCategoryForm: false,
  actions: {
    updateCategoryForm(){
      this.set('updateCategoryForm', true);
    },
    updateCategory(category){
      var params = {
        title: this.get('title'),
        image: this.get('image')
      };
      this.set('updateCategoryForm', false);
      this.sendAction('update', category, params);
    },
  }
});
