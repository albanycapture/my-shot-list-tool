document.addEventListener('DOMContentLoaded', function() {
    const bridalPartySelect = document.getElementById('bridal-party');
    const bridalPartySizeDiv = document.getElementById('bridal-party-size-div');
  
    bridalPartySelect.addEventListener('change', function() {
      if (bridalPartySelect.value === 'yes') {
        bridalPartySizeDiv.style.display = 'block';
      } else {
        bridalPartySizeDiv.style.display = 'none';
      }
    });
  });

document.getElementById('generate-button').addEventListener('click', generateShotList);

// Shot List Data (Now with placeholders for conditional shots)
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
        "{Conditional: Bridal Party}To-be-wed with wedding party",
        "To-Be-Wed #2 getting ready with parent and pals",
        "Emotional shot of to-be-wed with parent/s and/or stepparent/s",
        "Touching shot of to-be-wed with sibling/s",
        "To-be-wed with arm around honor attendant",
        "{Conditional: Bridal Party}To-be-wed with wedding party",
        "{Conditional: Bridal Party}Wedding party putting final touches on outfit",
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
        "{Conditional: First Look}First look",
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
        "{Conditional: Traditional Ceremonies}",
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
        "{Conditional: Bridal Party}Wedding party coming down the aisle",
        "{Conditional: Bridal Party}Flower girl and/or ring bearer coming down the aisle",
        "{Conditional: Bridal Party}Honor attendants coming down the aisle",
        "Grandparents walking down the aisle (if applicable)",
        "{Conditional: Bridal Party}Wedding party waiting at the altar",
        "To-be-wed #2 coming down the aisle (with or without parents)",
        "To-be-wed #1 and Dad/escort/parents (if applicable) walking down the aisle",
        "Close-up of to-be-wed #2 just before making entrance",
        "Couple at the front (including the officiant)",
        "Arch, altar or canopy from the back during ceremony",
        "Wide shot of audience during ceremony, from couple's
