
      // Product Preview Image 0
  var photo0 = document.getElementById("one");
  photo0.src = new URL('https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg');

  // Product Preview Image 1
  var photo1 = document.getElementById("two");
  photo1.src = new URL('https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg');

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
      mainImg.src = one;
    });

    // Photo 1
    photo1.addEventListener("click", function() {
      mainImg.src = new URL('https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg');
    });

    // Photo 2
    photo2.addEventListener("click", function() {
      mainImg.src = three;
    });

    // Photo 3
    photo3.addEventListener("click", function() {
      mainImg.src = four;
    });

    // Photo 4
    photo4.addEventListener("click", function() {
      mainImg.src = five;
    });

    // Toggle Active Class
    $(document).on("click", ".image img", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  
  changeImage();
}

  