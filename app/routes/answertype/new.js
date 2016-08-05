import Ember from 'ember';

export default Ember.Route.extend({
    model() {        
    	return this.store.createRecord('answertype');
	},

	setupController: function(controller, model) {
		this._super(controller, model);
    	controller.set('buttonLabel', 'Save');
  	},

    actions: {
        saveAnswerType(newAnswerType) { 
			if (newAnswerType.get('short').length >= 4) {                 
				newAnswerType.set('created_at', new Date().toLocaleString());
				newAnswerType.set('created_by', 'admin');
				newAnswerType.set('updated_at', new Date().toLocaleString());
				newAnswerType.set('updated_by', 'admin');
				newAnswerType.save().then(() => { 
					this.store.unloadRecord(newAnswerType);
					this.transitionTo('answertype.index'); 
				});    	    
			}
			else {
				this.set('responseMessage', 'Please ensure all required fields are complete and all completed fields are valid.');
			} 	     	
        }
    }
});
