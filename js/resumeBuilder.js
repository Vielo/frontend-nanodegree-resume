/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var bio = {
	"name": "Radosław Jakubiak",
	"role": "Community Specialist and Web Developer in training",
	"mobile": "0049 1764 7578 970",
	"email": "radoslawjakubiak@gmail.com",
	"github": "https://github.com/Vielo/",
	"linkedIn": "https://www.linkedin.com/in/radoslaw-jakubiak/",
	"bioPic": "images/photo.jpg",
	"location": "Schwalbach am Taunus (Frankfurt area)",
	"welcomeMsg": ["Proven talent improving user satisfaction rates while adhering to company protocol, increasing user retention to achieve KPI’s.", "Excellent command of various IT systems and software.", "Strong team player exceling at working in international and multicultural environments.", "Tasks and processes optimization and time/cost effectiveness acumen."],
	"skills": ["HTML", "CSS", "JavaScript", "Community Management", "Microsoft Office", "Adobe Photoshop", "JIRA", "Content Management Systems", "OmegaT", "Trados", "memoQ", "Confluence", "Devtrack", "Devtest", "Social Media Management Systems"]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName + formattedRole);
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
for (var i = 0; i < bio.welcomeMsg.length; i++) {
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg[i]));
}
//$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.location));
$("#topContacts").append(HTMLlinkedIn.replace("%data%", bio.linkedIn));


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
		"city": "Frankfurt am Main, Germany",
		"description": "I have managed the international community of one of Crytek’s brands, the Warface video game, as a part of the Marketing and Live Operations teams. Aside from that I also created and translated content for the news portal, participated in trade fairs and liaised with the web development team to develop new tools.",
		"descriptionBulletPoints": ["Improved customer retention by the means of creation and implementation of a comprehensive new product user guide in close cooperation with the Brand Manager and Graphic Design Team.", "Optimized repetitive tasks and processes to achieve better efficiency: created news templates, universal rule sets for contests and competitions and implemented custom forum code to improve formatting.", "Introduced OmegaT, an open source Computer Assisted Translation tool in the community team.", "Drafted specifications for new Content Management System features or improvements of already existing ones, briefed the Web Development Team and ensured their successful implementation.", "Supervised a moderation team to enforce community guidelines on forums and social media.", "Guided a number of community influencers which led to improved customer retention and brand visibility."]
	},
	{
		"position": "Freelance Translator",
		"employer": "Localsoft",
		"dates": "September 2013 - ongoing",
		"city": "Malaga, Spain",
		"description": "I have localized various projects in relation to multiple video game products (AAA), including actual in-game texts as well as related marketing and content copy using the Trados and memoQ Computer Assisted Translation tools."
	},
	{
		"position": "Community Coordinator",
		"employer": "Wargaming",
		"dates": "October 2013 - October 2014",
		"city": "Paris, France",
		"description": "I was responsible for managing the community for 6 different products (one of which was the well-known World of Tanks game) using contemporary social media and other digital tools.",
		"descriptionBulletPoints": ["Extracted customer feedback using the forums and social media management tools to measure sentiment towards new product features and updates.", "Increased products’ visibility by means of various social activities for the customers, both online and live, during trade fair and community meetings.", "Coordinated community influencers (product ‘apostles’) to improve user retention and satisfaction."]
	},
	{
		"position": "Localization Tester",
		"employer": "Electronic Arts",
		"dates": "July 2013 - August 2013 (fixed-term contract)",
		"city": "Madrid, Spain",
		"description": "I have tested the Polish localization of one of the developer’s products, the FIFA 14 video game.",
		"descriptionBulletPoints": ["Ensured compliance with partners’ standards so that the product could be shipped on time and without issues.", "Identified product issues and assigned them appropriate severity status or fixed them personally whenever possible."]
	}
];

work.display = function() {
	if (work.length > 0) {
	for (var i = 0; i < work.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work[i].position);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work[i].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[i].city));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[i].description));
		for (item in work[i].descriptionBulletPoints) {
			$(".work-entry:last").append(HTMLworkDescriptionBulletPoints.replace("%data%", work[i].descriptionBulletPoints[item]));
		}
		}
	};
};
work.display();

var internship = [
	{
		"position": "Project Coordinator Assistant",
		"employer": "Continuous Action",
		"dates": "March 2013 – June 2013",
		"city": "Tallinn, Estonia",
		"description": "I was a volunteer engaged through the European Voluntary Service; my duties included various administrative tasks in the host organization’s HQ.",
		"descriptionBulletPoints": ["Handled project documentation required to coordinate other EVS volunteers.", "Applied for new projects and maintained good communication standards with existing and prospective partners.", "Created the 2013 issue of the ‘Contact’ magazine using Adobe InDesign, summarizing the year’s voluntary projects for the host organization."]
	},
	{
		"position": "Trainee Community Support Officer",
		"employer": "Nottingham City Council",
		"dates": "July 2012 – September 2012",
		"city": "Nottingham, United Kingdom",
		"description": "I have researched social and community issues regarding local impoverished neighborhoods as a trainee in the Erasmus-Internship university program.",
		"descriptionBulletPoints": ["Contributed in the release of the Council’s official 2013 Volunteering Guidelines."]
	},
	{
		"position": "Intern in the Communication Department",
		"employer": "European Commission",
		"dates": "October 2013 - October 2014",
		"city": "Wrocław, Poland",
		"description": "I was responsible for managing and support of projects, as well as preparation of graphic material for events.",
		"descriptionBulletPoints": ["Organized a EU-themed seminar for regional media.", "Developed and led a cultural exchange event for a group of foreign students.", "Coordinated community influencers (product ‘apostles’) to improve user retention and satisfaction.", "Coordinated a study visit of Dutch students and actively participated in the organization of weekly 'View on Europe' meetings."]
	}
];

internship.display = function() {
	if (internship.length > 0) {
	for (var i = 0; i < internship.length; i++) {
		$("#internships").append(HTMLinternshipStart);
		var formattedInternshipEmployer = HTMLinternshipEmployer.replace("%data%", internship[i].employer);
		var formattedInternshipTitle = HTMLinternshipTitle.replace("%data%", internship[i].position);
		$(".internship-entry:last").append(formattedInternshipEmployer + formattedInternshipTitle);
		$(".internship-entry:last").append(HTMLinternshipDates.replace("%data%", internship[i].dates));
		$(".internship-entry:last").append(HTMLinternshipLocation.replace("%data%", internship[i].city));
		$(".internship-entry:last").append(HTMLinternshipDescription.replace("%data%", internship[i].description));
		for (item in internship[i].descriptionBulletPoints) {
			$(".internship-entry:last").append(HTMLinternshipDescriptionBulletPoints.replace("%data%", internship[i].descriptionBulletPoints[item]));
		}
		}
	};
};
internship.display();

var courses = [
	{
		"title": "German for Foreigners, A2 level",
		"organization": "Tandem Sprachschule",
		"location": "Frankfurt am Main, Germany",
		"dates": "March 2017 – ongoing",
		"description": " ",
	},
	{
		"title": "Front-end development course",
		"organization": "Udacity",
		"location": "Online course",		
		"dates": "February 2017 - ongoing",
		"description": "Gaining the working knowledge of the three languages that power every website: HTML, CSS and JavaScript.",
	},
	{
		"title": "How to use Git and GitHub",
		"organization": "Udacity",
		"location": "Online course",		
		"dates": "February 2017",
		"description": "Learned to use the Git version control system and GitHub, a collaboration platform.",
	}
];

courses.display = function() {
	if (courses.length > 0) {
		for (var i = 0; i < courses.length; i++) {
			$("#courses").append(HTMLcoursesStart);
			var formattedCourseOrganization = HTMLcoursesOrganization.replace("%data%", courses[i].organization);
			var formattedCourseTitle = HTMLcoursesTitle.replace("%data%", courses[i].title);
			$(".course-entry:last").append(formattedCourseOrganization + formattedCourseTitle);
			$(".course-entry:last").append(HTMLcoursesLocation.replace("%data%", courses[i].location));
			$(".course-entry:last").append(HTMLcoursesDates.replace("%data%", courses[i].dates));
			$(".course-entry:last").append(HTMLcoursesDescription.replace("%data%", courses[i].description));
			//$(".course-entry:last").append(HTMLcoursesImage.replace("%data%", courses[i].image));
		}
	};
};

courses.display();

var education = [
	{
		"name": "University of Wroclaw",
		"degree": "Master's Degree",
		"location": "Wrocław, Poland",
		"description": "The curriculum focused on media and communication but also on the specific knowledge related to European Civilization and Cultural Identities in Europe. The subjects covered included IT, Professional English, European Law, Media and Communication, Sociology, Social Psychology and Economy. My final grade was 4.5/5.",
		"dates": "October 2010 – February 2013",
		"major": "Media and Social Communication"
	},
	{
		"name": "University of Wroclaw",
		"degree": "Bachelor’s Degree",
		"location": "Wrocław, Poland",
		"description": "The curriculum was a broad introduction into the area of European institutional system and a solid foundation for my further postgraduate Master’s Degree. ",
		"dates": "October 2007 – June 2010",
		"major": "European Studies, Federalism and Regional Policy specialization"
	}
];

education.display = function() {
	if (education.length > 0) {
		for (var i = 0; i < education.length; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education[i].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education[i].major));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education[i].location));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education[i].dates));
			$(".education-entry:last").append(HTMLschoolDescription.replace("%data%", education[i].description));
		}
	};
};

education.display();

/*$("#main").append(internationalizeButton);
var inName = function(name) {
  var splitArray = name.split(" ");
  var name1 = splitArray[0];
  var name1edit = name1.slice(0,1).toUpperCase();
  name1 = name1edit + name1.slice(1).toLowerCase();
  var name2 = splitArray[1].toUpperCase();
  return name1 + " " + name2;
};
*/

$("#mapDiv").append(googleMap);

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.location));
$("#footerContacts").append(HTMLlinkedIn.replace("%data%", bio.linkedIn));