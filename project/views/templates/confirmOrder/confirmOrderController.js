app.controller('confirmOrderController', ['$scope', '$ionicModal', function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/confirmOrder/confirmAddress.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
      })

      $scope.openModal = function() {
        $scope.modal.show();
      };

      $scope.closeModal = function() {
        $scope.modal.hide();
        var b = $scope.modal.isShown();
      };
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
}])