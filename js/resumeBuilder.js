/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var bio = {
	"name": "Radosław Jakubiak",
	"role": "Community Specialist and Web Developer in training",
	"mobile": "0049 1764 7578 970",
	"email": "radoslawjakubiak@gmail.com",
	"github": "https://github.com/Vielo/",
	"bioPic": "images/photo.jpg",
	"location": "Schwalbach am Taunus (Frankfurt area)",
	"welcomeMsg": "I am an experienced community, social media and marketing specialist. I understand the challenges and opportunities of the digital world. I remain reliable, hard-working, open minded, friendly and a quick learner regardless of the project I am assigned to.",
	"skills": ["HTML", "CSS", "SASS", "JavaScript", "Community Management", "Microsoft Office", "Adobe Photoshop"]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLmobile.replace("%data%", bio.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.email));
$("#header").append(HTMLgithub.replace("%data%", bio.github));
$("#header").append(HTMLlocation.replace("%data%", bio.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));




if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		$("#skills:last").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

var work = [
	{
		"position": "Community Manager",
		"employer": "Crytek",
		"dates": "October 2013 - October 2014",
		"city": "Frankfurt am Main",
		"description": "I have managed the international community of one of Crytek’s brands, the Warface video game, as a part of the Marketing and Live Operations teams. Aside from that I also created and translated content for the news portal, participated in trade fairs and liaised with the web development team to develop new tools."
	},
	{
		"position": "Community Coordinator",
		"employer": "Wargaming",
		"dates": "November 2014 - March 2017",
		"city": "Paris",
		"description": "I was responsible for managing the community for 6 different products using contemporary social media and other digital tools, coordinated community influencers and YouTubers, provided relevant feedback to the product developers, participated in live events and trade fairs in Poland and Germany."
	}
];

var displayWork = function() {
	if (work.length > 0) {
	for (i = 0; i < work.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work[i].position);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work[i].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[i].city));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[i].description));
		}
	};
};

displayWork();
var project = {
	"name": "None"
};

var education = [
	{
		"name": "University of Wroclaw",
		"city": "Wroclaw, Poland",
		"majors": ["European Law", "Business English", "Organization Theory"],
		"minors": ["History of political thought", "Federalism and regional policy", "Media", "Diplomacy"],
		"years": 2012	
	},
	{
		"name": "University of Wroclaw",
		"city": "Wroclaw, Poland",
		"majors": ["History of politics", "German", "Something Very Boring"],
		"minors": ["History of political thought", "Communication", "Psychology", "Diplomacy"],
		"years": 2010
	}
];
