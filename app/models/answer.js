import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    body: DS.attr('string'),
    is_correct: DS.attr('boolean'),
    question: DS.belongsTo('question', { async: true }),
    created_at: DS.attr('string'),
 	created_by: DS.attr('string'),
 	updated_at: DS.attr('string'),
 	updated_by: DS.attr('string'),
 	deleted_at: DS.attr('string'),
 	deleted_by: DS.attr('string')
});
