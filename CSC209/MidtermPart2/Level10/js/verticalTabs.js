function openTab(evt, day) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(day).style.display = "block";
  evt.currentTarget.className += " active";
  console.log(evt.currentTarget.className);
}

function createTabs(){
  let tabs = document.createElement('div');
  tabs.setAttribute('class', 'tab');
  let tabButton, tabButtonText;
  let tabContent, tabHeader, headerText, tabPar, parText;
  for (let i = 0; i < NRTABS; i++){
    tabButton = document.createElement('button');
    tabButton.setAttribute('class', 'tablinks');
    tabButton.setAttribute('onclick', 'openTab(event, "' + DAYS[i] + '")');
    tabButtonText = document.createTextNode(DAYS[i]);
    tabButton.appendChild(tabButtonText);
    tabs.appendChild(tabButton);
    tabContent = document.createElement('div');
    tabContent.setAttribute('id', DAYS[i]);
    tabContent.setAttribute('class', 'tabcontent');
    tabHeader = document.createElement('h3');
    headerText = document.createTextNode(DAYS[i]);
    tabHeader.appendChild(headerText);
    tabContent.appendChild(tabHeader);
    tabPar = document.createElement('p');
    parText = document.createTextNode(CONTENT[i]);
    tabPar.appendChild(parText);
    tabContent.appendChild(tabPar);
    document.body.appendChild(tabContent);
    if (i == 0){
      tabButton.setAttribute('id', 'defaultOpen');
      tabContent.style.display = "block";
    }
  }
  let firstTabContent = document.getElementById(DAYS[0]);
  document.body.insertBefore(tabs, firstTabContent);
}