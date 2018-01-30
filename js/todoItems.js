/**
 * Created by kinamartinez on 1/8/18.
 */
/* eslint-disable no-console */
const TodoItemsCollection = Backbone.Collection.extend({
    url: 'https://jsonplaceholder.typicode.com/todos',
    Model: TodoItemModel,
});