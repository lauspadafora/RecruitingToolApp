import Ember from 'ember';

export default Ember.Controller.extend({
    firebaseApp: Ember.inject.service(),
    actions: {
        signUp() {
            let controller = this;

            const auth = this.get('firebaseApp').auth();
            auth.createUserWithEmailAndPassword(controller.get('email'), controller.get('password')).then((newUser) => {
                this.store.createRecord('user', {
                    id: newUser.uid,
                    email: newUser.email,
                    fullname: controller.get('fullname')
                }).save().then(() => {
                    controller.transitionToRoute('sign-in');
                });                
            });
        }
    }
});
