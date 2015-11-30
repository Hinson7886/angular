var myApp = angular
					.module("myModule", [])
					.controller("myController", function ($scope) {
						var employee = {
							firstName: "David",
							lastName: "Hastings",
							gender: "Male"
						};
						var employees = [
							{firstName: "David",lastName: "Hastings",gender: "Male", salary: 55000 },
							{firstName: "Sarah",lastName: "Hinson",gender: "Female", salary: 65000 },
							{firstName: "Bob",lastName: "Jenkins",gender: "Male", salary: 53000 },
							{firstName: "Pam",lastName: "Oliver",gender: "Female", salary: 50000 },
						];
						var technologies = [
							{name: "C#",likes: 0, dislikes:0 },
							{name: "ASP.Net",likes: 0, dislikes:0 },
							{name: "SQL Server",likes: 0, dislikes:0 },
							{name: "AngularJS",likes: 0, dislikes:0 },
						];
						

						$scope.employee = employee;
						$scope.employees = employees;
						$scope.technologies = technologies;
						
						$scope.incrementLikes = function (technology) {
							technology.likes++;
						}

						$scope.incrementDislikes = function (technology) {
							technology.dislikes++;
						}

						
					});