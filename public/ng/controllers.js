angular.module('app').controller('IndexCtrl', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
		$scope.onGotoTop = function () {
			if ($('html, body').is(':animated')) {
				$('html, body').stop(true, true);
			}
			$('html, body').animate({ scrollTop: '0px' }, 1000);
		};
	}]);

angular.module('app').controller('ProductCtrl', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
		$scope.manufacturerList = [
			{ name: '金宇', tabId: '#tab-jinyu', panelId: '#panel-jinyu' },
			{ name: '玉祺麟', tabId: '#tab-yuqilin', panelId: '#panel-yuqilin' },		
			{ name: '玛吉斯', tabId: '#tab-majisi', panelId: '#panel-majisi' },
			{ name: '陆通', tabId: '#tab-lutong', panelId: '#panel-lutong' },
			{ name: '玲珑', tabId: '#tab-linglong', panelId: '#panel-linglong' },
			{ name: '奥力拉', tabId: '#tab-aolila', panelId: '#panel-aolila' },
			{ name: '华盛', tabId: '#tab-huasheng', panelId: '#panel-huasheng' },
			{ name: '普利司通', tabId: '#tab-pulisitong', panelId: '#panel-pulisitong' }
		];
		$scope.selectedManufacturer = $scope.manufacturerList[0];
		$($scope.selectedManufacturer.panelId).addClass('active').fadeIn(300);

		//functions
		$scope.onSelectManufacturer = function () {
			$('div[role="tabpanel"].active').removeClass('active').fadeOut(200, function () {
				$($scope.selectedManufacturer.panelId).addClass('active').fadeIn(300);
			});
		};
	}]);