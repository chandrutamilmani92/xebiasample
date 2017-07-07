angular.module('embibeSample').directive('population', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
        	chartid:'='
        },
        templateUrl: 'directive/population/population.html',
        link: function(scope, element, attrs, fn) {

        },
        controller:function($scope) { 
     var ctx = document.getElementById("myChart");      	
    function AssignchartData() {	
    var newchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: $scope.chartPopulation.label,
        datasets: [{
            label: $scope.chartPopulation.name,
            data: $scope.chartPopulation.data,
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    } 
       	$scope.$on('chartDataPopulation',function(evt,data){
       		console.log(data);
       		$scope.chartPopulation = {name:data.name,label:['Diameter','Orbital Period','Rotation Period','Surface Water'],data:[data.diameter,data.orbital_period,data.rotation_period,data.surface_water]};
       		AssignchartData();
       	});
       
      }
    };
});
