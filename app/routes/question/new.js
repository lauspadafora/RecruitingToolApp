import Ember from 'ember';

export default Ember.Route.extend({    
    category: null,
    answertype: null,

    model() {        
    	return Ember.RSVP.hash({
			question: this.store.createRecord('question'),
			categorias: this.store.findAll('category'),
			tiposrespuestas: this.store.findAll('answertype'),
		});    	
	},

    setupController: function(controller, model) {
		this._super(controller, model);
    	controller.set('buttonLabel', 'Save');
  	},

    actions: {
        selectCategory(val) {
			console.log("Question Route Category");
         	console.log(val);
			this.set('category', val);
      	},

        selectAnswerType(val) {
			console.log("Question Route AnswerType");
         	console.log(val);
			this.set('answertype', val);
      	},
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
            let category = null;
            let answertype = null;

            self.store.findRecord('category', self.get('category')).then(c => {
                category = c;
                category.get('questions').addObject(newQuestion).then(() => {
                    self.store.findRecord('answertype', self.get('answertype')).then(at => {
                        answertype = at;
                        answertype.get('questions').addObject(newQuestion).then(() => {
                            newQuestion.save().then(() => { 
                                category.save().then(() => {
                                    answertype.save().then(() => {
                                        //this.store.unloadRecord(newQuestion);
                                        self.transitionTo('question.index');
                                    });
                                });
                            });  
                        });
                    });
                });
            }); 
        }
    }
});
