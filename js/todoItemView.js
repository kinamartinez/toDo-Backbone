/**
 * Created by kinamartinez on 1/8/18.
 */
/* eslint-disable no-console */
const TodoItemView = Backbone.View.extend({
    tagName: 'li',

    events: {
        'click #toggle': 'onToggle',
        'click #deleteBtn':'onDelete',
    },

    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified!!');
        }
        this.ToDoItemModel = this.model;
        this.ToDoItemModel.on('change', this.render, this);
    },
    onDelete: function () {
      this.ToDoItemModel.destroy();
    },
    onToggle: function () {
    this.ToDoItemModel.toggleFun();
    this.ToDoItemModel.save();
    console.log('The Model', this.ToDoItemModel.toJSON());
    },
    render: function () {

        this.$el.attr('id', this.ToDoItemModel.id);
        this.$el.toggleClass('completed',this.ToDoItemModel.get('completed'));
        const checked = this.ToDoItemModel.get('completed') ? 'checked' : "";

// en lugar de usar el "this.model.get" estamos usando "this.model.escape" para evitar que alguien pueda hackear el sistema xss problem

        this.$el.html('<input id="toggle" type="checkbox"'+checked+'/>'+this.model.escape('title')+'<button id="deleteBtn">Delete</button>');
        return this;
    },
});









