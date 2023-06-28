  // let photo = document.getElementsByClassName('thumbnail')
  // for (let i = 0;i<photo.length;i++){
  //   photo[i].addEventListener("click", function(e) {
  //     mainImg.src = e.target.src;
  //   });
  // }

  let photo = document.getElementsByClassName('thumbnail')
  Array.from(photo).forEach(function(photo){
    photo.addEventListener("click", function(e) {
      mainImg.src = e.target.src;
    });
  })

// Toggle Active Class
$(document).on("click", ".image img", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
