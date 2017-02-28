/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var name = "Radosław Jakubiak";
 var role = "Community Specialist and Web Developer in training";
 
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


