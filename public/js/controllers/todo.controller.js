(function(){
  angular.module('MEANTodos') //Getter syntax
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];
    
    function TodoController($scope, TodoService){
      $scope.todos = [];
      $scope.newTodo= {};
      $scope.getTodos = getTodos;
      $scope.addTodo = addTodo;
      $scope.deleteTodo = deleteTodo;

      function deleteTodo(todo){
        TodoService.delete(todo)
                    .then(function(response){
                      getTodos();
                    });
      }

      function addTodo(newTodo){
        console.log('Creating a new todo...');
        TodoService.create(newTodo)
                    .then(function(response){
                      getTodos();
                    });
      }

      function getTodos(){
        console.log($scope.todos);
        console.log('Getting the todos...');
        TodoService.getAll()
                    .then(function(response){
                      $scope.todos = response.data.todos;
                    });
      }

    }
  })();
