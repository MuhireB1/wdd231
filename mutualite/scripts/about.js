async function displayPrograms() {
    try {
        const response = await fetch("./data/programs.json");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        // Render the programs
        const container = document.querySelector("#programs-grid");

        container.innerHTML = data.map(d => `
            <article class="program-card">
        <div class="program-body">
          <span class="program-tag">${d.category}</span>
          <h3>${d.program_name}</h3>
          <p>${d.description}</p>
          <p><strong>${d.annual_beneficiaries.toLocaleString()}</strong> people supported annually</p>
          <a class="program-link" href="#">Explore program</a>
        </div>
      </article>
    `).join("");
    } catch (error) {
        console.error("unable to load programs:", error);
    }
};

displayPrograms();