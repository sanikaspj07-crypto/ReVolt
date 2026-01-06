// Mock data of recycling centers
const centers = [
  { city: "Pune", name: "GreenCycle Pvt. Ltd.", address: "Baner, Pune", phone: "+91 98765 43210" },
  { city: "Mumbai", name: "EcoCell Recyclers", address: "Andheri East, Mumbai", phone: "+91 90123 45678" },
  { city: "Nashik", name: "Battery Care India", address: "College Road, Nashik", phone: "+91 99887 65432" },
  { city: "Nagpur", name: "SafeEnergy Waste Solutions", address: "Civil Lines, Nagpur", phone: "+91 99224 55678" },
  { city: "Delhi", name: "Urban E-Waste Collectors", address: "Rohini, Delhi", phone: "+91 98111 22233" }
];

// Search Recycling Centers
function searchCenter() {
  const city = document.getElementById("searchBox").value.trim().toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const found = centers.filter(center => center.city.toLowerCase() === city);

  if (found.length > 0) {
    resultsDiv.innerHTML = `<h3>Recycling Centers in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>`;
    found.forEach(center => {
      resultsDiv.innerHTML += `
        <div class="center-card">
          <h4>${center.name}</h4>
          <p><b>Address:</b> ${center.address}</p>
          <p><b>Phone:</b> ${center.phone}</p>
          <button onclick="alert('Call ${center.phone}')">Contact</button>
        </div>`;
    });
  } else {
    resultsDiv.innerHTML = `<p style="color:red;">No recycling centers found in "${city}".</p>`;
  }
}

// Chemical Segregation Visualizer
function showChem(part) {
  const data = {
    cathode: "🔹 Cathode: Contains Lithium Cobalt Oxide (LiCoO₂) or Lithium Nickel Manganese Oxide (NMC). Source of lithium, cobalt, and nickel.",
    anode: "🔸 Anode: Made of Graphite, which stores lithium ions during charging and discharging.",
    electrolyte: "💧 Electrolyte: Composed of lithium salts (LiPF₆) in organic solvents that allow ion movement.",
    separator: "⚪ Separator: A microporous polymer sheet that prevents electrical contact between electrodes while allowing ion flow."
  };
  document.getElementById("chem-info").innerHTML = `<p>${data[part]}</p>`;
}

// Recycling Impact Calculator
function calcImpact() {
  const count = document.getElementById("batteryCount").value;
  if (!count || count <= 0) {
    document.getElementById("impact").innerHTML = "<p style='color:red;'>Please enter a valid number of batteries.</p>";
    return;
  }

  const lithiumSaved = (count * 1.5).toFixed(1); // grams
  const co2Reduced = (count * 200).toFixed(1); // grams

  document.getElementById("impact").innerHTML = `
    <p>By recycling <b>${count}</b> batteries:</p>
    <ul>
      <li>🌿 You save approximately <b>${lithiumSaved}g</b> of lithium.</li>
      <li>🌎 You reduce about <b>${co2Reduced}g</b> of CO₂ emissions.</li>
    </ul>
    <p>Great job contributing to a sustainable environment!</p>
  `;
}
