import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    	return this.store.findAll('answertype');
   	},

	actions: {
		deleteAnswerType(answertype) {	    	
			answertype.deleteRecord();
			answertype.save().then(() => this.transitionTo('answertype.index'));
		}
  	}	
});
