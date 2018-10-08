var default_city = "PUNE";
var slides_to_show = 4;	//	on main page
var cities = ["PUNE","JAIPUR","DELHI","MUMBAI","HYDERABAD","BANGALORE","NAGPUR","AMRAVATI"];
var cities_radius = [0.5,0.5,0.5,0.5,0.5,0.5,0.5];	//These ditances are in latitude, 1 latitude = 111km and 1 long on equator = 111km.
var cities_latlong = [[18.5246165,73.8629674],[26.8852107,75.7905578],[28.5846446,77.2622957],[19.0822507,72.8811862],[17.4123487,78.4080455],[30.3254285,78.0171347],[12.9539974,77.6309395]];
var addresses = [
					"Nanasaheb Gaikwad Information Technology Park, Sarja Road, Aundh, Pune, Maharashtra 411007 Contact : +91 7030264004",
					"E-66, Bhagat Singh Marg, C-Scheme, Jaipur-302001 Contact : +91 9929091809",
					"WORKLY , Plot no. 1, second floor, Lajpat Nagar IV, Ring Road, Above Axis bank,New Delhi, Delhi 110024 Contact : +91 8700675382 ",
					"Venture Catalysts, 203-206, B Wing, Mittal Commercial, Near T2 International Airport Terminal, Asan Pada Road, Marol, Mumbai, Maharashtra 4400059 Contact : +91 7030264004",
					"CLO Work 103, First floor, New Mark House, Opposite Maxcure Hospital, Hitech city Road Hyderabad,Telangana 500033 Contact : +91 9908008650. ",
				
  "ImaginXP, Lorven workspace,11/No 7, 4th floor, 80 feet road, 7th block,Kormangala, Next to Reliance Trends, Bangalore-560095. Contact :  +91 8861508513 ",
  "Plot no. : 485, Anand Nagar, Sangam Talkies Road, Opp Chandrabhaga Oil Mill, Nagpur Contact : +919738442500",
  "Shop No.12, Gulshan Plaza, Near Bhartiya Vidyalaya, Rajapeth, Amravati. Pin - 444 605. Contact : +918887681500, email: info.amravati@imginxp.com"
  
  ];

function findDirtyDiv() {
	var docWidth = document.documentElement.offsetWidth;
console.log(docWidth);
	[].forEach.call(
	  document.querySelectorAll('*'),
	  function(el) {
		if (el.offsetWidth > docWidth) {
		  console.log(el);
		  //console.log(el.offsetWidth);
		}
	  }
	);
}
(function ($) {
    'use strict';

		$(document).ready(function() {
			// -----------------------------
			//  Client Slider
			// -----------------------------
			function toggleIcon(e) {
    		$(e.target)
				.prev('.panel-heading')
				.find(".more-less")
				.toggleClass('glyphicon-plus glyphicon-minus');
			}
			$('.panel-group').on('hidden.bs.collapse', toggleIcon);
			$('.panel-group').on('shown.bs.collapse', toggleIcon);

			highlightCurrentPage();
			var cityCurrent = getCookie('ixp_city');
			changeCityTo(cityCurrent);

			if(cityCurrent == undefined)
				seekUserLocation();

			findDirtyDiv();
		});

    $(window).on('load', function () {
    });

		$(window).on("resize", function () {
    		// Set .right's width to the window width minus 480 pixels
    		//$(".content .right").width( $(this).width() - 480 );
				var windowWidth = $(this).width();
				//console.log('' + windowWidth);

				//	calculate the number of slides to be shown for main page
				if(windowWidth >= 1186)
					slides_to_show = 4;
				else if (windowWidth > 892)
					slides_to_show = 3;
				else if(windowWidth > 650)
					slides_to_show = 2;
				else
					slides_to_show = 1;


				if ( windowWidth >= 983) {
					//Add your javascript for large screens here
					initSliderJobOpportunitySlider(3);
					initSliderCompaniesSlider(4);
					initSliderHireDesignerSlider(6);
					initSliderStudentSaySlider(3);
					initSliderRecomndForSlider(5);
					initSliderRecomndForUserResearchSlider(3);
					$('#address_text').attr("rows", "2");
				}
				else if(windowWidth >= 751 && windowWidth < 983) {
				  //Add your javascript for small screens here
					initSliderJobOpportunitySlider(2);
					initSliderCompaniesSlider(3);
					initSliderHireDesignerSlider(3);
					initSliderStudentSaySlider(2);
					initSliderRecomndForSlider(3);
					initSliderRecomndForUserResearchSlider(2);
					$('#address_text').attr("rows", "3");
				} else {
					initSliderJobOpportunitySlider(1);
					initSliderCompaniesSlider(2);
					initSliderHireDesignerSlider(1);
					initSliderStudentSaySlider(1);
					initSliderRecomndForSlider(1);
					initSliderRecomndForUserResearchSlider(1);
					$('#topbar_desktop').css("display", "none");
					$('#topbar_mobile').css("display", "inline");
					$('#dropmenu_mobile').css("display", "block");
					$('#dropmenu_desktop').css("display", "none");
					$('.mobile_enroll').css("display", "block");
					$('.desktop_enroll').css("display", "none");
					$('#address_text').attr("rows", "5");
				}

		}).resize();// Invoke the resize event immediately

})(jQuery);

function initSliderJobOpportunitySlider(slidesToShow) {
	$('.job-opportunities').slick({
			slidesToShow: slidesToShow,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 1000,
			pauseOnHover: true,
			pauseOnFocus: false,
			dots: false,
			infinite: true,
			speed: 500,
	});
}

function initSliderCompaniesSlider(slidesToShow) {
	$('.our-trainers-work-at').slick({
			slidesToShow: slidesToShow,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 1000,
			pauseOnHover: true,
			pauseOnFocus: false,
			dots: false,
			infinite: true,
			speed: 500,
	});

	/*$('#city_courses').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 1000,
			pauseOnHover: true,
			pauseOnFocus: false,
			dots: false,
			infinite: true,
			speed: 500,
	});*/

	/*var stHeight = $('#naval').find('.slick-track').height();
	$('#naval').find('.slick-slide').css('height',stHeight + 'px' );*/
}

function initSliderHireDesignerSlider(slidesToShow) {
	$('.hire_our_designer').slick({
			slidesToShow: slidesToShow,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 1000,
			pauseOnHover: true,
			pauseOnFocus: false,
			dots: false,
			infinite: true,
			speed: 500,
	});
}

function initSliderStudentSaySlider(slidesToShow) {
	$('.student_say').slick({
			slidesToShow: slidesToShow,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 1000,
			pauseOnHover: true,
			pauseOnFocus: false,
			dots: false,
			infinite: true,
			speed: 500,
			adaptiveHeight: true
	});

	$('.slides').on('setPosition', function () {
      $(this).find('.slide-container').height('auto');
      var slickTrack = $(this).find('.slick-track');
      var slickTrackHeight = $(slickTrack).height();
      $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
});
}

function initSliderRecomndForSlider(slidesToShow) {
	$('.recomnd_for_slider').slick({
			slidesToShow: slidesToShow,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 1000,
			pauseOnHover: true,
			pauseOnFocus: false,
			dots: false,
			infinite: true,
			speed: 500,
			adaptiveHeight: true
	});
}

function initSliderRecomndForUserResearchSlider(slidesToShow) {
	$('.recomnd_for_slider_userresearch').slick({
			slidesToShow: slidesToShow,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 1000,
			pauseOnHover: true,
			pauseOnFocus: false,
			dots: false,
			infinite: true,
			speed: 500,
			adaptiveHeight: true
	});
}

		function headernoshow(city) {

					 $("#Pune").css("display", "none"); $("#Jaipur").css("display", "none"); $("#Hyderabad").css("display", "none");$("#Mumbai").css("display", "none"); $("#Dehradun").css("display", "none"); $("#Delhi").css("display", "none"); $("#Gurgaon").css("display", "none"); $("#Banglore").css("display", "none");
					 $("#" + city).css("display", "inline").attr('style', 'text-decoration:none;');

			 }



/*$(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue == settings.scrollTopPx || scrollValue > 70) {
         $('.navbar').addClass('navbar');
    }
});*/

var toggleAffix = function(eleNavBar, wrapperDiv, scrollElement) {

    var height = eleNavBar.outerHeight(),
        top = wrapperDiv.offset().top;

	//	console.log("height of navbar " + height + ", top of wrapperDiv " + top + ", scrollElement " + scrollElement.scrollTop() );

	var isLightTheme = $("#light-logo").length == 1;
	wrapperDiv.height('auto');
        eleNavBar.addClass("affix");
	//	WHILE IN SCROLLDOWN STAGE
    if (scrollElement.scrollTop() >= 20){
        //wrapperDiv.height(height);
        //eleNavBar.addClass("affix");

		if(isLightTheme) {
			$('.navbar').css('background-color', 'black');

			//	Since scrolling, add dark navbar and remove light one
			$('.navbar').addClass('navbar-dark');
			$('.navbar').removeClass('navbar-light');

			//	Since we are adding light navbar, we will add normal signing class and remove light one
			$('#div_sign_in').addClass('sign_in_button');
			$('#div_sign_in').removeClass('sign_in_button_light');
		} else {
			$('.navbar').css('background-color', 'black');
		}

		$("#light-logo").attr("src","images/logo.png");
    }
	//	WHILE ON TOP
    else {
        //eleNavBar.removeClass("affix");
//        wrapperDiv.height('auto');
		if(isLightTheme) {
			if($('.navbar-toggler').css('display') == 'none') {
				$('.navbar').css('background-color', 'transparent');
				$('.navbar').removeClass('navbar-dark');
				$('.navbar').addClass('navbar-light');
				$('#div_sign_in').removeClass('sign_in_button');
				$('#div_sign_in').addClass('sign_in_button_light');
				$("#light-logo").attr("src","images/logo_for_white.png");
			} else {
				$('.navbar').css('background-color', 'black');
				$("#light-logo").attr("src","images/logo.png");

				//	Since scrolling, add dark navbar and remove light one
				$('.navbar').addClass('navbar-dark');
				$('.navbar').removeClass('navbar-light');

				//	Since we are adding light navbar, we will add normal signing class and remove light one
				$('#div_sign_in').addClass('sign_in_button');
				$('#div_sign_in').removeClass('sign_in_button_light');
			}
		} else {
			if($('.navbar-toggler').css('display') == 'none') {
				$('.navbar').css('background-color', 'transparent');
				$("#light-logo").attr("src","images/logo_for_white.png");
			} else {
				$('.navbar').css('background-color', 'black');
				$("#light-logo").attr("src","images/logo.png");
			}
		}

    }
  };


  $('[data-toggle="affix"]').each(function() {
    var eleNavBar = $(this),
        wrapperDiv = $('<div></div>');

    eleNavBar.before(wrapperDiv);
    $(window).on('scroll resize', function() {
		toggleAffix(eleNavBar, wrapperDiv, $(this));
    });

    // init
    toggleAffix(eleNavBar, wrapperDiv, $(window));
  });

  /*	SEEK GEO LOCATION */
	function onPositionFound(position) {
		/*var place = "Latitude: " + position.coords.latitude +
		"\nLongitude: " + position.coords.longitude;
		console.log(place);*/

		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		var city_index = 0;
		for(var i = 0; i < cities_latlong.length; i++) {
			var lat_diff = cities_latlong[i][0] - latitude;
			var long_diff = cities_latlong[i][1] - longitude;

			//console.log("lat sq = " + (lat_diff*lat_diff) + ", long sq = " + (long_diff*long_diff) + ", rad sq = " + (cities_radius[i] * cities_radius[i]))

			if((lat_diff*lat_diff) + (long_diff*long_diff) < (cities_radius[i] * cities_radius[i])) {
				city_index = i;
				break;
			}
		}

		//console.log(cities[city_index]);
		changeCityTo(cities[city_index]);
	}

	function seekUserLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(onPositionFound);
		} else {
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
	}

  /* SCROLL TO ENROLL FORM */

	function goToByScroll(id){
		// Remove "link" from the ID
		id = id.replace("link", "");
		// Scroll
		$('html,body').animate({
			scrollTop: $("#"+id).offset().top},
			'slow');
	}

  /* SENDING EMAIL SECTION */

  function sendEmails(name_id, mobile_id, email_id, city_id, college_id, org_id, designation_id, query_id, additional_data_id,mail_subj) {
	//	document.title gets you the title of the page that you may need to send the email

	var mail_subj = (name_id.includes('_bottom') ? '(Bottom) - ' : '') + document.title;

	var mail_body = "";
	var Name = "";
	var Mobile ="";
	var Email  ="";
	var City  ="";

	if ($("#" + name_id).val().match('^[a-zA-Z ]{3,16}$') == null) {
		alert("Please enter your valid name");
		return false;
	} else {
		if(name_id != null)
			mail_body += "\n" + "Name - " + $("#" + name_id).val();
			Name = $("#" + name_id).val();
	}

	if ($("#" + mobile_id).val().match('^[0-9]{10}$') < 10) {
		alert("Please enter a valid mobile number");
		return false;
	} else {
		if(mobile_id != null)
			mail_body += "\n" + "Mobile - " + $("#" + mobile_id).val();
			Mobile=$("#" + mobile_id).val();
	}

	if (!validateEmail($("#" + email_id).val())) {
		alert("Please enter a valid email id");
		return false;
	} else {
		if(email_id != null)
			mail_body += "\n" + "Email - " + $("#" + email_id).val();
			Email=$("#" + email_id).val();
	}

	if(city_id != null && $("#" + city_id).val().match('^[a-zA-Z ]{3,16}$') == null) {
		alert("Please enter a valid city name");
		return false;
	} else {
		if(city_id != null)
			mail_body += "\n" + "City - " + $("#" + city_id).val();
			City=$("#" + city_id).val();
	}

	if(college_id != null && $("#" + college_id).val().length ==0) {
		alert("Please enter Institute / College Name");
		return false;
	} else {
		if(college_id != null)
			mail_body += "\n" + "College - " + $("#" + college_id).val();
	}

	if(org_id != null && $("#" + org_id).val().length ==0) {
		alert("Please enter Name of your Organization");
		return false;
	} else {
		if(org_id != null)
			mail_body += "\n" + "Name - " + $("#" + org_id).val();
	}

	if(designation_id != null && $("#" + designation_id).val().length ==0) {
		alert("Please enter your Designation");
		return false;
	} else {
		if(designation_id != null)
			mail_body += "\n" + "Designation - " + $("#" + designation_id).val();
	}

	if(query_id != null && $("#" + query_id).val().length ==0) {
		alert("Please enter your query");
		return false;
	} else {
		if(query_id != null)
			mail_body += "\n" + "Query - " + $("#" + query_id).val();
	}

	if(additional_data_id != null)
		mail_body += "\n" + "Additional Info - " + $("input[name='" + additional_data_id + "']:checked").val();

	//var datatosend = $("#frmCorporate").serialize();
	//$("#UploadProgress").show();
	//alert("all is well");
	//window.location.href = "thankyou.html";
	/*$.post("/Home/SendEmail/", datatosend, function (Result) {
		if (Result.success) {
			$("#UploadProgress").hide();
			$('#name').val(""); $('#email').val(""); $('#institute').val(""); $('#mobileno').val(""); $('#designation').val(""); $('#query').val("");
			window.location.href = "/Home/ThankuForm";
		}
		else {
			$("#UploadProgress").hide();
			alert('Sending Failed');
		}
	});*/

//Zoho API Call's in html/index.html

	//  var postData = {
	// 	 data: [
	// 		 {
	// 			Last_Name: Name,
	// 			Phone: Mobile,
	// 			Email: Email,
	// 			City:City,
	// 			Description: mail_subj

	// 		 }
	// 	 ]
	//  }
	//  $.ajax({
	// 	 url: 'https://www.zohoapis.com/crm/v2/Leads',
	// 	 type: 'post',
	// 	 data: JSON.stringify(postData),
	// 	 crossDomain: true,
		
	// 	 headers: {
	// 					 Authorization: 'afe5e362bf8bd22223c090b63f43bb93',
	// 		 "Content-Type": 'application/json',
	// 		 'Access-Control-Allow-Origin': '*'
	// 	 },
	// 	 dataType: 'json',
	// 	 success: function (data) {
	// 		console.log("Success");
	// 		 //debugger
	// 	 }, error: function(error) {
	// 		console.log("Fail");
			
	// 			//console.log(XMLHttpRequest);
	// 			//console.log(textStatus);
	// 			console.log(error);
	// 		 //debugger
	// 	  }
	//  });
	
 
 



	 shootEmailNow(mail_subj, mail_body, true);
	return true;
}

  function sendEmail(name_id, mobile_id, email_id, city_id, college_id, org_id, designation_id, query_id, additional_data_id) {
		//	document.title gets you the title of the page that you may need to send the email

		var mail_subj = (name_id.includes('_bottom') ? '(Bottom) - ' : '') + document.title;
		
		var mail_body = "";
		var Name = "";
		var Mobile ="";
		var Email  ="";
		var City  ="";

		

        if ($("#" + name_id).val().match('^[a-zA-Z ]{3,16}$') == null) {
            alert("Please enter your valid name");
			return false;
        } else {
			if(name_id != null)
				mail_body += "\n" + "Name - " + $("#" + name_id).val();
				Name =$("#" + name_id).val();
				
		}

		if ($("#" + mobile_id).val().match('^[0-9]{10}$') < 10) {
            alert("Please enter a valid mobile number");
			return false;
        } else {
			if(mobile_id != null)
				mail_body += "\n" + "Mobile - " + $("#" + mobile_id).val();
				Mobile = $("#" + mobile_id).val();
		}

		if (!validateEmail($("#" + email_id).val())) {
            alert("Please enter a valid email id");
			return false;
        } else {
			if(email_id != null)
				mail_body += "\n" + "Email - " + $("#" + email_id).val();
				Email = $("#" + email_id).val();
		}

		if(city_id != null && $("#" + city_id).val().match('^[a-zA-Z ]{3,16}$') == null) {
			alert("Please enter a valid city name");
			return false;
		} else {
			if(city_id != null)
				mail_body += "\n" + "City - " + $("#" + city_id).val();
				City =  $("#" + city_id).val();
		}

		if(college_id != null && $("#" + college_id).val().length ==0) {
			alert("Please enter Institute / College Name");
			return false;
		} else {
			if(college_id != null)
				mail_body += "\n" + "College - " + $("#" + college_id).val();
		}

		if(org_id != null && $("#" + org_id).val().length ==0) {
			alert("Please enter Name of your Organization");
			return false;
		} else {
			if(org_id != null)
				mail_body += "\n" + "Name - " + $("#" + org_id).val();
		}

		if(designation_id != null && $("#" + designation_id).val().length ==0) {
			alert("Please enter your Designation");
			return false;
		} else {
			if(designation_id != null)
				mail_body += "\n" + "Designation - " + $("#" + designation_id).val();
		}

		if(query_id != null && $("#" + query_id).val().length ==0) {
			alert("Please enter your query");
			return false;
		} else {
			if(query_id != null)
				mail_body += "\n" + "Query - " + $("#" + query_id).val();
		}

		if(additional_data_id != null)
			mail_body += "\n" + "Additional Info - " + $("input[name='" + additional_data_id + "']:checked").val();

		//var datatosend = $("#frmCorporate").serialize();
		//$("#UploadProgress").show();
		//alert("all is well");
		//window.location.href = "thankyou.html";
		/*$.post("/Home/SendEmail/", datatosend, function (Result) {
			if (Result.success) {
				$("#UploadProgress").hide();
				$('#name').val(""); $('#email').val(""); $('#institute').val(""); $('#mobileno').val(""); $('#designation').val(""); $('#query').val("");
				window.location.href = "/Home/ThankuForm";
			}
			else {
				$("#UploadProgress").hide();
				alert('Sending Failed');
			}
		});*/

//Zoho API Call's in html/index.html

	// var postData = {
	// 	data: [
	// 		{
	// 		   Last_Name: Name,
	// 		   Phone: Mobile,
	// 		   Email: Email,
	// 		   City: City,
	// 		   Description: mail_subj

	// 		}
	// 	]
	// }
	// $.ajax({
	// 	url: 'https://www.zohoapis.com/crm/v2/Leads',
	// 	type: 'post',
	// 	data: JSON.stringify(postData),
	// 	crossDomain: true,
	// 	headers: {
	// 		Authorization: 'afe5e362bf8bd22223c090b63f43bb93',
	// 		"Content-Type": 'application/json'
	// 	},
	// 	dataType: 'json',
	// 	success: function (data) {
	// 	   console.log("Success");
	// 		//debugger
	// 	}, error: function(XMLHttpRequest, textStatus, error) {
	// 	   console.log(XMLHttpRequest);
	// 	   console.log(textStatus);
	// 	   console.log(error);
	// 		//debugger
	// 	 }
	// });


         shootEmailNow(mail_subj, mail_body, true);
		 return true;
    }

	function subscribeNewsLetter() {
		var mail_body = "";
		if (!validateEmail($("#newsletter_emailid").val())) {
            alert("Please enter a valid email id");
			return;
        } else {
			mail_body += "\n" + "Email - " + $("#newsletter_emailid").val();
		}

		shootEmailNow("Newsletter Subscription", mail_body, false);

		alert("Thank You for subscribing.");
	}

	function shootEmailNow(subject, body, sayThankYou) {
		console.log(subject);
		console.log(body);
		
		/*return;*/
		/*$.ajax({
		  type: "POST",
		  //url: "http://bjs.mobigic.com:3333/sendmail",
		  url: "http://localhost:3000/sendmail",
		  data: {mail_subj: subject, mail_body: body},
		  success: function(data) {
				console.log("received");
				console.log(data);
				if(sayThankYou == true)
					window.location.href = "thankyou";
			},
		  dataType: "application/json"
		});*/

		/*if(sayThankYou == true)
			window.location.href = "thankyou";*/
		$.post(
			//"http://bjs.mobigic.com:3333/sendmail",
			//"https://www.imaginxp.com/sendmail",
			"http://localhost:3000/sendmail",
			{ mail_subj: subject, mail_body: body },
			function( data, status, xhr ) {
				//console.log("yes");
				if(sayThankYou)
					window.location.href = "https://www.imaginxp.com/thankyou";
			},
			"json");
	}

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  /* SENDING EMAIL SECTION */

  /* AUTO TYPING */
	var i = 0;
	var txt = ' ';
	var index = -1;
var txts = ["Interaction Design", "Visual Design", "UX Design", "Workshops", "BDes-User Experience", "MDes-User Experience","PGDM - User Experience"];
	var speed = 50;
	var waitPeriod = 500;
	var forward = true;

	function startTyping() {
		i = 0;
		index++;
		if(index == txts.length)
			index = 0;

		txt = txts[index];
		typeWriter();
	}

	//	Check if we want to type forward or reversed
	//	If typing forward, then wait for each letter until the word is over, once the word is over change to reversed
	//	If typing reverse, then remover each letter until the box is empty, change to next word and change the direction, reset necessary indices

	function typeWriter() {
	  if(forward) {
		if (i < txt.length) {
		  document.getElementById("banner-input").value = txt.substr(0, i+1) + ' |'
		  i++;
		  setTimeout(typeWriter, speed);
		} else {
		  setTimeout(typeWriter, 4*waitPeriod);
		  forward = !forward;
		}
	  } else {
		if (i >= 0) {
		  document.getElementById("banner-input").value = txt.substr(0, i) + ' |';
		  i--;
		  if(i >= 0) {
			setTimeout(typeWriter, speed);
		  } else {
			setTimeout(startTyping, waitPeriod);
			forward = !forward;
		  }
		}
	  }
	}


	/************** course structure**************/
	function courseStructures(filename,subject,message)
	{
		//	Ask the user to fill the form
		//	To fill the form, make the modal appear on the screen
		//	If all is good, then go ahead
		//extracting full path
		injectModalForms(filename,subject);
	
	//	shootEmailNow(subject, message, true);
	}

	function courseStructure(filename)
	{
		//	Ask the user to fill the form
		//	To fill the form, make the modal appear on the screen
		//	If all is good, then go ahead
		//extracting full path
		injectModalForm(filename);
	}

	function injectModalForm(filename) {

		//	Removing to avoid accidental existance of previous modal if any.
		$('#lead_modal').remove();

        var modal_html = '<div id="lead_modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="lead_modal_title" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header border-0"><h5 class="modal-title" id="lead_modal_title">Please provide details to download</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="px-4 row modal-body"><input type="text" class="block col-md-3 form-control" id="name-modal" placeholder="Name"><input type="text" class="block col-md-3 form-control" id="mobile-modal" placeholder="Mobile"><input type="text" class="block col-md-3 form-control" id="email-modal" placeholder="Email ID"><input type="text" class="block col-md-3 form-control" id="city-modal" placeholder="City"></div><div class="modal-footer border-0"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary border-0" style="background-color:#76b94e;" onclick="verifyModalFieldsAndDownload(\'' + filename + '\')">Download</button></div></div></div></div>';

		$("body").append(modal_html);

		$('#lead_modal').modal('show');
		//<a href="#lead_modal" data-toggle="modal" data-target="#lead_modal"><img src="images/home/play_button.png" id="playvideo"/></a>
	}

	function injectModalForms(filename,subject) {

		//	Removing to avoid accidental existance of previous modal if any.
		$('#lead_modal').remove();

		var modal_html = '<div id="lead_modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="lead_modal_title" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header border-0"><h5 class="modal-title" id="lead_modal_title">Please provide details to download</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="px-4 row modal-body"><input type="text" class="block col-md-3 form-control" id="name-modal" placeholder="Name"><input type="text" class="block col-md-3 form-control" id="mobile-modal" placeholder="Mobile"><input type="text" class="block col-md-3 form-control" id="email-modal" placeholder="Email ID"><input type="text" class="block col-md-3 form-control" id="city-modal" placeholder="City"></div><div class="modal-footer border-0"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary border-0" style="background-color:#76b94e;" onclick="verifyModalFieldsAndDownloads(\'' + filename + '\', \'' + subject + '\')">Download</button></div></div></div></div>';

		$("body").append(modal_html);

		$('#lead_modal').modal('show');
		//<a href="#lead_modal" data-toggle="modal" data-target="#lead_modal"><img src="images/home/play_button.png" id="playvideo"/></a>
	}

	function injectEnrollModalForm() {

		//	Removing to avoid accidental existance of previous modal if any.
		$('#lead_modal').remove();

		var modal_html = '<div id="lead_modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="lead_modal_title" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header border-0"><h5 class="modal-title" id="lead_modal_title">Please provide details to Enroll</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="px-4 row modal-body"><input type="text" class="block col-md-3 form-control" id="name-modal" placeholder="Name"><input type="text" class="block col-md-3 form-control" id="mobile-modal" placeholder="Mobile"><input type="text" class="block col-md-3 form-control" id="email-modal" placeholder="Email ID"><input type="text" class="block col-md-3 form-control" id="city-modal" placeholder="City"></div><div class="modal-footer border-0"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary border-0" style="background-color:#76b94e;" onclick="return sendEmail(\'name-modal\',\'mobile-modal\',\'email-modal\',\'city-modal\',null,null, null,null,null);$(\'#lead_modal\').modal(\'hide\');">Enroll Now</button></div></div></div></div>';

		$("body").append(modal_html);

		$('#lead_modal').modal('show');
		//<a href="#lead_modal" data-toggle="modal" data-target="#lead_modal"><img src="images/home/play_button.png" id="playvideo"/></a>
	}

	function verifyModalFieldsAndDownloads(filename,subject) {

		var mail_body = "";

		if ($("#name-modal").val().match('^[a-zA-Z ]{3,16}$') == null) {
            alert("Please enter your valid name");
			return false;
        } else {
			mail_body += "\n" + "Name - " + $("#name-modal").val();
		}

		if ($("#mobile-modal").val().match('^[0-9]{10}$') < 10) {
			alert("Please enter a valid mobile number");
			return false;
        } else {
			mail_body += "\n" + "Mobile - " + $("#mobile-modal").val();
		}

		if (!validateEmail($("#email-modal").val())) {
            alert("Please enter a valid email id");
			return false;
        } else {
			mail_body += "\n" + "Email - " + $("#email-modal").val();
		}

		if($("#city-modal").val().match('^[a-zA-Z ]{3,16}$') == null) {
			alert("Please enter a valid city name");
			return false;
		} else {
			mail_body += "\n" + "City - " + $("#city-modal").val();
		}

		shootEmailNow(subject, mail_body, false);
		//if(sendEmail('name-modal', 'mobile-modal', 'email-modal', 'city-modal', null, null, null, null, null)) {
			showFiles(filename);
			$('#lead_modal').modal('hide');
		//}
	}
	
	function verifyModalFieldsAndDownload(filename) {

		var mail_body = "";

		if ($("#name-modal").val().match('^[a-zA-Z ]{3,16}$') == null) {
            alert("Please enter your valid name");
			return false;
        } else {
			mail_body += "\n" + "Name - " + $("#name-modal").val();
		}

		if ($("#mobile-modal").val().match('^[0-9]{10}$') < 10) {
			alert("Please enter a valid mobile number");
			return false;
        } else {
			mail_body += "\n" + "Mobile - " + $("#mobile-modal").val();
		}

		if (!validateEmail($("#email-modal").val())) {
            alert("Please enter a valid email id");
			return false;
        } else {
			mail_body += "\n" + "Email - " + $("#email-modal").val();
		}

		if($("#city-modal").val().match('^[a-zA-Z ]{3,16}$') == null) {
			alert("Please enter a valid city name");
			return false;
		} else {
			mail_body += "\n" + "City - " + $("#city-modal").val();
		}

        shootEmailNow("Home - " + filename, mail_body, false);
		//if(sendEmail('name-modal', 'mobile-modal', 'email-modal', 'city-modal', null, null, null, null, null)) {
			//alert(filename);
			showFiles(filename);
			$('#lead_modal').modal('hide');
		//}
	}

	function showFile(filename) {
		console.log(filename);
		var href = window.location.href;
		//getting path without filename
		var dir = href.substring(0, href.lastIndexOf('/')) + "/";
		window.open(dir+"/pdf/"+filename,'_blank');
	}

	function showFiles(filename) {
		console.log(filename);
		var href = window.location.href;
		//getting path without filename
		var dir = "https://www.imaginxp.com/pdf/"+filename;//href.substring(0, href.lastIndexOf('/')) + "/";
		
		window.open(dir,'_blank');
	}


	/* highlightCurrentPage */
	function highlightCurrentPage() {
		var url = window.location.pathname;
		var filename = url.substring(url.lastIndexOf('/')+1);

		if(filename == "index" || filename == "" ||  filename == undefined)
			return;

		var atag = $('[href="'+filename+'"]');

		//	If <li> exists then make it active, else make <a> active and also <li> for courses active
		if(atag.parent().length == 1) {
			if(atag.parent().prop('tagName').toLowerCase() == "li") {
				atag.parent().addClass("active");
			} else {
				atag.addClass("active");
				$('.dropmenu').addClass('active');
			}
		}
	}

	function getCityIndex(city) {
		var city_index = 0;
		for(var i = 0; i < cities.length; i++) {
			if(city == cities[i]) {
				city_index = i;
			}
		}
		return city_index;
	}

	/*	change city */
	function changeCityTo(city) {
		var city_index = 0;

		if(city != undefined) {
			for(var i = 0; i < cities.length; i++) {
				if(city == cities[i]) {
					city_index = i;
				}

				$('.' + cities[i]).removeClass('active');
			}

			city = cities[city_index];
			setCookie('ixp_city', city /*, 30*/);
		} else {
			city = default_city;
		}

		$('#address_text').val(addresses[city_index]);
		$('.' + city).addClass('active');
		$('#select_city_from_dropdown').html('<img src="images/home/location_drop_point.png" class="px-2 pb-1"></span>' + city.substr(0,1) + city.substr(1).toLowerCase());
		$('#select_city_from_dropdown_search').html('<img src="images/home/location_drop_point.png" class="px-2 pb-1"></span>' + city.substr(0,1) + city.substr(1).toLowerCase());

		try {
			addCourseDataAsPerCity(city, slides_to_show);
		} catch(err){}

		try {
			showSearchResults(city);
		} catch(err){}

		return false;
	}

	/* COOKIE MANAGEMENT */
	function setCookie(cname,cvalue) {//,exdays) {
		if(Cookies.enabled) {
			Cookies.set(cname, cvalue, { expires: 60/*Infinity*/ });
		} else {

		}

		/*var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";*/
		//alert('document.cookie = ' + document.cookie);
	}

	function getCookie(cname) {
		if(Cookies.enabled)
			return Cookies.get(cname);
		else
			return undefined;//default_city;

		/*var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		//alert('decoded = ' + decodedCookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return default_city;*/
	}

	//////////////////////////////////////////	FUNCTIONS FOR FIND RIGHT COURSE




	////////////////////////////////////////////////////////////////// ADD NOTHING BELOW THIS LINE
/*
 * Cookies.js - 1.2.3
 * https://github.com/ScottHamper/Cookies
 *
 * This is free and unencumbered software released into the public domain.
 */
(function (global, undefined) {
    'use strict';

    var factory = function (window) {
        if (typeof window.document !== 'object') {
            throw new Error('Cookies.js requires a `window` with a `document` object');
        }

        var Cookies = function (key, value, options) {
            return arguments.length === 1 ?
                Cookies.get(key) : Cookies.set(key, value, options);
        };

        // Allows for setter injection in unit tests
        Cookies._document = window.document;

        // Used to ensure cookie keys do not collide with
        // built-in `Object` properties
        Cookies._cacheKeyPrefix = 'cookey.'; // Hurr hurr, :)

        Cookies._maxExpireDate = new Date('Fri, 31 Dec 9999 23:59:59 UTC');

        Cookies.defaults = {
            path: '/',
            secure: false
        };

        Cookies.get = function (key) {
            if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
                Cookies._renewCache();
            }

            var value = Cookies._cache[Cookies._cacheKeyPrefix + key];

            return value === undefined ? undefined : decodeURIComponent(value);
        };

        Cookies.set = function (key, value, options) {
            options = Cookies._getExtendedOptions(options);
            options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);

            Cookies._document.cookie = Cookies._generateCookieString(key, value, options);

            return Cookies;
        };

        Cookies.expire = function (key, options) {
            return Cookies.set(key, undefined, options);
        };

        Cookies._getExtendedOptions = function (options) {
            return {
                path: options && options.path || Cookies.defaults.path,
                domain: options && options.domain || Cookies.defaults.domain,
                expires: options && options.expires || Cookies.defaults.expires,
                secure: options && options.secure !== undefined ?  options.secure : Cookies.defaults.secure
            };
        };

        Cookies._isValidDate = function (date) {
            return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
        };

        Cookies._getExpiresDate = function (expires, now) {
            now = now || new Date();

            if (typeof expires === 'number') {
                expires = expires === Infinity ?
                    Cookies._maxExpireDate : new Date(now.getTime() + expires * 1000);
            } else if (typeof expires === 'string') {
                expires = new Date(expires);
            }

            if (expires && !Cookies._isValidDate(expires)) {
                throw new Error('`expires` parameter cannot be converted to a valid Date instance');
            }

            return expires;
        };

        Cookies._generateCookieString = function (key, value, options) {
            key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
            key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
            value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
            options = options || {};

            var cookieString = key + '=' + value;
            cookieString += options.path ? ';path=' + options.path : '';
            cookieString += options.domain ? ';domain=' + options.domain : '';
            cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
            cookieString += options.secure ? ';secure' : '';

            return cookieString;
        };

        Cookies._getCacheFromString = function (documentCookie) {
            var cookieCache = {};
            var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

            for (var i = 0; i < cookiesArray.length; i++) {
                var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

                if (cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] === undefined) {
                    cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] = cookieKvp.value;
                }
            }

            return cookieCache;
        };

        Cookies._getKeyValuePairFromCookieString = function (cookieString) {
            // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
            var separatorIndex = cookieString.indexOf('=');

            // IE omits the "=" when the cookie value is an empty string
            separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;

            var key = cookieString.substr(0, separatorIndex);
            var decodedKey;
            try {
                decodedKey = decodeURIComponent(key);
            } catch (e) {
                if (console && typeof console.error === 'function') {
                    console.error('Could not decode cookie with key "' + key + '"', e);
                }
            }

            return {
                key: decodedKey,
                value: cookieString.substr(separatorIndex + 1) // Defer decoding value until accessed
            };
        };

        Cookies._renewCache = function () {
            Cookies._cache = Cookies._getCacheFromString(Cookies._document.cookie);
            Cookies._cachedDocumentCookie = Cookies._document.cookie;
        };

        Cookies._areEnabled = function () {
            var testKey = 'cookies.js';
            var areEnabled = Cookies.set(testKey, 1).get(testKey) === '1';
            Cookies.expire(testKey);
            return areEnabled;
        };

        Cookies.enabled = Cookies._areEnabled();

        return Cookies;
    };
    var cookiesExport = (global && typeof global.document === 'object') ? factory(global) : factory;

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function () { return cookiesExport; });
    // CommonJS/Node.js support
    } else if (typeof exports === 'object') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module === 'object' && typeof module.exports === 'object') {
            exports = module.exports = cookiesExport;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.Cookies = cookiesExport;
    } else {
        global.Cookies = cookiesExport;
    }
})(typeof window === 'undefined' ? this : window);
