import Ember from 'ember';

export default Ember.Component.extend({
	name: '',    
	short: '',
	nameIsValid: Ember.computed.empty('category.name'),
	shortIsValid: Ember.computed.empty('category.short'),
	isDisabled: Ember.computed.or('nameIsValid', 'shortIsValid'),    
    actions: {
      buttonClicked(param) {
      		this.sendAction('action', param);
    	}
   	}
});
