




canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown" , my_mousedown );

function my_mousedown (e)

{ 

    color=document.getElementById ("color").value;


    console.log (color);

    mouse_x = e.clientX - canvas.offsetLeft;

    mouse_y = e.clientY - canvas.offsetTop;

    console.log (" X = " + mouse_x +",Y = " + mouse_y);

    circle(mouse_x , mouse_y);

}

function circle (mouse_x , mouse_y) 
{
  

    

    ctx.beginPath ();

    ctx.stroleStyle = color;

    ctx.lineWidth = 2;
    ctx.arc (mouse_x , mouse_y , 40,0,2*Math.PI);


    ctx.stroke ();

}


function mytouchstart (e)

{ 

    console.log ("mytouchstart");

    last_postion_of_x = e.touches [0].clientX - canvas.offsetLeft;

    last_postion_of_y = e.touches [0].clientY - canvas.offsetTop;



}


function mytouchmove (e)

{ 
    console.log ("mytouchmove");

    current_x = e.touches[0].clientX - canvas.offsetLeft;

    current_y = e.touches [0].clientY - canvas.offsetTop;

    ctx.beginPath();

    ctx.storkeStyle - color;

    ctx.lineWidth - width_of_line;

    ctx.moveTo(last_position_of_touch_x , last_position_of_touch_y);

    ctx.lineto(current_position_of_touch_x ,  current_position_of_touch_y);

    ctx.stroke();


last_position_of_touch_x = current_position_of_touch_x;

last_position_of_touch_y = current_position_of_touch_y;


}
    


canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)

{ 

    current_position_of_touch_x - e.clientX - canvas.offsetLeft;

    current_position_of_touch_y - e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {



    ctx.beginPath ();

    ctx.storkeStyle = color;

    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_mouse_x , current_position_of_mouse_y);

    ctx.stroke ();

}



last_position_of_touch_x = current_position_of_mouse_x

last_postion_of_y = current_position_of_mouse_y




}















