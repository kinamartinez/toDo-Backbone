/* eslint-disable no-console */
$(document).ready(function () {

    const todoItems = new TodoItemsCollection(
    //     [
    //     new TodoItemModel({id: 1, description: 'Item Nuevo'}),
    //     new TodoItemModel({id: 2, description: 'Item Nuevo 2'}),
    // ]

        // fetch cuando traemos desde el server

    );
    todoItems.fetch();


    const todoItemsView = new TodoItemsView({model: todoItems});
    $('.container').append(todoItemsView.render().$el);
});