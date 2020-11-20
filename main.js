canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 130;
car1_height = 50;
car1_x = 10;
car1_y = 220;
car2_width = 130;
car2_height = 50;
car2_x = 10;
car2_y = 310;
background_img = "https://media-public.canva.com/MADnOLZcZLQ/1/thumbnail_large.jpg";
car1_img = "https://media-public.canva.com/uPA7U/MADWEluPA7U/3/tl.png";
car2_img = "https://media-public.canva.com/p0H90/MADb3tp0H90/2/tl.png";
function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_img;

    car1_imgtag = new Image();
    car1_imgtag.onload = uploadCar1;
    car1_imgtag.src = car1_img;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadCar2;
    car2_imgtag.src = car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    if (car1_x <= 670) {
        ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
    }
    if (car1_x == 670) {
        win('Car 1');
    }
}

function uploadCar2() {

    if (car2_x <= 670) {
        ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height);
    }
    if (car2_x == 670) {
        win('Car 2')
    }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.ctrlKey && keypressed == '39') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        uploadBackground();
        uploadCar2();
        move1();
        console.log("Left Pressed");
    }
    if (e.shiftKey && keypressed == '39') {
        move2();
        console.log("Right Pressed");
    }
    if (keypressed == '8') {
        restart();
        console.log("Backspace Pressed");
    }
}

function move1() {
    car1_x += 10;
    car1_imgtag = new Image();
    car1_imgtag.onload = uploadCar1;
    car1_imgtag.src = car1_img;
}

function move2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    uploadBackground();
    uploadCar1();
    car2_x += 10;
    car2_imgtag = new Image();
    car2_imgtag.onload = uploadCar2;
    car2_imgtag.src = car2_img;
}

function win(txt) {
    alert(txt + ' wins!');
    window.location.reload();
}
function restart() {
    window.location.reload();
}
