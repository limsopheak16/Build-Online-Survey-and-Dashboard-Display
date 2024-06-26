// document.forms[0].addEventListener("submit",submitForm);

function submitForm(event) {
    event.preventDefault();

    // const fullname = document.getElementById("fullname").value;
    // console.log(fullname);
    const gradeChoices = document.getElementsByName("gradeChoice");
    // console.log(gradeChoices);
    for(let i=0; i<gradeChoices.length; i++){
        console.log(gradeChoices[i].checked, gradeChoices[i].value);

    }
var interestAspects = [];
    document.querySelectorAll('input[name="check"]:checked').forEach(checkbox => {
        interestAspects.push(checkbox.nextElementSibling.innerText);
    });
    
}
