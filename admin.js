function toggleMobileMenu(menu){
  menu.classList.toggle('open');
}

function editPage(){
  const fullPage = document.getElementById('full-page')
  fullPage.style.display = 'none'

  const newPage = document.getElementById('new-page')
  newPage.style.display = 'flex'
}


function donate() {
  window.location.href = 'https://www.venmo.com/mher-filian'
}

document.getElementById('sendEmail').addEventListener('click', function() {
  var emailAddress = 'hemphillmusic@gmail.com'; // Replace with your email address
  var subject = 'Add to E-mail List'; // Replace with the desired subject
  var emailBody = document.getElementById('emailInput').value;

  var mailtoLink = 'mailto:' + emailAddress + '?subject=' + subject + '&body=' + emailBody;

  // Use JavaScript to open the default email client
  window.location.href = mailtoLink;
});
