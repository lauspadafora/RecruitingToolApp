import Ember from 'ember';

export default Ember.Route.extend({
	model() {        
    	return this.store.createRecord('category');
	},

    setupController: function(controller, model) {
		this._super(controller, model);
    	controller.set('buttonLabel', 'Save');
  	},

    actions: {
        saveCategory(newCategory) {  			
			if (newCategory.get('short').length >= 4) {      
				newCategory.set('created_at', new Date().toLocaleString());
				newCategory.set('created_by', 'admin');
				newCategory.set('updated_at', new Date().toLocaleString());
				newCategory.set('updated_by', 'admin');
				newCategory.save().then(() => { 
					this.store.unloadRecord(newCategory);
					this.transitionTo('category.index'); 
				});    	     	     	
			}
			else {
				this.set('responseMessage', 'Please ensure all required fields are complete and all completed fields are valid.');
			}
        }
    }
});
