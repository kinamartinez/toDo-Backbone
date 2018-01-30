/**
 * Created by kinamartinez on 1/8/18.
 */
/* eslint-disable no-console */
let TodoItemModel = Backbone.Model.extend({
    urlRoot: 'https://jsonplaceholder.typicode.com/todos',
    defaults: {
      completed: false,
    },
    validate: function (attributes) {
        if (!attributes.title) {
            return ('Title is required!.');
        }
    },

    toggleFun: function () {
        this.set('completed', !this.get('completed'));
    },
});
