var mainImg = document.getElementById("mainImage");
var smllImg = document.getElementsByClassName("small-img");

smllImg[0].onclick = () =>{
    mainImg.src = smllImg[0].src;
}

smllImg[1].onclick = () =>{
    mainImg.src = smllImg[1].src;
}

smllImg[2].onclick = () =>{
    mainImg.src = smllImg[2].src;
}

smllImg[3].onclick = () =>{
    mainImg.src = smllImg[3].src;
}