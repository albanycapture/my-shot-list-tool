document.getElementById('generate-button').addEventListener('click', generateShotList);

// Shot List Data
const shotListData = [
  {
    category: "General Pre-Wedding Shots",
    shots: [
      "Wedding invitation",
      "Engagement ring(s)",
      "Wedding bands",
      "To-Be-Wed #1 Wedding day outfit or wedding dress",
      "Wedding party and guest of honor getting dressed and applying makeup",
      "Parent or other guardian helping to-be-wed with one last detail",
      "Full-length shot of to-be-wed in outfit looking in mirror",
      "Detail shot of clothing, shoes, accessories, and any other special items",
      "Emotional shot of to-be-wed with parent/s and/or stepparent/s",
      "Touching shot of to-be-wed with sibling/s",
      "To-be-wed hugging honor attendant or close friend",
      "To-be-wed with wedding party",
      "To-Be-Wed #2 getting ready with parent and pals",
      "Emotional shot of to-be-wed with parent/s and/or stepparent/s",
      "Touching shot of to-be-wed with sibling/s",
      "To-be-wed with arm around honor attendant",
      "To-be-wed with wedding party",
      "Wedding party putting final touches on outfit",
    ]
  },
  {
    category: "Both To-Be-Weds",
    shots: [
      "Emotional shots of each to-be-wed talking to/hugging parents and siblings before the ceremony",
      "To-be-wed #1 ready to go",
      "To-be-wed #2 ready to go",
      "Each to-be-wed separately making their way to the ceremony",
    ]
  },
  {
    category: "First look",
    shots: [
      "First look (if the couple is going to do one)",
      "Groom leaving for the ceremony",
    ]
  },
  {
    category: "Ceremony Venue",
    shots: [
      "Outside the ceremony venue",
      "Glimpses at focal points around the ceremony venue",
      "Inside of the ceremony venue",
      "Decorations (like aisle markers, floral arrangements and wedding signage)",
      "Wedding altar",
    ]
  },
  {
    category: "Wedding Ceremony",
    shots: [
      "Guests entering the site",
      "Ushers escorting guests to their seats",
      "Ushers escorting parents to their seats (if applicable)",
      "Close-up of to-be-wed #2 waiting for partner",
      "Wedding party coming down the aisle",
      "Flower girl and/or ring bearer coming down the aisle",
      "Honor attendants coming down the aisle",
      "Grandparents walking down the aisle (if applicable)",
      "Wedding party waiting at the altar",
      "To-be-wed #2 coming down the aisle (with or without parents)",
      "To-be-wed #1 and Dad/escort/parents (if applicable) walking down the aisle",
      "Close-up of to-be-wed #2 just before making entrance",
      "Couple at the front (including the officiant)",
      "Arch, altar or canopy from the back during ceremony",
      "Wide shot of audience during ceremony, from couple's point of view",
      "Faces of the couple as they exchange vows",
      "Close-up of the couple's hands as they exchange wedding rings",
      "The first kiss as a married couple",
      "The couple's recessional",
      "Couple outside ceremony site",
      "Congrats shots: couple hugging, laughing, and crying with friends and family",
      "Couple leaving ceremony site",
      "Couple in limo backseat",
    ]
  },
  {
    category: "Family & Wedding Party Photos",
    shots: [
      "Couple together for portrait",
      "Couple looking at each other",
      "Couple hugging or kissing",
      "To-be-wed #1 with parents and/or stepparents",
      "To-be-wed #1 with entire immediate family",
      "To-be-wed #2 with parents and/or stepparents",
      "To-be-wed #2 with entire immediate family",
      "Couple with all parents",
      "Couple with immediate family members from both sides",
      "Couple with wedding party of to-be-wed #2",
      "Couple with wedding party of to-be-wed #1",
      "Couple with whole wedding party",
    ]
  },
  {
    category: "Wedding Reception",
    shots: [
      "Shot from outside reception venue",
      "Shot inside reception venue",
      "Reception details such as place cards, guest book, centerpieces, decorations, table settings, favors table, and champagne glasses",
      "Stationery flat lay",
      "Couple arriving to reception",
      "Receiving line moments",
      "Couple at head table",
      "Parents' table",
      "Guests' tables",
      "Close-up of friends and family making toasts",
      "Couple sipping champagne",
      "Couple's parents talking to each other during dinner",
      "Couple chatting up the guests",
      "Detail shot of food",
      "Couple's first dance",
      "Parents dancing",
      "To-be-wed #1 and parent dancing",
      "To-be-wed #2 and parent dancing",
      "Wedding party dancing",
      "Grandparents dancing",
      "Kids playing or dancing (if applicable)",
      "Musicians or DJ doing their thing",
      "Guests going nuts on the dance floor",
      "Couple laughing with guests on dance floor",
      "Wedding cake (or dessert) table",
      "Cake cutting moment",
      "Couple feeding each other cake",
      "Couple leaving reception",
      "Couple waving from vehicle",
      "Rear of vehicle departing",
    ]
  },
];

function generateShotList() {
  const coupleNames = document.getElementById('couple-names').value;
  const weddingDate = document.getElementById('wedding-date').value;

  let shotListHTML = `
    <h2>${coupleNames}</h2>
    <h3>Wedding Date: ${weddingDate}</h3>
  `;

  shotListData.forEach(category => {
    shotListHTML += `<h3>${category.category}</h3><ul>`;
    category.shots.forEach(shot => {
      shotListHTML += `<li><input type="checkbox"> ${shot}</li>`;
    });
    shotListHTML += `</ul>`;
  });

  // Display the shot list content on the page
  document.getElementById('shot-list-content').innerHTML = shotListHTML;

  // Generate and download the PDF
  window.jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF();

  // Use html2canvas to render the content to an image, then add to PDF
  html2canvas(document.getElementById('pdf-content')).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('wedding-shot-list.pdf');
  });
}
