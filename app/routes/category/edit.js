import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
    	return this.store.findRecord('category', params.id);
  	},

    actions: {
        saveCategory(category) {
			category.set('updated_at', new Date().toLocaleString());
			category.set('updated_by', 'admin');
			category.save().then(() => { 
	    		this.store.unloadRecord(category);
	    		this.transitionTo('category.index'); 
	    	});    	     	     	
        }
    }
});
