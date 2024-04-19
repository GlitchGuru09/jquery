// $("h1").text("bye");

// $("button").html("<em>hey</em>")

// console.log($("img").attr("src"));

$("a").attr("href", "https://www.youtube.com/")

// $("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title");



// //normal javascript
// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }


//jquery event listners
// $("button").click(function(){
//     $("h1").css("color", "red");
// });

// $("input").keypress(function(event){
//     console.log(event.key);
// });


// $(document).keypress(function(event){
//     $("h1").text(event.key);
// })


// $("h1").before("<button>new</button>");

// $("h1").after("<button>new</button>");

// $("h1").prepend("<button>new</button>");

// $("h1").append("<button>new</button>");

$(document).keypress(function(event){
    $("h1").text(event.key);
})