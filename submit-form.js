const emailListElements = document.querySelectorAll(".emailList"); //получение всех элементов с классом emailList
const hostname = window.location.hostname; //получение текущего домена
emailListElements.forEach(function(element) {
  prefix = 'support@'; //префикс начала емайла
  element.setAttribute("href", "mailto:" + prefix + hostname); //добавление готового емайла в атрибут href
  element.innerHTML = prefix + hostname; //добавление готового емайла в тег
});