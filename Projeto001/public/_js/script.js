angular.module('app',[]);
angular.module('app').controller('ctrl', function ($scope){
  $scope.livros = [];

  $scope.addLivro =  function (livro) {
    $scope.livros.push(angular.copy(livro));
  }
});
