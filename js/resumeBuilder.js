/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var name = "Radosław Jakubiak";
 var role = "Community Specialist and Web Developer in training";
 
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": "Radosław Jakubiak",
	"role": "Community Specialist and Web Developer in training",
	"contactMail": "radoslawjakubiak@gmail.com",
	"contactGithub": "https://github.com/Vielo/",
	"pictureUrl": "images/photo.jpg",
	"welcomeMsg": "Hello!",
	"skills": ["HTML", "CSS", "SASS", "JavaScript", "Community Management",]
};

var formattedContactMail = HTMLemail.replace("%data%", bio.contactMail);
var formattedContactGithub = HTMLgithub.replace("%data%", bio.contactGithub);
var formattedPictureurl = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").append(formattedContactMail);
$("#header").append(formattedContactGithub);
$("#header").append(formattedPictureurl);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
