function gamotvla(){
    var x = document.getElementById("angarishi").value;
    var y = document.getElementById("angarishi2").value;
    
    var c = x * y;
    gamravleba.innerHTML = c + " " + "გამრავლების შედეგი";
    gamravleba.style.color="green";

     c = x / y;
     gayopa.innerHTML = c + " " + "გაყოფის შედეგი";
     gayopa.style.color="blue";
     
     c = x - y;
     gamokleba.innerHTML = c + " " + "გამოკლების შედეგი";
     gamokleba.style.color="red";

}

