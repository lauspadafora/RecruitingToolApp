import Ember from 'ember';

export default Ember.Controller.extend({   
    name: '',    
    short: '',
    nameIsValid: Ember.computed.empty('model.name'),
    shortIsValid: Ember.computed.empty('model.short'),
    isDisabled: Ember.computed.or('nameIsValid', 'shortIsValid')    
});
