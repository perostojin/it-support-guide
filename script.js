const categoriesEl = document.getElementById("categories");
const symptomsEl = document.getElementById("symptoms");
const solutionsEl = document.getElementById("solutions");

const searchInput = document.getElementById("searchInput");
const searchResultsEl = document.getElementById("searchResults");


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
  html += `<h2>Felsökningssteg</h2>`;
  html += `<ul class="steps-list">`;

  data.steps.forEach((step, index) => {
    html += `
      <li class="step-item">
        <label>
          <input type="checkbox" class="step-checkbox">
          <span>${step}</span>
        </label>
      </li>
    `;
  });

  html += `</ul>`;
  solutionsEl.innerHTML = html;
}

function searchProblems(query) {
  const q = query.trim().toLowerCase();
  searchResultsEl.innerHTML = "";

  if (!q) {
    searchResultsEl.innerHTML =
      '<p class="search-help">Börja skriva för att söka efter problem…</p>';
    return;
  }

  const results = [];

  // loopa igenom alla kategorier och symptom
  Object.entries(troubleshootingData).forEach(([categoryKey, category]) => {
    Object.entries(category.symptoms).forEach(([symptomKey, symptom]) => {
      const nameMatch = symptom.name.toLowerCase().includes(q);
      const stepsMatch = symptom.steps.some(step =>
        step.toLowerCase().includes(q)
      );

      if (nameMatch || stepsMatch) {
        results.push({
          categoryKey,
          symptomKey,
          categoryName: category.name,
          symptomName: symptom.name
        });
      }
    });
  });

  if (results.length === 0) {
    searchResultsEl.innerHTML = "<p>Inga träffar hittades.</p>";
    return;
  }

  // Bygg HTML för träffar
  results.forEach(result => {
    const div = document.createElement("div");
    div.className = "search-result";
    div.innerHTML = `
      <div class="search-result-title">${result.symptomName}</div>
      <div class="search-result-meta">${result.categoryName}</div>
    `;
    div.onclick = () => {
      // öppna direkt rätt lösning
      loadSolutions(result.categoryKey, result.symptomKey);
      // scrolla ner lite till lösningspanelen
      solutionsEl.scrollIntoView({ behavior: "smooth" });
    };
    searchResultsEl.appendChild(div);
  });
}




// Starta appen
loadCategories();

if (searchInput) {
  searchInput.addEventListener("input", e => {
    searchProblems(e.target.value);
  });

  // visa hjälptext från start
  searchProblems("");
}

