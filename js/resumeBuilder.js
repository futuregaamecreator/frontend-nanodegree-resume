var bio = {
    "name": 'George Harrison',
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(404) 954-2917",
        "mobileURL": "",
        "email": "futuregamecreator@gmail.com",
        "emailURL": "mailto:futuregamecreator@gmail.com",
        "github": "futuregaamecreator",
        "twitter": "Futuregamecreat",
        "linkedin": "George Harrison",
        "linkedinURL": "https://www.linkedin.com/in/george-harrison-30178144",
        "location": "Atlanta, GA",
        "locationURL": "https://www.google.com/maps/place/Atlanta,+GA/@33.7679192,-84.560692,11z/data=!3m1!4b1!4m2!3m1!1s0x88f5045d6993098d:0x66fede2f990b630b"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Welcome to My Resume Page. I am working everyday to become a better Front End Web Developer",
    "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "GitHub", "Windows", "Drupal", "WordPress", "Networking", "Troubleshooting"],
};
bio.display = function () {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedbioMobile);
    $("#footerContacts").append(formattedbioMobile);
    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    formattedbioEmail = formattedbioEmail.replace("#", bio.contacts.emailURL);
    $("#topContacts").append(formattedbioEmail);
    $("#footerContacts").append(formattedbioEmail);
    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    formattedbioGithub = formattedbioGithub.replace("#", bio.contacts.githubURL);
    $("#topContacts").append(formattedbioGithub);
    $("#footerContacts").append(formattedbioGithub);
    var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedbioTwitter);
    $("#footerContacts").append(formattedbioTwitter);
    var formattedbioLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    formattedbioLinkedin = formattedbioLinkedin.replace("#", bio.contacts.linkedinURL);
    $("#topContacts").append(formattedbioLinkedin);
    $("#footerContacts").append(formattedbioLinkedin);
    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     formattedbioLocation = formattedbioLocation.replace("#", bio.contacts.locationURL);
    $("#topContacts").append(formattedbioLocation);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skills) {

        var formattedSkill = HTMLskills.replace("%data%", skills);
        $("#skills").append(formattedSkill);
});
};

var work = {
    "jobs": [{
            "employer": "Cricket",
            "title": "L2 Professional Business Manager",
            "location": "Atlanta, GA",
            "dates": "2016",
            "description": "I assist with training reps on how to use tools to help Authorized Retailers and Corporate Stores, audit Vendors, and handling escalations from various deptartment"
        },{
            "employer": "Cricket",
            "title": "ROS Desk Tier 2 Specialist",
            "location": "Atlanta, GA",
            "dates": "2014",
            "description": "I assist all Cricket Dealer with issues with Store Issues such as Setting up Camera Systesm, Not able to open applications, and Locked out of Accounts"
        }, {
            "employer": "Horizon Software",
            "title": "K - 12 POS Anaylst ",
            "location": "Duluth,GA ",
            "dates": "2014",
            "description": "I fixed school system POS system Remotely"
        }, {
            "employer": "OutComes Heatlh",
            "title": "Document Management Specialist",
            "location": "Alpharetta, GA ",
            "dates": "2014",
            "description": " Verified Electronic Medical Records for Accurate reports and Merge Duplicates"
        }, {
            "employer": "Wellstar",
            "title": "Kennestone Implation Specialist",
            "location": "Marietta, GA",
            "dates": "2013",
            "description": "Assisted in Converting Wellstar Biggest Hospital from Paper Records to Electronic Medical Record"
        }]
};
work.display = function (){
 work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedJobLocation);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(formattedDescription);
    });
};

var education = {
    "schools": [{
            "name": "DeVry University",
            "location": "Decatur, GA",
            "degree": "Bachelor of Science",
            "majors": "Game Simulation and Programming",
            "dates": "2009",
            "url": "http://www.devry.edu/"
        },
    ],
    "onlineCourses": [{
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd/"
        }, {
            "title": "Responsive Web Design Fundementals",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd/"
        }, {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/responsive-images--ud882-nd/"
        }, {
            "title": "JavaScript Fundamentals",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/javascript-basics--ud804-nd/"
        }, {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        }]
};
education.display = function() {
  education.schools.forEach(function(school) {


        var formattedSchool = HTMLschoolName.replace("%data%", school.name);
        formattedSchool = formattedSchool.replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDegree = formattedSchool + formattedDegree;
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajor);
    });

 $("#education").append(HTMLonlineClasses);
   education.onlineCourses.forEach(function(course) {

     $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        formattedOnlineTitle = formattedOnlineTitle.replace("#", course.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedURL);

    });
};

var projects = {
    "projects": [{
            "title": "ProfileES",
            "dates": "2013",
            "description": "Interned for Accelerated Design and helped create their Kickstart web page. Created Webforms, Created Custom Rules in PHP, and some Front End work",
            "images": ["images/ProfileES.jpg"],
            "url": "http://profilees.com"
        },
        {
            "title": "Formula ATL",
            "dates": "2015",
            "description": "Created a Wordpress website for a Private Car Seller that sells custom cars to Celebrities and sports player. Created a Custom Login and Created a unique website layout for new buyers and admins to update content",
            "images": ["images/forumula1.jpg"],
            "url": "http://formulaatl.com"
        },
        {
            "title": "GX Website",
            "dates": "2015",
            "description": "Created a new responsive HTML website for a Gaming Lounge in ATL",
            "images": ["images/gx.jpg"],
            "url": "http://gxgaming.com"
        }]
};

projects.display = function () {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        formattedTitle = formattedTitle.replace("#", project.url);
        formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        projects.images.forEach(function(project) {
          $("#projects").append(HTMLprojectStart);
            var formattedImage = HTMLprojectImage.replace("%data%", project.images);
            $(".project-entry:last").append(formattedImage);
            });
        });
    };


$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();
