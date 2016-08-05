import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
    	return this.store.findRecord('answertype', params.id);
  	},

	setupController: function(controller, model) {
		this._super(controller, model);
    	controller.set('buttonLabel', 'Save');
  	},

    actions: {
        updateAnswerType(answertype) {
			if (answertype.get('short').length >= 4) {          
				answertype.set('updated_at', new Date().toLocaleString());
				answertype.set('updated_by', 'admin');
				answertype.save().then(() => { 
					this.store.unloadRecord(answertype);
					this.transitionTo('answertype.index'); 
				});    	     	     	
			}
			else {
				this.set('responseMessage', 'Please ensure all required fields are complete and all completed fields are valid.');
			}
        }
    }
});
