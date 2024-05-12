// Set the current date
let newDateFunction = new Date();

// Function to render the calendar
function renderDate(){
    // Set the first day of the current month
    newDateFunction.setDate(1);
    // Get the weekday of the first day of the current month
    let day = newDateFunction.getDay();

    // Get the last date of the current month
    let currentDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth() + 1, 0
    ).getDate();

    // Get the last date of the previous month
    let prevDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth(), 0
    ).getDate();

    // Get the last date of the next month 
    let addNextDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth() + 1, 0
    ).getDate();

    // Logging current date, previous last date, and next last date for debugging
    console.log(currentDate, prevDate, addNextDate);

    // Calculate the number of days to be added to fill the last week of the calendar
    let addNext = addNextDate + 7;

    // Get the current month and year 
    let month = newDateFunction.getMonth();
    let year = newDateFunction.getFullYear();
    // Array of month names
    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Set the current month in the calendar
    document.getElementById("month").innerHTML = monthArr[month];

    // Get today's date
    let today = new Date();
    // Get today's weekday
    let weekDay = today.getDay();
    // Display today's full date string
    document.getElementById("date").innerHTML = today.toDateString();
    // Highlight today's day of the week
    document.querySelector(`.week :nth-child(${weekDay + 1})`).classList.add("active");

    // Initialize the dates string that will be used to fill up the calendar
    let DATES = "";

    // Loop to insert the dates of the previous month
    for(let x = day; x > 0; x--){
        DATES += "<div class='prev'>" + (prevDate - x + 1) + "</div>";
    }

    // Loop to insert the dates of the current month
    for(let i = 1; i <= currentDate; i++){
        // Check if the loop's date is today's date to add the 'today' class
        if(i === today.getDate() && newDateFunction.getMonth() == today.getMonth() && newDateFunction.getFullYear() === today.getFullYear()){
            DATES += "<div class='today'>" + i + "</div>";
        }
        else{
            // Add the date to the calendar
            DATES += "<div>" + i + "</div>";
        }
    }

    // Loop to insert the dates of the next month to fill the last week
    for(let k = 1; k <= addNext; k++){
        DATES += "<div class='next'>" + k + "</div>";
    }

    // Update the calendar with the new dates
    document.querySelector('.dates').innerHTML = DATES;
}

// Function to navigate the calendar back and forth
function moveDate(para){
    // Move to the previous month
    if(para == 'prev'){
        newDateFunction.setMonth(newDateFunction.getMonth() - 1);
    }
    // Move to the next month
    else if(para == 'next'){
        newDateFunction.setMonth(newDateFunction.getMonth() + 1);
    }

    // Re-render the calendar with the new month
    renderDate();
}

// Function to calculate the size of each slice in the pie chart
function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
}

// Function to add a slice to the pie chart
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
    // Append slice HTML to the pie element
    $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
    // Calculate the rotation offset for the slice
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
    // Set the rotation of the slice
    $("."+sliceID).css({
      "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
    });
    // Set the rotation and color of the slice span
    $("."+sliceID+" span").css({
      "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
      "background-color": color
    });
}

// Function to iterate over slices and add them to the pie chart
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    // Create a unique slice ID
    var sliceID = "s"+dataCount+"-"+sliceCount;
    // Set the maximum size for a slice
    var maxSize = 179;
    if(sliceSize <= maxSize) {
      // If the slice size is less than the maximum, add the slice
      addSlice(sliceSize, pieElement, offset, sliceID, color);
    } else {
      // If the slice size is larger than the maximum, add a slice at the maximum size
      addSlice(maxSize, pieElement, offset, sliceID, color);
      // Recursively call the function to add the remaining portion of the slice
      iterateSlices(sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
    }
}

  //create pie
  function createPie(dataElement, pieElement) {
    var listData = [];
    $(dataElement+" span").each(function() {
      listData.push(Number($(this).html()));
    });
    var listTotal = 0;
    for(var i=0; i<listData.length; i++) {
      listTotal += listData[i];
    }
    var offset = 0;
    var color = [
      "cornflowerblue", 
      "olivedrab", 
      "orange", 
      "tomato", 
      "crimson", 
      "purple", 
      "turquoise", 
      "forestgreen", 
      "navy", 
      "gray"
    ];
    for(var i=0; i<listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      iterateSlices(size, pieElement, offset, i, 0, color[i]);
      $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
      offset += size;
    }
  }
  createPie(".pieID.legend", ".pieID.pie");
  

//popup
document.addEventListener('DOMContentLoaded', function() {
    // Get all date elements
    const dates = document.querySelectorAll('.dates div');

    // Get the popup element
    const popup = document.getElementById('popup');

    // Get the popup date element
    const popupDate = document.getElementById('popupDate');

    // Add event listener to each date element
    dates.forEach(date => {
        date.addEventListener('click', function() {
            // Display the popup when a date is clicked
            popupDate.textContent = `Date is ${date.textContent}`; // Set the popup content to the clicked date
            popup.classList.toggle('show');
        });
    });
});

