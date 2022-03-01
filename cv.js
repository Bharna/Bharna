

$(".profile-pic").mouseover(function() {
  $(".profile-pic").attr("src", "./static/teal-me.png")
})


$(".profile-pic").mouseleave(function() {
  $(".profile-pic").attr("src", "./static/blue-me.png")
})

$(".profile-pic").click(function() {
  $(".profile-pic").attr("src", "./static/green-me.png")
  hireMe()
})

function hireMe() {
  if (confirm("Do you want to HIRE ME !!!")) {
    window.open("./templates/contact.html")
  } else {
    alert("May be Next Time...")
  }
}

function hireMeInner() {
  if (confirm("Do you want to HIRE ME !!!")) {
    window.open("./contact.html")
  } else {
    alert("May be Next Time...")
  }
}

$(".fa-hamburger").click(function(){
  $("#navbarNavDropdown").toggleClass("show")
})


// call from contact page

function fill() {
  alert("Please enter tha form in the page")
}

$(".python").click(function() {
  window.open("./templates/python.html")
})

$(".web").on("click", function() {
  window.open("./templates/web.html")
})



$(".yes").click(function() {
  $(".hireMe-btn").removeClass("right")
  if ($('.yes').prop('checked') == true) {
    $('.no').prop('checked', false)
  }
})

$(".no").click(function() {
  $(".hireMe-btn").removeClass("right")
  if ($('.no').prop('checked') == true) {
    $('.yes').prop('checked', false)
  }
})



$(".hireMe-btn").mouseover(function() {
  if ($(".yes").prop("checked") != true) {
    if ($(".no").prop("checked") != true) {
      $(".hireMe-btn").toggleClass("right")
    }
  }
})


$(".hireMe-btn").click(
  function() {
    window.open("./templates/contact.html")
  }
)


$(".why").click(function() {
  alert("You can't just click Hire Me button. Please select your opinion for my own reference. If you don't want to take that review please click the 'contact' from the navigation bar. ")
})

$(".disclaimer").click(function(){
  window.open("./templates/disclaimer.html")
})


$(".calculator").click(function() {
  window.open("https://drive.google.com/file/d/1nHyCkf7Hom6w6HXpICkdtxcRgli1NPAD/view?usp=sharing")
})

$(".pomodoro").click(function() {
  window.open("https://drive.google.com/file/d/141i6SVvIGgWiVdhu6SDkMM8OX0OhVACq/view?usp=sharing")
})

$(".snake").click(function() {
  window.open("https://drive.google.com/file/d/1_Y6V2XGUc0gti-FR6qqVhrR4sRO599gW/view?usp=sharing")
})

$(".hang").click(function() {
  window.open("https://drive.google.com/file/d/1F5_f1yfbzXAVIOCASFqQ6q-OvR9xFbjv/view?usp=sharing")
})


function lenCheck(){
  if (document.getElementById("name").value.length != 0){
    if (document.getElementById("mail-id").value.length >= 15){
      if (document.getElementById("company-name").value.length >= 5 ){
        if (document.getElementById("contact-number").value.length == 10){
          if (document.getElementById("message").value.length != 0){
            return true;
          }else{return false}
        }else{return false}
      }else{return false}
    }else{return false}
  }else{return false}
}

// mail


function sendEmail() {
  if (lenCheck()){
    var name = document.getElementById("name").value
    var mail = document.getElementById("mail-id").value
    var company = document.getElementById("company-name").value
    var contact = document.getElementById("contact-number").value
    var message = document.getElementById("message").value
    var compiler = "Hai, bharna. I am : " + name + ". I am interested to hire you for my company : " + company + ", here is my email : " + mail + " and contact number : " + contact + " . This is something about your Website : " + message + " and I liked your Website."
    alert("Please wait...")
    Email.send({
        Host: "smtp.mail.yahoo.com",
        Username: "nix_test@yahoo.com",
        Password: "carhzhgaymvfopvr",
        To: "bossbharna@gmail.com",
        From: "nix_test@yahoo.com",
        Subject: company,
        Body: compiler,
      })
      .then(function() {
        document.getElementById("name").value = ""
        document.getElementById("mail-id").value = ""
        document.getElementById("company-name").value = ""
        document.getElementById("contact-number").value = ""
        document.getElementById("message").value = ""
        alert("mail sent successfully")
      });
  }else{
    alert("please enter the valid format in all the column")
  }

}
