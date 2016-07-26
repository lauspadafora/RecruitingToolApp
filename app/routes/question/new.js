import Ember from 'ember';

export default Ember.Route.extend({
    model() {        
    	return this.store.createRecord('question');
	},

    actions: {
        saveQuestion(newQuestion) {            
			/*newQuestion.set('created_at', new Date().toLocaleString());
			newQuestion.set('created_by', 'admin');
			newQuestion.set('updated_at', new Date().toLocaleString());
			newQuestion.set('updated_by', 'admin');
            
            var newCategory = this.store.createRecord('category', {
                name: 'SDASDASDASD',
                short: 'ASDASDSDFSDF'
            });

            var newAnswerType = this.store.createRecord('answertype', {
                name: 'SDASDASDASD',
                short: 'ASDASDSDFSDF'
            });

            newCategory.get('questions').addObject(newQuestion);
            newAnswerType.get('questions').addObject(newQuestion);
            
            newQuestion.save().then(function() {
                newCategory.save();
                newAnswerType.save();
            });*/

            /*newQuestion.set('created_at', new Date().toLocaleString());
			newQuestion.set('created_by', 'admin');
			newQuestion.set('updated_at', new Date().toLocaleString());
			newQuestion.set('updated_by', 'admin');  
            
            let self = this;
            
            this.store.findRecord('category', '-KNJC2anvx_DO0dqigOz').then(category => {
                category.get('questions').addObject(newQuestion).then(() => {
                    self.store.findRecord('answertype', '-KNJCA6cAK7E0p5U4lPj').then(answertype => {
                        answertype.get('questions').addObject(newQuestion).then(() => {
                            newQuestion.save().then(() => { 
                                self.store.findRecord('category', '-KNJC2anvx_DO0dqigOz').then(category => {
                                    category.save();
                                });
                                self.store.findRecord('answertype', '-KNJCA6cAK7E0p5U4lPj').then(answertype => {
                                    answertype.save();
                                });
                            });  
                        });
                    });
                });
            }); */

            newQuestion.set('created_at', new Date().toLocaleString());
			newQuestion.set('created_by', 'admin');
			newQuestion.set('updated_at', new Date().toLocaleString());
			newQuestion.set('updated_by', 'admin');  
            
            let self = this;
            var category = null;
            var answertype = null;
            
            this.store.findRecord('category', '-KNJC2anvx_DO0dqigOz').then(c => {
                category = c;
                category.get('questions').addObject(newQuestion).then(() => {
                    self.store.findRecord('answertype', '-KNJCA6cAK7E0p5U4lPj').then(at => {
                        answertype = at;
                        answertype.get('questions').addObject(newQuestion).then(() => {
                            newQuestion.save().then(() => { 
                                category.save();
                                answertype.save();
                                //this.store.unloadRecord(newQuestion);
	    		                this.transitionTo('question.index'); 
                            });  
                        });
                    });
                });
            });  
        }
    }
});
