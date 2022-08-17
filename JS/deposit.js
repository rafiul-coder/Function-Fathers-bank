function getInputFieldValueById(inputFieldId){
    const inputField =document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue =parseFloat(inputFieldValueString);
    return inputFieldValue;
}



document.getElementById('btn-deposit').addEventListener('click', function () {
  
})