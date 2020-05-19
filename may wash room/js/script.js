$(function() {
  // jQuery goes here...
$(h3).fadeOut(2000);
//   // Uncomment this line to fade out the red box on page load
// $(".red-box").fadeOut(2000);
// $(".green-box").fadeOut(4000);
// $(".blue-box").fadeOut(6000);
// $("#content ").prepend("<h1>im Adeola Daniel")
 // $(".red-box").after("<div class = 'red-box'>another red box</div>")
 // $(".green-box").after("<div class = 'green-box'>green buddy</div>")
 // $(".blue-box").after("<div class = 'blue-box'>blue box friend</div>")

 // $("li").replaceWith("<li>replaced</li>")
 // var firstListItem = $("li:first");
 // $("p:first").replaceWith(firstListItem);
 // var greenBox = $("<div class = green-box> more  green </div>")
 // var blueToGreen = $("<div class = green-box> more  green </div>")
 // $(".red-box").replaceWith(greenBox);
 //  $(".blue-box").replaceWith(blueToGreen);
 // $(".red-box, .blue-box").replaceWith("<div class = green-box> more green </div>")
 // $("<div class = green-box> more green!D</div>").replaceAll(".red-box, .blue-box");
 // $("form").children().not("input:text, textarea, br").remove();
 // var detachListItem = $("li").detach();
 // $("#content").append(detachListItem);
 // $("p:first").empty();
 // $(".red-box").empty();
 // $(".green-box").empty();
 // $(".blue-box").empty();
// $(".blue-box").before(function(){
	// return "<div class = 'blue-box'> Blue box 2 </div>"
// })
// 
// $("button").click(function(){
// 	$(".red-box, .green-box, .blue-box").fadeTo(2000,0);
// });
// $(".fade").click(function(){
// 	$(".red-box, .green-box, .blue-box").fadeTo(1000,100);
// })


var galleryImage = $(".gallery").find("img").first();
var images = [
		"images/laptop-mobile_small.jpg",
		"images/laptop-on-table_small.jpg",
		"images/people-office-group-team_small.jpg",

		
];


var i = 0;
setInterval(function(){

	i = (i + 1) % images.length;
	galleryImage.fadeOut(function(){
		$(this).attr("src", images[i]);
		$(this).fadeIn( 7000);
	})
	console.log(galleryImage.attr("src"));
});
 // $("p").before($("#list"))

// $("<li> im gonna be the last item</li>").appendTo("ul ul:first")

// $(".red-box").fadeIn(2000);
// $(".green-box").fadeIn(4000);
// $(".blue-box").fadeIn(6000);

 // $(".red-box").fadeTo(2000, 0, function(){
 // 	$(".green-box").animate(){

 // 	}(2000, 0,function(){
 // 		$(".blue-box").fadeTo(2000,0,)
 // 	});
 // });
 // $(".green-box").delay(500).fadeTo(4000,0.5);
 // $(".blue-box").delay(500).fadeTo(6000, 0.8).fadeOut().delay().fadeIn();
// $(".lightbox").delay(500).fadeIn(2000);
	// $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
	// $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
	// $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
		// $("h1, h2").next().css("background-color", "rgba(180, 180, 30, 0.8)");
		// $("input").children().css("background-color", "rgba(180, 180, 40, 0.8)");
		// $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
		// $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
		// $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
		// $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");
		// $("li").not(function(index){
			// return index % 3 ===2;
		// }).css("background-color", "rgba(180, 180, 30, 0.8)");
	// $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
	// $("li").filter(function(index){
		// return index % 3 === 2;
	// }).css("background-color", "rgba(180, 180, 30, 0.8)");

	
// $(".blue-box").hide(1000);
 // $(".blue-box").animate({

 // 	marginLeft:'+=200px',
 // 	marginRight:"-=200px",
 // 	opacity :"0",
 // 	height:"50px",
 // 	width:"50px",
 // 	marginTop:"25px",
 // 	borderRadius:"50px",

 // }, 1000);

 // $("p").animate({
 // 	fontSize: "40px",

 // }, 2000);

 // $("p").hide();
  $("p").slideDown(2000);
});
// onClick(){
// 	$(".red-box").fadeTo(2000);
// };