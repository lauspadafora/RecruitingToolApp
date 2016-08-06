import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signOut() {
            console.log("Logging out...");
            let self = this;
            self.get('session').close().then(() => {
                console.log("Session closed...");
                self.transitionToRoute('sign-in');
            });            
        }
    }
});
