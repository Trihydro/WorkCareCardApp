angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('IncidentController', function($scope) {

	$scope.ImmediateCare = [
	    { title: 'First take care of yourself'},
	    { title: 'Then take care of others'},
	    { title: 'Stop work and secure site'}
  	];

	$scope.InitialNotifications = [
	    { title: 'Notify Police of Ambulance 911, if applicable'},
	    { title: 'Notify H&S Department'},
	    { title: 'Notify Project Manager (PM)'},
	    { title: 'Notify Supervisor'},
	    { title: 'Notify Client (As directed by PM)'},
	    { title: 'Notify Site Managers (as directed by PM)'}
  	];

   	$scope.NotificationMedical = [
    	{ title: 'Notify H&S Department'},
    	{ title: 'Notify Supervisor'},
    	{ title: 'Notify Work Care'}
  	];

	$scope.Reporting = [
	    { title: 'Complete Incident Report Form within 12 hours'},
	    { title: 'Submit via fax or email to H&S department and PM'},
	    { title: 'PM Shall report to Client, as applicable'},
	    { title: 'Follow-up reporting, as required'}
	];

	$scope.Returning = [
    { title: 'Notify PM and Supervisor'},
    { title: 'Assess and analyze conditions'},
    { title: 'Take applicable corrective action'}
    ];

})

.controller('VehicleController', function($scope) {

	$scope.ImmediateCare = [
	    { title: 'First take care of yourself'},
	    { title: 'Then take care of others'},
	    { title: 'Stop work and secure site'}
  	];

	$scope.InitialNotifications = [
	    { title: 'Notify Police of Ambulance 911, if applicable'},
	    { title: 'Notify H&S Department'},
	    { title: 'Notify Project Manager (PM)'},
	    { title: 'Notify Supervisor'},
	    { title: 'Notify Client (As directed by PM)'},
	    { title: 'Notify rental car agency (as directed by PM)'}
  	];

   	$scope.NotificationMedical = [
    	{ title: 'Notify H&S Department'},
    	{ title: 'Notify Supervisor'},
    	{ title: 'Notify Work Care'}
  	];

	$scope.Testing = [
		{ title: 'Coordinate with H&S Department', sub1: 'i. Testing facility location', sub2: 'ii. Testing facility location'}, 		 
		{ title: 'Complete testing within 3 hrs or ASAP'}
    ];

	$scope.Reporting = [
	    { title: 'Complete Vehicle Accident Form within 12 hours'},
	    { title: 'Submit via fax or email to H&S department and PM'},
	    { title: 'PM Shall report to Client, as applicable'}
	];

})

.controller('ContactController', function($scope) {
	$scope.MedicalMonitoring = '800-455-6155';
	$scope.EmergencyIncident = '888-449-7787';
	$scope.Trihydro = '307-755-4888'; 
});


