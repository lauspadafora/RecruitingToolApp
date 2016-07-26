import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', function() {
    this.route('new');
    this.route('show', { path: '/show/:id' });
    this.route('edit', { path: '/edit/:id' });
  });
  this.route('category', function() {
    this.route('new');
    this.route('show', { path: '/show/:id' });
    this.route('edit', { path: '/edit/:id' });
  });
  this.route('answertype', function() {
    this.route('new');
    this.route('show', { path: '/show/:id' });
    this.route('edit', { path: '/edit/:id' });
  });
});

export default Router;
