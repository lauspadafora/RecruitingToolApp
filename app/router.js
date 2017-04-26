import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('index', { path: '/' });
  this.authenticatedRoute('question', function() {
    this.authenticatedRoute('new');
    this.authenticatedRoute('show', { path: '/show/:id' });
    this.authenticatedRoute('edit', { path: '/edit/:id' });
    this.authenticatedRoute('addAnswers', { path: '/addAnswers/:id' });
    
  });
  this.authenticatedRoute('category', function() {
    this.authenticatedRoute('new');
    this.authenticatedRoute('show', { path: '/show/:id' });
    this.authenticatedRoute('edit', { path: '/edit/:id' });
  });
  this.authenticatedRoute('answertype', function() {
    this.authenticatedRoute('new');
    this.authenticatedRoute('show', { path: '/show/:id' });
    this.authenticatedRoute('edit', { path: '/edit/:id' });
  });
  this.route('sign-in');
  this.route('sign-up');
});

export default Router;
