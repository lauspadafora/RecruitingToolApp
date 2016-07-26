import Ember from 'ember';

export default Ember.Route.extend({
    model() {        
    	return this.store.createRecord('answertype');
	},

    actions: {
        saveAnswerType(newAnswerType) {            
			newAnswerType.set('created_at', new Date().toLocaleString());
			newAnswerType.set('created_by', 'admin');
			newAnswerType.set('updated_at', new Date().toLocaleString());
			newAnswerType.set('updated_by', 'admin');
			newAnswerType.save().then(() => { 
	    		this.store.unloadRecord(newAnswerType);
	    		this.transitionTo('answertype.index'); 
	    	});    	     	     	
        }
    }
});
