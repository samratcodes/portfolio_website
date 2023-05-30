const dark = document.querySelector('.darkmode')
const contentafterdark =document.querySelector('.content-section')
const checkBox =document.getElementById('checkbox')
checkBox.addEventListener('change',(event) => {
    event.preventDefault();
    if (checkBox.checked == true ){
        contentafterdark.style.color = "black";
        contentafterdark.style.backgroundColor = "white";
      } else {
        contentafterdark.style.color = "white";
        contentafterdark.style.backgroundColor = "Black";
      }
})
