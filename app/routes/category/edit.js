import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
    	return this.store.findRecord('category', params.id);
  	},

	setupController: function(controller, model) {
		this._super(controller, model);
    	controller.set('buttonLabel', 'Save');
  	},

    actions: {
        updateCategory(category) {
			if (category.get('short').length >= 4) {     
				category.set('updated_at', new Date().toLocaleString());
				category.set('updated_by', 'admin');
				category.save().then(() => { 
					this.store.unloadRecord(category);
					this.transitionTo('category.index'); 
				});    	    
			} 
			else {
				this.set('responseMessage', 'Please ensure all required fields are complete and all completed fields are valid.');
			}	     	
        }
    }
});
