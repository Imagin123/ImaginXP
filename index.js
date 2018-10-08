var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var path = require('path');
const https = require('https');


/* MANAGGING ALL THE STATIC HTML WEB PAGES */
router.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/../html/index.html'));
});

router.get('/blog_detail', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/blog_detail.html'));});
router.get('/campus', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/campus.html'));});
router.get('/corporate', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/corporate.html'));});
router.get('/corporatetraining', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/corporatetraining.html'));});
router.get('/courses', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/courses.html'));});
router.get('/findtherightcourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/findtherightcourse.html'));});
router.get('/index', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/index.html'));});

router.get('/interactiondesignonlinecourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/interactiondesignonlinecourse.html'));});
router.get('/jobs-old', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/jobs-old.html'));});
router.get('/jobs', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/jobs.html'));});
router.get('/oncampuscourses', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/oncampuscourses.html'));});
router.get('/thankyou', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/thankyou.html'));});
router.get('/trail', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/trail.html'));});

router.get('/uxfundamentalsonlinecourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/uxfundamentalsonlinecourse.html'));});
router.get('/uxjumpstartercourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/uxjumpstartercourse.html'));});
router.get('/uxworkshops', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/uxworkshops.html'));});
router.get('/visualdesignconfirmedplacementscourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/visualdesignconfirmedplacementscourse.html'));});

router.get('/whyuxblog', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/whyuxblog.html'));});
router.get('/why_ux', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/why_ux.html'));});
router.get('/wireframingandprototypingcourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/wireframingandprototypingcourse.html'));});
router.get('/wireframingandprototypingonlinecourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/wireframingandprototypingonlinecourse.html'));});
router.get('/workshop', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/workshop.html'));});
router.get('/search', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/search.html')); });
router.get('/dituniversity', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/DIT_Universities.html')); });
router.get('/chitkarauniversity', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/chitkara_university.html')); });
router.get('/mediapage', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/mediapage.html')); });
router.get('/spit', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/spit.html')); });
router.get('/designthinking', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/sims.html')); }); 
router.get('/events', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/events.html')); }); 
router.get('/IDFcourses', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/IDFcourses.html')); }); 
router.get('/IDFcourses/userresearchcourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/userresearchcourse.html'));});
router.get('/IDFcourses/visualdesigncourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/visualdesigncourse.html'));});
router.get('/IDFcourses/interactiondesigncourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/interactiondesigncourse.html'));}); 
router.get('/IDFcourses/MobileUXDesignCourse', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/MobileUXDesignCourse.html'));});
/*router.get('/idf', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/idf.html')); });*/
/*router.get('/sims', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/sims.html')); });*/
/* BLOGS */

router.get('/Designthinkinginnovation', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/Designthinkinginnovation'});res.end();});
router.get('/whyuxblog/Designthinkinginnovation', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/Designthinkinginnovation.html'));});

router.get('/Designthinkingteamsport', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/Designthinkingteamsport'});res.end();});
router.get('/whyuxblog/Designthinkingteamsport', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/Designthinkingteamsport.html'));}); 

router.get('/DesignthinkingDrowned_mutilatedandmurdered', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/DesignthinkingDrowned_mutilatedandmurdered'});res.end();});
router.get('/whyuxblog/DesignthinkingDrowned_mutilatedandmurdered', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/DesignthinkingDrowned_mutilatedandmurdered.html'));}); 

router.get('/Thefutureofhealthcare', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/Thefutureofhealthcare-digitalpill'});res.end();});
router.get('/whyuxblog/Thefutureofhealthcare-digitalpill', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/Thefutureofhealthcare.html'));}); 
router.get('/whyuxblog/Thefutureofhealthcare', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/Thefutureofhealthcare.html'));}); 


router.get('/ThefutureofUserExperiencewithVirtualReality', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/ThefutureofUserExperiencewithVirtualReality'});res.end();});
router.get('/whyuxblog/ThefutureofUserExperiencewithVirtualReality', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/ThefutureofUserExperiencewithVirtualReality.html'));}); 

router.get('/TheUXstrategy', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/TheUXstrategy'});res.end();});
router.get('/whyuxblog/TheUXstrategy', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/TheUXstrategy.html'));}); 


router.get('/IoT', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/IoT'});res.end();});
router.get('/whyuxblog/IoT', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/IoT.html'));}); 


router.get('/designingdigitalexperience', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/designingdigitalexperience'});res.end();});
router.get('/whyuxblog/designingdigitalexperience', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/designingdigitalexperience.html'));}); 


router.get('/uxretailindustry', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/userexperienceinretailindustry'});res.end();}); 
router.get('/whyuxblog/userexperienceinretailindustry', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/uxretailindustry.html'));}); 
router.get('/whyuxblog/uxretailindustry', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/uxretailindustry.html'));}); 


router.get('/securityandprivacywillinfluenceuxdesign', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/securityandprivacywillinfluenceuxdesign'});res.end();});
router.get('/whyuxblog/securityandprivacywillinfluenceuxdesign', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/securityandprivacyuxdesign.html'));}); 


router.get('/6_things_you_should_know_about_ux_revised', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/6_things_you_should_know_about_User_Experience'});res.end();}); 
router.get('/whyuxblog/6_things_you_should_know_about_User_Experience', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/6_things_you_should_know_about_ux_revised.html'));});
router.get('/whyuxblog/6_things_you_should_know_about_ux_revised', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/6_things_you_should_know_about_ux_revised.html'));}); 


router.get('/difference_between_art_and_design', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/difference_between_art_and_design'});res.end();});
router.get('/whyuxblog/difference_between_art_and_design', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/difference_between_art_and_design.html'));}); 


 router.get('/how_can_anyone_become_a_ux_designer', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/how_can_anyone_become_a_ux_designer'});res.end();});
router.get('/whyuxblog/how_can_anyone_become_a_ux_designer', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/how_can_anyone_become_a_ux_designer.html'));}); 


router.get('/information_architecture_part1', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/information_architecture_part1'});res.end();});
router.get('/whyuxblog/information_architecture_part1', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/information_architecture_part1.html'));}); 


router.get('/information_architecture_part2', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/information_architecture_part2'});res.end();});
router.get('/whyuxblog/information_architecture_part2', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/information_architecture_part2.html'));}); 


router.get('/information_architecture_part3', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/information_architecture_part3'});res.end();});
router.get('/whyuxblog/information_architecture_part3', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/information_architecture_part3.html'));}); 


router.get('/information_architecture_part4', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/information_architecture_part4'});res.end();});
router.get('/whyuxblog/information_architecture_part4', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/information_architecture_part4.html'));}); 


router.get('/interaction_visual_usability', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/interaction_visual_usability'});res.end();});
router.get('/whyuxblog/interaction_visual_usability', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/interaction_visual_usability.html'));}); 

router.get('/interaction_designer_visual_designer_and_usability_expert', function(req, res, next) {	
res.writeHead(302, {'Location': '../whyuxblog/interaction_designer_visual_designer_and_usability_expert'});res.end();});
router.get('/whyuxblog/interaction_designer_visual_designer_and_usability_expert', function(req, res, next) {	res.sendFile(path.join(__dirname + '/../html/interaction_designer_visual_designer_and_usability_expert.html'));});



 
//router.get('/mailtest', function (req, res, next) { res.sendFile(path.join(__dirname + '/../html/mailtest.html')); });
/*router.get('/sendmail', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 'text/html'");
	
	res.end("<html>Aichya Gavat</html>");
});*/

router.post('/pravin', function(req, res, next) {
	res.end("PravinPawar");
});

router.post('/sendmail', function(req, res, next) {
	
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	
	//res.header("Access-Control-Allow-Origin", "*");
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 'text/html'");
	
	var mail_subj = req.body.mail_subj;
	var mail_body = req.body.mail_body;
    
    //taking input from users

    var arr = mail_body.split(" - ");
    var arr1 =  mail_body.toString().split("Name");
    var arr2 = arr1.toString().split("Email");
    var arr3 = arr2.toString().split("Mobile");
    var arr4 = arr3.toString().split("City");
    var arr5 = arr4.toString().split(",");

    var name = arr5[1];
    var mobile = arr5[2];
    var email = arr5[3];
    var city = arr5[4];


  //handling blank fields

    if(name){
    name = name.replace("\n","").replace(" - ","");
    }

    if(mobile){
        mobile = mobile.replace("\n","").replace(" - ","");
        }

    if(email){ 
    email = email.replace("\n","").replace(" - ","");
    }
  
    
    if(city){
        city = city.replace("\n","").replace(" - ","");
        }
  

//   console.log(name);
//    console.log(mobile);
//    console.log(email);
//   console.log(city);
     
   //node API call
      
        var postData = {
            data: [
                {
                   Last_Name:name,
                   Phone: mobile,
                   Email: email,
                   City: city,
                   Lead_Source: "Website",
                   Description: mail_subj + mail_body

                }
            ]
        }
        var data = JSON.stringify(postData);

        console.log(JSON.stringify(postData));

      
        performRequest('/crm/v2/Leads', 'POST', 
            data
          , function(data) {
            //return callback(data);
            console.log(data);

            // create reusable transporter object using the default SMTP transport
            var transporter = nodemailer.createTransport({
                host: 'smtp.office365.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "web.admin@imaginxp.com", // generated ethereal user
                    pass: "ImaginXP1"  // generated ethereal password
                },
                requireTLS : true
            });

            // setup email data with unicode symbols
            var mailOptions = {
                from: 'web.admin@imaginxp.com', // sender address
                to: 'sonam@imaginxp.com, shashank@imaginxp.com, chinmoy@imaginxp.com, udit@imaginxp.com, ajay.rathore@imaginxp.com, prateek.sharma@imaginxp.com, ramiz@imaginxp.com, sachin.dhanaraj@imaginxp.com, mahesh.kumar@imaginxp.com, abhayjeet@imaginxp.com, pravesh@imaginxp.com, nitesh.rohatgi@imaginxp.com, arpita.bhoyar@imaginxp.com',  // list of receivers
              //to: 'maheshdhotre143@gmail.com', // list of receivers
                subject: mail_subj,//'Test Email From NodeJS', // Subject line
                text: mail_body,//'Hi All,\nPlease reply once so that I know you are receiving the emails\nRegards,\nNaval', // plain text body
                //html: '<p>' + mail_body + '</p>'//'<b>Hi All,\nPlease reply once so that I know you are receiving the emails\nRegards,\nNaval</b>' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
            
            res.send({});            
          });  
        
	//console.log(mail_subj);
	//console.log(mail_body);
	
	//res.end("email sending is blocked as of now from node end, undo it to work");
	//return;
	
});

function performRequest(endpoint, method, data, success) {
    //var dataString = JSON.stringify(data);
    dataString = data;
    var headers = {};
    var host = "www.zohoapis.com";
    //var host = "www.zohoapis.com/crm/v2/Leads";

    if (method == 'GET') {
      endpoint += '?' + querystring.stringify(data);
    }
    else {
      headers = {
        Authorization: 'afe5e362bf8bd22223c090b63f43bb93',
        'Content-Type': 'application/json'
      };
    }
    var options = {
      host: host,
      path: endpoint,
      method: method,
      headers: headers
    };
  
    var req = https.request(options, function(res) {
      res.setEncoding('utf-8');
  
      var responseString = '';
  
      res.on('data', function(data) {
        responseString += data;
      });
  
      res.on('end', function() {
        console.log(responseString);
        //var responseObject = JSON.parse(responseString);
        //success(responseObject);
        success(responseString);
      });
    });
  
    req.write(dataString);
    req.end();
  }

/* GET home page. */
router.get('/email', function(req, res, next) {
	
	// create reusable transporter object using the default SMTP transport  
    /*var transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "web.admin@imaginxp.com", // generated ethereal user
            pass: "ImaginXP1"  // generated ethereal password
        },
		requireTLS : true
    });

    // setup email data with unicode symbols
    var mailOptions = {
        from: 'web.admin@imaginxp.com', // sender address
        to: 'naval@mobigic.com', // list of receivers
        subject: 'Test Email From NodeJS', // Subject line
        text: 'Hi All,\nPlease reply once so that I know you are receiving the emails\nRegards,\nNaval', // plain text body
        html: '<b>Hi All,\nPlease reply once so that I know you are receiving the emails\nRegards,\nNaval</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });*/
	res.render('index', { title: 'Express' });
});

module.exports = router;
