  //Create a IMG-CONTAINER element with class IMG
  var imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img");

  //Create a IMG element with SRC
  var newImgElement = document.createElement("img");
  newImgElement.src = preview;

 // Append IMG into IMG-CONTAINER
 imgContainer.appendChild(newImgElement);

   // Append IMG-CONATINER into CARD-LINK
   cardLink.appendChild(imgContainer);
   cardLink.appendChild(deatils);
 

// Product Preview Image 0
var photo0 = document.getElementById("one");
photo0.src = one;

// Product Preview Image 1
var photo1 = document.getElementById("two");
photo1.src = two;

// Product Preview Image 2
var photo2 = document.getElementById("three");
photo2.src = three;

// Product Preview Image 3
var photo3 = document.getElementById("four");
photo3.src = four;

// Product Preview Image 4
var photo4 = document.getElementById("five");
photo4.src = five;


// ---------------- Change Preview Image OnClick -------
function changeImage() {
    // Photo 0
    photo0.addEventListener("click", function() {
      productImg.src = one;
    });

    // Photo 1
    photo1.addEventListener("click", function() {
      productImg.src = two;
    });
    // Photo 2
    photo2.addEventListener("click", function() {
      productImg.src = three;
    });

    // Photo 3
    photo3.addEventListener("click", function() {
      productImg.src = four;
    });

    // Photo 4
    photo4.addEventListener("click", function() {
      productImg.src = five;
    });


    // Toggle Active Class
    $(document).on("click", ".image img", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
    changeImage();

  