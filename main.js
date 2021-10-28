x=0;
y=0;
draw_circle = "";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();

 function start()
 {
     document.getElementById("status").innerhtml= "system is listening please speak";
     if(content=="circle")
     {
         x = Math.floor(math.random() * 900)
         y = Math.floor(math.random() * 600)
         document.getElementById("status").innerHTML= "Started drawing circle";
         draw_circle="set";

     }
     if(content=="rectangle")
     {
        x = Math.floor(math.random() * 900)
        y = Math.floor(math.random() * 600)
        document.getElementById("status").innerHTML= "Started drawing rectangle";
        draw_rect = "set" ;
     }
 }

 function setup() {
     canvas =createCanvas(900,600);

 }

 function draw ()
 {
     if(draw_circle =="set")
     {
         radius = Math.floor(MAth.random()* 100);
         circle(x,y,radius);
         document.getElementById("status").innerHTML =" circle is drawn."
         draw_circle="";

     }
     if (draw_rect=="set")
     {
         rect(x,y,70,50);
         document.getElementById("status").innerHTML = "rectangle id drawn";
         draw_rect="";
     }
 }