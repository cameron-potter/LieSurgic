// function person () {
// 	// this is a private var
// 	var dob = "4 july 1990";

// 	this.name = 'philipe';

// 	// public properties and functions
// 	return {
// 		age: '24',
// 		// name: 'Cameron',
// 		getDob: function () {
// 			return dob;
// 		}
// 	}

// }

// var guy = new person();

// console.log(guy.name);

function person () {
	this.sayHi = function () {

	}
}

var student = function () {

}

student.prototype = new person();

student.prototype.alert = function () {
	alert(" hi im student");
}

function teacher () {};

teacher.prototype = new person();

teacher.prototype.sayHi = function () {
	return ' imma teacher';
}

var Cameron = new student;

if(Cameron instanceof person) {
	console.log('human');
}


// window.onload = function () {
//     start();
// };

// function start() {
// 	motion = new motion();
// 	update();
// }

// var motion = function (action) {
// 	this.frames = [];
// 	for(var i = 0, i < action.length, i++) {
// 		var fr = new action();
// 	}
// }

// var running = function () {
	
// }
