var time = new Date();

document.querySelector('.time').innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })

$(document).ready(function() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let qntYears = 10;
    let selectYear = $("#year");
    let selectMonth = $("#month");
    let selectDay = $("#day");
    let currentYear = new Date().getFullYear();
  
    for (var y = 0; y < qntYears; y++) {
      let date = new Date(currentYear);
      let yearElem = document.createElement("option");
      yearElem.value = currentYear
      yearElem.textContent = currentYear;
      selectYear.append(yearElem);
      currentYear--;
    }
  
    for (var m = 0; m < 12; m++) {
      let month = monthNames[m];
      let monthElem = document.createElement("option");
      monthElem.value = m;
      monthElem.textContent = month;
      selectMonth.append(monthElem);
    }
  
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();
  
    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);
  
    AdjustDays();
    selectDay.val(day)
  
    function AdjustDays() {
      var year = selectYear.val();
      var month = parseInt(selectMonth.val()) + 1;
      selectDay.empty();
  
      //get the last day, so the number of days in that month
      var days = new Date(year, month, 0).getDate();
  
      //lets create the days of that month
      for (var d = 1; d <= days; d++) {
        var dayElem = document.createElement("option");
        dayElem.value = d;
        dayElem.textContent = d;
        selectDay.append(dayElem);
      }
    }
  });
  
   function opendiv(evt, divname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
   
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if(evt.currentTarget.id === 'imgdiv'){
      document.querySelector('.img2').src = 'smile.png'
      document.querySelector('.img2').style.height ='20px'
    }else{
      document.querySelector('.img2').src = 'profile.png'

    }
    document.getElementById(divname).style.display = "block";
    evt.currentTarget.className += " active";
  
    
  }
  document.getElementById("defaultOpen").click();
   
  const togglePassword = document.querySelector('#togglePassword');
  const togglePassword2 = document.querySelector('#togglePassword2');
  
  togglePassword.addEventListener('click' , ()=>{
  var x = document.getElementById("id_password");
  if (x.type === "password") {
    x.type = "text";
    togglePassword.classList.replace('fa-eye' ,'fa-eye-slash');
  } else {
    x.type = "password";
    togglePassword.classList.replace('fa-eye-slash' , 'fa-eye');

  }

 })
 
 togglePassword2.addEventListener('click' , ()=>{
  var y = document.getElementById("id_password2");
  if (y.type === "password") {
    y.type = "text";
    togglePassword2.classList.replace('fa-eye' ,'fa-eye-slash');

  } else {
    y.type = "password";
    togglePassword2.classList.replace('fa-eye-slash' , 'fa-eye');

  }

 })
 $(document).ready(function() {
  $(".daily").click(function(e) {
      $(".dailyplanner").toggle();
      e.stopPropagation();
  });

  $(document).click(function(e) {
      if (!$(e.target).is('.dailyplanner, .dailyplanner *')) {
          $(".dailyplanner").hide();
      }
  });
});
   
   let box = document.querySelector('.actives')
   let setting = document.querySelector('.setting')
  
//    document.addEventListener('mouseup', function(e) {
//     var container = document.getElementById('settingsbox');
//     if(e.target = setting){
      
//    setting.onclick =() => {
//     if (box.style.display === "none") {
//       box.style.display = "flex";
//     } else {
//       this.body.click()
//     }
//   }
//     }
//     if (!container.contains(e.target)) {
//          console.log(e.target)
//         container.style.display = 'none'; 
//     }
// });


//    setting.onclick =() => {
//     if (box.style.display === "none") {
//       box.style.display = "flex";
//     } else {
//       box.style.display = "none";
//     }
//   }
$(document).ready(function() {
  $("#button").click(function(e) {
      $("#content").toggle();
      e.stopPropagation();
  });

  $(document).click(function(e) {
      if (!$(e.target).is('#content, #content *')) {
          $("#content").hide();
      }
  });
});