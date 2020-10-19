function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      h3 = li[i].getElementsByTagName("h3")[0];
      txtValue = h3.textContent || h3.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


var imageContainer = document.getElementById("top-image");
var range = document.getElementById("range-input");
var imageContainer2 = document.getElementById("top-image2");
var range2 = document.getElementById("range-input2");
var imageContainer3 = document.getElementById("top-image3");
var range3 = document.getElementById("range-input3");
var imageContainer4 = document.getElementById("top-image4");
var range4 = document.getElementById("range-input4");
var imageContainer5 = document.getElementById("top-image5");
var range5 = document.getElementById("range-input5");
var imageContainer6 = document.getElementById("top-image6");
var range6 = document.getElementById("range-input6");
var imageContainer7 = document.getElementById("top-image7");
var range7 = document.getElementById("range-input7");
var imageContainer8 = document.getElementById("top-image8");
var range8 = document.getElementById("range-input8");
var imageContainer9 = document.getElementById("top-image9");
var range9 = document.getElementById("range-input9");

var imageContainer10 = document.getElementById("top-image10");
var range10 = document.getElementById("range-input10");
var imageContainer11 = document.getElementById("top-image11");
var range11 = document.getElementById("range-input11");
var imageContainer12 = document.getElementById("top-image12");
var range12 = document.getElementById("range-input12");
var imageContainer13 = document.getElementById("top-image13");
var range13 = document.getElementById("range-input13");
var imageContainer14 = document.getElementById("top-image14");
var range14 = document.getElementById("range-input14");
var imageContainer15 = document.getElementById("top-image15");
var range15 = document.getElementById("range-input15");
var imageContainer16 = document.getElementById("top-image16");
var range16 = document.getElementById("range-input16");
var imageContainer17 = document.getElementById("top-image17");
var range17 = document.getElementById("range-input17");
var imageContainer18 = document.getElementById("top-image18");
var range18= document.getElementById("range-input18");
var imageContainer19 = document.getElementById("top-image19");
var range19 = document.getElementById("range-input19");
var imageContainer20 = document.getElementById("top-image20");
var range20 = document.getElementById("range-input20");
var imageContainer21 = document.getElementById("top-image21");
var range21 = document.getElementById("range-input21");
var imageContainer22 = document.getElementById("top-image22");
var range22 = document.getElementById("range-input22");
var imageContainer23 = document.getElementById("top-image23");
var range23 = document.getElementById("range-input23");
var imageContainer24 = document.getElementById("top-image24");
var range24 = document.getElementById("range-input24");
var imageContainer25 = document.getElementById("top-image25");
var range25 = document.getElementById("range-input25");
var imageContainer26 = document.getElementById("top-image26");
var range26 = document.getElementById("range-input26");
var imageContainer27 = document.getElementById("top-image27");
var range27= document.getElementById("range-input27");
var imageContainer28 = document.getElementById("top-image28");
var range28 = document.getElementById("range-input28");
var imageContainer29 = document.getElementById("top-image29");
var range29 = document.getElementById("range-input29");
var imageContainer30 = document.getElementById("top-image30");
var range30 = document.getElementById("range-input30");
var imageContainer31 = document.getElementById("top-image31");
var range31= document.getElementById("range-input31");
var imageContainer32 = document.getElementById("top-image32");
var range32= document.getElementById("range-input32");


range.oninput = function() {
  imageContainer.style.width = this.value + "%";
}

range2.oninput = function() {
  imageContainer2.style.width = this.value + "%";
}

range3.oninput = function() {
  imageContainer3.style.width = this.value + "%";
}

range4.oninput = function() {
  imageContainer4.style.width = this.value + "%";
}

range5.oninput = function() {
  imageContainer5.style.width = this.value + "%";
}

range6.oninput = function() {
  imageContainer6.style.width = this.value + "%";
}

range7.oninput = function() {
  imageContainer7.style.width = this.value + "%";
}

range8.oninput = function() {
  imageContainer8.style.width = this.value + "%";
}

range9.oninput = function() {
  imageContainer9.style.width = this.value + "%";
}

range10.oninput = function() {
  imageContainer10.style.width = this.value + "%";
}

range11.oninput = function() {
  imageContainer11.style.width = this.value + "%";
}

range12.oninput = function() {
  imageContainer12.style.width = this.value + "%";
}

range13.oninput = function() {
  imageContainer13.style.width = this.value + "%";
}

range14.oninput = function() {
  imageContainer14.style.width = this.value + "%";
}

range15.oninput = function() {
  imageContainer15.style.width = this.value + "%";
}

range16.oninput = function() {
  imageContainer16.style.width = this.value + "%";
}

range17.oninput = function() {
  imageContainer17.style.width = this.value + "%";
}

range18.oninput = function() {
  imageContainer18.style.width = this.value + "%";
}

range19.oninput = function() {
  imageContainer19.style.width = this.value + "%";
}

range20.oninput = function() {
  imageContainer20.style.width = this.value + "%";
}

range21.oninput = function() {
  imageContainer21.style.width = this.value + "%";
}

range22.oninput = function() {
  imageContainer22.style.width = this.value + "%";
}
range23.oninput = function() {
  imageContainer23.style.width = this.value + "%";
}

range24.oninput = function() {
  imageContainer24.style.width = this.value + "%";
}

range25.oninput = function() {
  imageContainer25.style.width = this.value + "%";
}

range26.oninput = function() {
  imageContainer26.style.width = this.value + "%";
}

range27.oninput = function() {
  imageContainer27.style.width = this.value + "%";
}

range28.oninput = function() {
  imageContainer28.style.width = this.value + "%";
}

range29.oninput = function() {
  imageContainer29.style.width = this.value + "%";
}

range30.oninput = function() {
  imageContainer30.style.width = this.value + "%";
}

range31.oninput = function() {
  imageContainer31.style.width = this.value + "%";
}

range32.oninput = function() {
  imageContainer32.style.width = this.value + "%";
}

