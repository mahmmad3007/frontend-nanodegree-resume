

var bio = {
	"name": "Mohammed altariqi",
	"role": "CIO",
	"contacts": {
		"mobile": "+966556493003",
		"email": "mr.mahmmad@gmail.com",
		"github":"mahmmad3007",
		"twitter":"@altariqi1",
		"location": "Riyadh" },
	"welocmeMessage": " Welcome to my page, I hop my resume meet your expactation and be one of your employee",
	"skills": [
		"Programming ", "PL/SGL ", "Java ", "web develpment ", "strong leadership "
		],
	"bioPic": "images/fry.jpg",

	display: function(){
		 //my name introducation
		 //Header
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedName);
		  // my dream job
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
		
		var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedImage);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);

		var formattedEMAIL = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEMAIL);

		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);

		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGitHub);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		//Footer

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);

		var formattedEMAIL = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedEMAIL);

		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);

		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedGitHub);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedLocation);

		//var formattedcontacts = HTMLcontactGeneric.replace("%data%",bio.name);
		//$("#header").prepend(formattedcontacts);

		if(bio.skills.length>0 ){
			$("#header").append(HTMLskillsStart);

			var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkills);
			formattedSkills=HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkills);
			formattedSkills=HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkills);
			formattedSkills=HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkills);
		}
	}
}

bio.display();


// to display work experiance
 var work ={
 	"jobs": [
 	{
 		"employer":" University of Dammam",
 		"title":"System Analyset",
 		"dates":"Januray 10, 2012 - Current",
 		"description":" Get  clinet requerments in order to design system that meet thier expectation "
 	},
 	{
 		"employer":" Royal Commission in Jubail and Yanbu",
 		"title":"Computer Science lecturer",
 		"dates":"2006 - Novmber 30, 2008",
 		"description":" teaching computer science for high school students"
 	}
 	],

 	display:function(){

 	work.jobs.forEach(function(job){
	//for (job in work.jobs){
		//create new div for work experiance
		$("#workExperience").append(HTMLworkStart);
		//concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates=HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	});
  }
 }

work.display();

var education ={
	"schools": [
	{
		"name":"La Trobe University",
		"location":"Melbourne, Australia",
		"degree":"Master",
		"majors":["Computer Science"],
		"dates": 2011,
		"url": "http://la trobe.edu.au"
	},
	{
		"name":"King Saud University",
		"location":"Riyadh, Australia",
		"degree":"Bacheloar",
		"majors":["Computer Science"],
		"dates": 2006,
		"url": "http://ksu.edu.sa"
	}
  ],
	"OnlineCourses": [
	{
		"title": "front end develpment",
		"school": "Udacity",
		"dates": 2018,
		"url": "https://sa.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "Cobit",
		"school": "Internation school",
		"dates": 2019,
		"url": "http://www.isaca.org/Knowledge-Center/COBIT/Pages/Overview.aspx"

	} 
	],

	display:function(){
		education.schools.forEach(function(school){

		$("#education").append(HTMLschoolStart);

		var formattedName=HTMLschoolName.replace("%data%",school.name);
		$(".school-entry:last").append(formattedName);

		var formattedDegree=HTMLschoolDegree.replace("%data%", school.degree);
		$(".school-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".school-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".school-entry:last").append(formattedLocation);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$(".school-entry:last").append(formattedMajor);
				
		if (education.OnlineCourses.length > 0 ) {
			education.OnlineCourses.forEach(function(course){
				var formattedClasses =  HTMLonlineClasses.replace("%data%", course);
				$(".school-entry:last").append(formattedClasses);

				var formattedTitle =  HTMLonlineTitle.replace("%data%", course.title);
				$(".school-entry:last").append(formattedTitle);

				var formattedschool =  HTMLonlineSchool.replace("%data%", course.school);
				$(".school-entry:last").append(formattedschool);

				var formattedDates =  HTMLonlineDates.replace("%data%", course.dates);
				$(".school-entry:last").append(formattedDates);

				var formattedURL =  HTMLonlineURL.replace("%data%", course.url);
				$(".school-entry:last").append(formattedURL);
			});
		}
	});
}

 }

education.display();



var projects = {
	"projects" : [
	 {
	 	"title": "Helpdesk improvments",
	 	"dates": "2013",
	 	"description": "The project aim to solve helpdesk issues, it's been clear that there are a lot of missing calls. so we have to analyse to find proper solution",
	 	"images": [
	 		"https://www.aurorasolutions.ca/wp-content/uploads/2016/12/help-desk.jpg",
	 		"http://blogs.bmc.com/wp-content/uploads/2016/02/Help-Desk-Best-Practices-to-Avoid-Fire-Drills_700x400.png"
	 	]
	 }
	],
		display:function(){
			projects.projects.forEach(function(project){
				$("#projects").append(HTMLprojectStart);
				var formattedTitle=HTMLprojectTitle.replace("%data%", project.title);
				$(".project-entry:last").append(formattedTitle);
				var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
				$(".project-entry:last").append(formattedDates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
				$(".project-entry:last").append(formattedDescription);

				if (project.images.length > 0) {
					project.images.forEach(function(image){
					var formattedImage = HTMLprojectImage.replace("%data%",image);
					$(".project-entry:last").append(formattedImage);
				});
		}
	});
  }
}

projects.display();






function locationizer(work_obj) {
	var locationArray = [];
	work_obj.jobs.forEach(function(job){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	});

	return locationArray;
}



/*
$(document).click(function(loc) {
	var x=loc.pageX;
	var y=loc.pageY;

	logClicks(x,y);
});
function inName(name) {
	name=name.trim().split("");
	console.log(name);
	name[1] = name [1].toUpperCase();
	name[0] = name[0]. slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name [0] + "" + name[1];
}
$('#main').append(internationalizeButton);
*/
//my map here....

$("#mapDiv").append(googleMap);



