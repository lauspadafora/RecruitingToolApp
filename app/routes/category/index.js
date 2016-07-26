import Ember from 'ember';

export default Ember.Route.extend({
    model() {
		return this.store.findAll('category');
   	},

	actions: {
		deleteCategory(category) {	    	
			category.deleteRecord();
			category.save().then(() => this.transitionTo('category.index'));
		}
  	}		
});
