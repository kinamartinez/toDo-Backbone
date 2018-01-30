/**
 * Created by kinamartinez on 1/8/18.
 */
/* eslint-disable no-console */
const TodoItemsView = Backbone.View.extend({
    tagName: 'ul',
    id: 'toDoItemsCollection',
    events: {
        'click #add': 'onClickAdd',
        'keypress #addingToDoInput': 'onAddWithEnterKey',

    },
    initialize: function (options) {

        this.ItemsCollection = this.model;
        console.log(this.model);
        if (!(options && options.model)) {
            throw new Error('model is not specified!!');
        }

        this.listenTo(this.ItemsCollection, 'add', this.onAddTodoItem, this);
        this.listenTo(this.ItemsCollection, 'remove', this.onRemoveItem, this);


    },
    onRemoveItem: function (itemToRemove) {
    this.$('li#'+ itemToRemove.id).remove();
    },
    onAddWithEnterKey: function (event) {
        if (event.keyCode === 13) {
            this.onClickAdd();
        }
    },
    onAddTodoItem: function (itemToAdd) {
        const newView = new TodoItemView({model: itemToAdd});
        this.$el.append(newView.render().$el);
    },
    onClickAdd: function () {
        const inputAddValue = this.$('#addingToDoInput');

        if(inputAddValue.val()){
            const itemToAdd = new TodoItemModel({'title': inputAddValue.val()});
            itemToAdd.save();
            this.ItemsCollection.add(itemToAdd);

            inputAddValue.val('');
        }
    },

    render: function () {
        const self = this;

        this.$el.append('<input type="text" id="addingToDoInput"/>');
        this.$el.append('<button id="add">Add a Todo</button>');

        this.ItemsCollection.each(function (todoItem) {
            const newView = new TodoItemView({model: todoItem});
            self.$el.append(newView.render().$el);
        });

        return this;
    },
});