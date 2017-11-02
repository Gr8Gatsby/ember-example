import Route from '@ember/routing/route';
import Ember from 'ember';
import fetch from 'ember-fetch/ajax';

export default Route.extend({
    model(){
        return fetch('https://api.github.com/users/gr8gatsby')
            .then(function(response){
                return response;
            })
    }
});
