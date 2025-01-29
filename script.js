document.getElementById('generate-button').addEventListener('click', generateShotList);

function generateShotList() {
  // 1. Get Input Values
  const coupleNames = document.getElementById('couple-names').value;
  const weddingDate = document.getElementById('wedding-date').value;
  const weddingVenue = document.getElementById('wedding-venue').value;
  const weddingStyle = document.getElementById('wedding-style').value;
  const mustHaveShots = Array.from(document.querySelectorAll('input[name="must-have"]:checked')).map(el => el.value);
  const otherShotsText = document.getElementById('other-shots-text').value;
  const familyFriends = document.getElementById('family-friends').value;
  const photoIdeas = document.getElementById('photo-ideas').value;
  const dontWantShots = document.getElementById('dont-want').value;

  // 2. Build Shot List (Template)
  let shotListHTML = `
    <h3>${coupleNames}'s Wedding - ${weddingDate}</h3>
    <h4>Venue: ${weddingVenue}</h4>
    <h4>Style: ${weddingStyle}</h4>

    <h4>Must-Have Shots:</h4>
    <ul>
  `;

  mustHaveShots.forEach(shot => {
    shotListHTML += `<li>${shot}</li>`;
  });
  if (otherShotsText) {
    shotListHTML += `<li>Other: ${otherShotsText}</li>`;
  }
  shotListHTML += `</ul>`;

  if (familyFriends) {
    shotListHTML += `
      <h4>Important Family/Friends:</h4>
      <p>${familyFriends}</p>
    `;
  }

  if (photoIdeas) {
    shotListHTML += `
      <h4>Specific Photo Ideas:</h4>
      <p>${photoIdeas}</p>
    `;
  }

  if (dontWantShots) {
    shotListHTML += `
      <h4>Shots to Avoid:</h4>
      <p>${dontWantShots}</p>
    `;
  }
  
  // 3. Display Shot List
  document.getElementById('shot-list-content').innerHTML = shotListHTML;
  document.getElementById('shot-list-output').style.display = 'block';

  // 4. Add Event Listener for Download
  document.getElementById('download-button').addEventListener('click', downloadPDF);
}

function downloadPDF() {
  window.jsPDF = window.jspdf.jsPDF; // Ensure jsPDF is available
  const doc = new jsPDF();

  // Get the HTML content of the shot list
  const shotListContent = document.getElementById('shot-list-content');

  // Convert HTML to PDF
  doc.html(shotListContent, {
    callback: function (doc) {
      doc.save('wedding-shot-list.pdf');
    },
    x: 15,
    y: 15,
    width: 170, // Target width in the PDF document
    windowWidth: 650 // Window width in CSS pixels
  });
}
