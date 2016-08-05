import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        selectCategory(val) {
		    console.log("Question Component Category");
            console.log(val);
            this.sendAction('selectCategory', val);
        },

        selectAnswerType(val) {
		    console.log("Question Component AnswerType");
            console.log(val);
            this.sendAction('selectAnswerType', val);
        },

        saveQuestion(val) {		   
            this.sendAction('saveQuestion', val);
        },
    }
});
