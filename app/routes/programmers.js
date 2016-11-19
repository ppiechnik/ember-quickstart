import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Dennis Ritchie', 'Brendan Eich', 'Rasmus Lerdorf'];
    }    
});
