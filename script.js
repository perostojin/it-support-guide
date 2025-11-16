const categoriesEl = document.getElementById("categories");
const symptomsEl = document.getElementById("symptoms");
const solutionsEl = document.getElementById("solutions");

// Hjälpfunktion: nollställ symptom + lösningar
function resetSections() {
  symptomsEl.innerHTML = "";
  solutionsEl.innerHTML = "";
  symptomsEl.classList.add("hidden");
  solutionsEl.classList.add("hidden");
}

// Visa kategorier (startläge och "Tillbaka")
function loadCategories() {
  // rensa allt gammalt
  categoriesEl.innerHTML = "";
  symptomsEl.innerHTML = "";
  solutionsEl.innerHTML = "";

  // göm symptom + lösningar
  symptomsEl.classList.add("hidden");
  solutionsEl.classList.add("hidden");

  // visa alla kategorier igen
  Object.entries(troubleshootingData).forEach(([key, obj]) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="card-icon">${obj.icon || ""}</div>
      <div class="card-title">${obj.name}</div>
    `;
    div.onclick = () => loadSymptoms(key);
    categoriesEl.appendChild(div);
  });
}


// Visa symptom för vald kategori
function loadSymptoms(categoryKey) {
  // töm lösningar + visa bara symptom-sektionen
  solutionsEl.innerHTML = "";
  solutionsEl.classList.add("hidden");

  symptomsEl.classList.remove("hidden");
  symptomsEl.innerHTML = `
    <button type="button" onclick="loadCategories()">⬅ Tillbaka</button>
    <h2>Välj problem</h2>
  `;

  const symptoms = troubleshootingData[categoryKey].symptoms;

  const wrapper = document.createElement("div");
  wrapper.className = "card-grid";

  Object.entries(symptoms).forEach(([key, obj]) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = obj.name;
    div.onclick = () => loadSolutions(categoryKey, key);
    wrapper.appendChild(div);
  });

  symptomsEl.appendChild(wrapper);
}

// Visa lösningar för valt symptom
function loadSolutions(categoryKey, symptomKey) {
  const category = troubleshootingData[categoryKey];
  const data = category.symptoms[symptomKey];

  solutionsEl.classList.remove("hidden");

  const categoryName = category.name;
  const symptomName = data.name;

  let html = `<button onclick="loadCategories()">⬅ Tillbaka</button>`;
  html += `<p class="breadcrumb">${categoryName} › ${symptomName}</p>`;
  html += `<h2>Felsökningssteg</h2><ol>`;

  data.steps.forEach(step => {
    html += `<li>${step}</li>`;
  });

  html += "</ol>";
  solutionsEl.innerHTML = html;
}


// Starta appen
loadCategories();
