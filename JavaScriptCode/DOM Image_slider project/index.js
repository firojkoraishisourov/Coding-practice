
let photos = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg"];
let imgTag = document.querySelector("img");

let count = 0;
function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src=photos[count];
    }else{
        imgTag.src=photos[count];
    }
    
}

function prev(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        imgTag.src=photos[count];
    }else{
        imgTag.src=photos[count];
    }

}