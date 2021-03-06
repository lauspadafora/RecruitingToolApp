import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    code: DS.attr('string'),
    body: DS.attr('string'),
    category: DS.belongsTo('category', { async: true }),
    answertype: DS.belongsTo('answertype', { async: true }),
    answers: DS.hasMany('answer', { async: true }),
    created_at: DS.attr('string'),
 	created_by: DS.attr('string'),
 	updated_at: DS.attr('string'),
 	updated_by: DS.attr('string'),
 	deleted_at: DS.attr('string'),
 	deleted_by: DS.attr('string')
});
