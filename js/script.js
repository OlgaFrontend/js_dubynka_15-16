// search form
$('.icon').click(function(event) {
    searching();
});

$('#search').keydown(function(event) {
	if(event.keyCode == 13) {
		searching();
	}
});

function searching() { 

	$('img').remove();
	$('p').remove();
	
	var txt = $('#search').val();
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+txt+"&tagmode=any&format=json&jsoncallback=?",
		function(data) {
            $.each(data.items, function(i, item) {
                $('<img/>').attr("src", item.media.m).appendTo('#content');
				if ( i == 20 ) return false;
			});
		}
	);
};

// proto

function Human() {
	this.name = 'Olga';
	this.age = 33;
	this.sex = 'female';
	this.heigth = 173;
	this.weight = 55;
};

function Worker() {
	this.company = 'Facebook';
	this.salary = 10000;
	this.work = function() {
		console.log('Work!!!');
	};
};

Worker.prototype = new Human();
var newWorker = new Worker();

function Student() {
	this.university = 'KPI';
	this.scholarship = 900;
	this.hobby = function() {
		console.log('Go to the cinema!!!');
	};
};

Student.prototype = new Human();
var newStudent = new Student();

console.log(newWorker);
newWorker.work();

console.log(newStudent);
newStudent.hobby();
