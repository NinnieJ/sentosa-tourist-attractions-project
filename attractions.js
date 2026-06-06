const attractions = [
  {
    name: "Universal Studios Singapore",
    image: 'images/uss.jpg',
    operatingHours: "OPERATING HOURS : 10:00 AM - 7:00 PM",
    TicketLink: "https://www.rwsentosa.com/en/attractions/universal-studios-singapore",
    categories: ["thrill", "family"],
    budgets: ["high"],
    times: ["half-day", "full-day"],
    groups: ["friends", "couple", "family"],
    weatherFit: "mixed",
    description: "Great for roller coasters, themed rides, shows, and a full adventure day."
  },
  {
  name: "Adventure Cove Waterpark",
    image: 'images/adventure-cove.jpg',
    operatingHours: "OPERATING HOURS : 10:00 AM - 5:00 PM",
    TicketLink: "https://www.rwsentosa.com/en/attractions/adventure-cove-waterpark",
    categories: ["water", "thrill", "family"],
    budgets: ["medium", "high"],
    times: ["half-day", "full-day"],
    groups: ["friends", "family"],
    weatherFit: "outdoor",
    description: "Best for water slides, Adventure River, wave pools, and group fun."
  },
  {
    name: "Singapore Oceanarium",
    image: 'images/oceanarium.jpg',
    operatingHours: "OPERATING HOURS : 10:00 AM - 7:00 PM",
    TicketLink: "https://www.rwsentosa.com/en/play/singapore-oceanarium",
    categories: ["indoor", "family", "relax"],
    budgets: ["medium", "high"],
    times: ["short", "half-day"],
    groups: ["solo", "couple", "family"],
    weatherFit: "indoor",
    description: "A comfortable indoor choice with marine life exhibits and learning zones."
  },
  {
    name: "Skyline Luge Singapore",
    image: 'images/skylineluge.jpg',
    operatingHours: "OPERATING HOURS : 11:00 AM - 9:30 PM",
    TicketLink: "https://sentosa.skylineluge.com/book-now-direct/?gad_source=1&gad_campaignid=21660893419&gbraid=0AAAAACT7CMb_C9Is2pHRjwWyu_SFVArRS&gclid=Cj0KCQjwoMXQBhDcARIsAH-eEtt44F4SMgIfpECRdgrs-YhxMac2kb-XJJBId7-eKfDboG8c_AYjvKsaAs-_EALw_wcB",
    categories: ["thrill", "family"],
    budgets: ["medium"],
    times: ["short", "half-day"],
    groups: ["friends", "family", "couple"],
    weatherFit: "outdoor",
    description: "A fast outdoor ride that works well when you want something exciting but not too long."
  },
  {
    name: "Wings of Time",
    image: 'images/wingsoftime.jpg',
    operatingHours: "OPERATING HOURS : 07:40 PM and 8:40 PM",
    TicketLink: "https://wings-of-time.singapore-tickets.com/?ci=1&cm=17463527444_141265279887_c_g_wings%20of%20time%20ticket%20purchase_e_&gad_source=1&gad_campaignid=17463527444&gbraid=0AAAAACRC4b3j8gzKHErk5rBfDkIvEmhNm&gclid=Cj0KCQjw_b_QBhCSARIsAP6hR4c5RLDqfPT0hGxoIAXLc6l4hBEcIMKLvJy3BxFjr8dSVUcVUYl-yoUaAkjFEALw_wcB",
    categories: ["family", "relax"],
    budgets: ["medium"],
    times: ["short"],
    groups: ["couple", "family", "friends"],
    weatherFit: "outdoor",
    description: "A night show with lights, music, and water effects, good for ending the day."
  },
  {
    name: "Sentosa Sensoryscape",
    image: 'images/sensoryscape.jpg',
    operatingHours: "OPERATING HOURS : 24 HOURS",
    categories: ["nature", "relax", "family"],
    budgets: ["low"],
    times: ["short", "half-day"],
    groups: ["solo", "couple", "family", "friends"],
    weatherFit: "outdoor",
    description: "A low-budget walk with garden spaces, photo spots, and night-time light features."
  },
  {
    name: "Siloso Beach",
    image: 'images/silosobeach.jpg',
    operatingHours: "OPERATING HOURS : 24 HOURS",
    categories: ["water", "nature", "relax"],
    budgets: ["low"],
    times: ["short", "half-day"],
    groups: ["solo", "friends", "couple", "family"],
    weatherFit: "outdoor",
    description: "Good for beach games, casual walks, and relaxing without spending much."
  },
  {
    name: "Palawan Beach",
    image: 'images/palawanbeach.jpg',
    operatingHours: "OPERATING HOURS : 24 HOURS",
    categories: ["water", "nature", "family", "relax"],
    budgets: ["low"],
    times: ["short", "half-day"],
    groups: ["family", "couple", "friends"],
    weatherFit: "outdoor",
    description: "A family-friendly beach area with sightseeing spots and a relaxed pace."
  },
  {
    name: "Tanjong Beach",
    image: 'images/tanjongbeach.jpg',
    operatingHours: "OPERATING HOURS : 24 HOURS",
    categories: ["nature", "relax"],
    budgets: ["low"],
    times: ["short", "half-day"],
    groups: ["solo", "couple", "friends"],
    weatherFit: "outdoor",
    description: "A quieter beach option for visitors who prefer a calm atmosphere."
  },
  {
    name: "Madame Tussauds Singapore",
    image: 'images/madametussauds.jpg',
    operatingHours: "OPERATING HOURS : 10:00 AM - 6:00 PM",
    TicketLink: "https://www.sentosa.com.sg/en/things-to-do/attractions/madame-tussauds-singapore/?gclsrc=aw.ds&gad_source=1&gad_campaignid=23336964379&gbraid=0AAAAADlI5PECAn7nj5FX9FOrYtf53c_jo&gclid=Cj0KCQjwoMXQBhDcARIsAH-eEtva3XPQX4e_3S21BRtgFUZrALGfTdIiIXghaIKDv9iKxRrhDwiGukUaAhVzEALw_wcB",
    categories: ["indoor", "family"],
    budgets: ["medium"],
    times: ["short", "half-day"],
    groups: ["friends", "couple", "family"],
    weatherFit: "indoor",
    description: "An indoor photo-friendly attraction with celebrity wax figures."
  },
  
  {
    name: "SkyHelix Sentosa",
    image: 'images/skyhelix.jpg',
    operatingHours: "OPERATING HOURS : 10:00 AM - 9:30 PM",
    TicketLink: "https://www.sentosa.com.sg/en/things-to-do/attractions/skyhelix-sentosa/?gclsrc=aw.ds&gad_source=1&gad_campaignid=20684872723&gbraid=0AAAAADlI5PF5Fifg5UavA1fjqZf-tUDuj&gclid=Cj0KCQjwoMXQBhDcARIsAH-eEtuCYCAqaMwQZ8ESq3i_R5LnnKWpgjOxVY47dqQ7Qx52lA39Tf9bLGcaAiTaEALw_wcB",
    categories: ["thrill", "nature", "relax"],
    budgets: ["medium"],
    times: ["short"],
    groups: ["friends", "couple", "family"],
    weatherFit: "outdoor",
    description: "A short scenic ride with open-air views over Sentosa."
  },
  {
    name: "Mega Adventure Park",
    image: 'images/megaadventure.jpg',
    operatingHours: "OPERATING HOURS : 11:00 AM - 7:00 PM",
    TicketLink: "https://www.sentosa.com.sg/en/things-to-do/attractions/mega-adventure-park/?gclsrc=aw.ds&gad_source=1&gad_campaignid=20681302781&gbraid=0AAAAADlI5PEFQsQPRxLOqyjaWMod-0jPP&gclid=Cj0KCQjwoMXQBhDcARIsAH-eEtsj_zUYVEonJN_K7N_zRHOp8rJAiQRLjE3YqVPlcUjmSDwvlplz9XEaAmy2EALw_wcB",
    categories: ["thrill"],
    budgets: ["high"],
    times: ["short", "half-day"],
    groups: ["friends", "family"],
    weatherFit: "outdoor",
    description: "A high-energy option for zipline and adventure activities."
  },
  {
    name: "iFly Singapore",
    image: 'images/ifly.jpg',
    operatingHours: "OPERATING HOURS : 9:00 AM - 10:00 PM",
    TicketLink: "https://www.sentosa.com.sg/en/things-to-do/attractions/altitudex/?gclsrc=aw.ds&gad_source=1&gad_campaignid=20117792775&gbraid=0AAAAADlI5PF_Kmc0mYdy8EWDbmD9fU3u2&gclid=Cj0KCQjwoMXQBhDcARIsAH-eEtvZy11asuXSGRrtAuKs7Afh7iAgmV8scniNnh80lrzdFrsK3cP99eoaAom9EALw_wcB",
    categories: ["thrill", "indoor"],
    budgets: ["high"],
    times: ["short"],
    groups: ["solo", "friends", "family"],
    weatherFit: "indoor",
    description: "Indoor skydiving for visitors who want a premium thrill activity."
  },
  {
    name: "Fort Siloso",
    image: 'images/fortsiloso.jpg',
    operatingHours: "OPERATING HOURS : 10:00 AM - 6:00 PM",
    categories: ["nature", "family"],
    budgets: ["low"],
    times: ["short", "half-day"],
    groups: ["solo", "friends", "family"],
    weatherFit: "outdoor",
    description: "A low-budget historical attraction with walking trails and exhibits."
  },
  {
    name: "Singapore Cable Car",
    image: 'images/cablecar.jpg',
    operatingHours: "OPERATING HOURS : 8:45 AM - 10:00 PM",
    TicketLink:"https://www.sentosa.com.sg/en/things-to-do/attractions/singapore-cable-car/?gclsrc=aw.ds&gad_source=1&gad_campaignid=8612993241&gbraid=0AAAAADlI5PH9mD80Qg3A1yg7CI6x7A3gc&gclid=Cj0KCQjwoMXQBhDcARIsAH-eEtvsoLxViWe3ec9yEckd5-7butFrzNQZlLbEHjk_Z65Jtkrbw41HDasaAmWMEALw_wcB",
    categories: ["nature", "relax", "family"],
    budgets: ["medium", "high"],
    times: ["short"],
    groups: ["couple", "family", "friends"],
    weatherFit: "mixed",
    description: "A scenic transport experience with strong views of Sentosa and the harbour."
  },
  {
    name: "HydroDash",
    image: 'images/hydrodash.jpg',
    operatingHours: "OPERATING HOURS : 10:00 AM - 6:00 PM",
    TicketLink: "https://www.sentosa.com.sg/en/things-to-do/attractions/hydrodash/?gclsrc=aw.ds&gad_source=1&gad_campaignid=20684872723&gbraid=0AAAAADlI5PF5Fifg5UavA1fjqZf-tUDuj&gclid=Cj0KCQjwoMXQBhDcARIsAH-eEtvzVVQ5kkKehcLxVqXc47qAUETvj3xFUIH_7I0gXBMXJlC6NZGNx28aAuKTEALw_wcB",
    categories: ["water", "thrill", "family"],
    budgets: ["medium"],
    times: ["short", "half-day"],
    groups: ["friends", "family"],
    weatherFit: "outdoor",
    description: "A floating obstacle course for active visitors who enjoy water challenges."
  },
  {
    name: "Sentosa 4D AdventureLand",
    Images: 'images/4dadventureland.jpg',
    operatingHours: "OPERATING HOURS : 12:00 PM - 7:00 PM",
    TicketLink: "https://www.sentosa.com.sg/en/things-to-do/attractions/sentosa-4d-adventureland/?gclsrc=aw.ds&gad_source=1&gad_campaignid=20681302781&gbraid=0AAAAADlI5PEFQsQPRxLOqyjaWMod-0jPP&gclid=Cj0KCQjwoMXQBhDcARIsAH-eEtsZ8H3OjnIdiVvIR_xuMVNJ_lhfOlfMkJyVAuqjY8tM9rC6hjaPUTYaAnfaEALw_wcB",
    categories: ["indoor", "family"],
    budgets: ["medium"],
    times: ["short"],
    groups: ["friends", "family"],
    weatherFit: "indoor",
    description: "Short indoor 4D experiences suitable for families and friends."
  }
];

const weatherText = document.querySelector("#weather-text");
const apiStatus = document.querySelector("#api-status");
const recommendations = document.querySelector("#recommendations");
const form = document.querySelector("#recommender-form");
const refreshWeather = document.querySelector("#refresh-weather");

let currentWeather = "Unknown";

function isBadOutdoorWeather(weather) {
  const lowerWeather = weather.toLowerCase();
  return lowerWeather.includes("rain") || lowerWeather.includes("showers") || lowerWeather.includes("thunder");
}

async function getSentosaWeather() {
  weatherText.textContent = "Loading weather...";
  apiStatus.textContent = "";

  try {
    const response = await fetch("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast");

    if (!response.ok) {
      throw new Error("Weather API request failed");
    }

    const data = await response.json();
    const forecasts = data.items[0].forecasts;
    const sentosaForecast = forecasts.find((item) => item.area === "Sentosa");

    currentWeather = sentosaForecast ? sentosaForecast.forecast : forecasts[0].forecast;
    weatherText.textContent = currentWeather;
    apiStatus.textContent = "Weather data loaded from data.gov.sg.";
  } catch (error) {
    currentWeather = "Unknown";
    weatherText.textContent = "Weather unavailable";
    apiStatus.textContent = "Could not load live weather. Recommendations will use your preferences only.";
  }
}

function calculateScore(attraction, preferences) {
  let score = 0;
  const reasons = [];

  if (attraction.categories.includes(preferences.interest)) {
    score += 5;
    reasons.push(`matches your ${preferences.interest} interest`);
  }

  if (attraction.budgets.includes(preferences.budget)) {
    score += 2;
    reasons.push(`fits a ${preferences.budget} budget`);
  }

  if (attraction.times.includes(preferences.time)) {
    score += 2;
    reasons.push(`works for a ${preferences.time} plan`);
  }

  if (attraction.groups.includes(preferences.group)) {
    score += 2;
    reasons.push(`is suitable for ${preferences.group} visits`);
  }

  if (isBadOutdoorWeather(currentWeather)) {
    if (attraction.weatherFit === "indoor") {
      score += 2;
      reasons.push("is indoors, which suits the rainy weather");
    } else if (attraction.weatherFit === "outdoor") {
      score -= 2;
      reasons.push("may be affected by rainy weather");
    }
  } else if (currentWeather !== "Unknown" && attraction.weatherFit === "outdoor") {
    score += 1;
    reasons.push("works well with the current weather");
  }

  return { score, reasons };
}

function createCard(attraction, score, reasons) {
  const card = document.createElement("article");
  card.className = "card";
  const tags = [...new Set([...attraction.categories, attraction.weatherFit])];

  const reasonText = reasons.length > 0
    ? `Recommended because it ${reasons.join(", ")}.`
    : "Recommended as a balanced option for your visit.";

  card.innerHTML = `
  <img src="${attraction.image}" alt="${attraction.name}" class="attraction-image">

  <div class="card-header">
    <h3>
      <i class="${attraction.icon}"></i>
      ${attraction.name}
    </h3>
    <a href='"${attraction.TicketLink}" target="_blank">'>
    
    </a>

    <span class="score">${Math.max(score, 0)}/13</span>
  </div>

  <p class="reason">${attraction.description}</p>

  <p class="reason">${reasonText}</p>

  <p class="reason">${attraction.description}</p>

  ${attraction.TicketLink ? `
<a href="${attraction.TicketLink}" 
   target="_blank" 
   class="ticket-btn">
   Buy Tickets
   <i class="fa-solid fa-ticket"></i>
</a>
` : `
<span class="free-badge">
   <i class="fa-solid fa-gift"></i> FREE
</span>
`}


  <div class="meta">
    ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
  </div>

  <p class="hours">
  <i class="fa-solid fa-clock"></i>
  ${attraction.operatingHours}
</p>

`;
  return card;
}

function recommendAttractions(event) {
  event.preventDefault();

  const preferences = {
    interest: form.interest.value,
    budget: form.budget.value,
    time: form.time.value,
    group: form.group.value
  };

  const rankedAttractions = attractions
    .map((attraction) => {
      const result = calculateScore(attraction, preferences);
      return { ...attraction, ...result };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  recommendations.innerHTML = "";

  rankedAttractions.forEach((attraction) => {
    recommendations.appendChild(createCard(attraction, attraction.score, attraction.reasons));
  });
}

form.addEventListener("submit", recommendAttractions);

refreshWeather.addEventListener("click", async () => {
  await getSentosaWeather();
  form.requestSubmit();
});

getSentosaWeather().then(() => {
  form.requestSubmit();
});
