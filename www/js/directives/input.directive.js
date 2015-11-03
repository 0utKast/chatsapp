angular
  .module('whatsapp')
  .directive('input', input);
 
// The directive enable sending message when tapping return
// and expose the focus and blur events to adjust the view
// when the keyboard opens and closes
function input ($timeout) {
  var directive =  {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: link
  };
  return directive;
 
  ////////////
 
  function link (scope, element, attrs) {
    element.bind('focus', function (e) {
      if (scope.onFocus) {
        $timeout(function () {
          scope.onFocus();
        });
      }
    });
 
    element.bind('blur', function (e) {
      if (scope.onBlur) {
        $timeout(function () {
          scope.onBlur();
        });
      }
    });
 
    element.bind('keydown', function (e) {
      if (e.which == 13) {
        if (scope.returnClose) {
          element[0].blur();
        }
 
        if (scope.onReturn) {
          $timeout(function () {
            scope.onReturn();
          });
        }
      }
    });
  }
}