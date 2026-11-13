"use strict";
document.documentElement.classList.add("has-js");
// Données synthétiques recoupées avec les observations du dépôt Python.
// Maquette : la production devra importer un export généré par le pipeline.
const synthetic = {
  all: {
    participations: 652,
    sessions: 28,
    groups: 12,
    zones: { A: 295, B: 225, C: 132 },
    label: "toutes les activités",
  },
  awareness: {
    participations: 500,
    sessions: 18,
    groups: 6,
    zones: { A: 220, B: 180, C: 100 },
    label: "sensibilisation",
  },
  psychosocial: {
    participations: 152,
    sessions: 10,
    groups: 6,
    zones: { A: 75, B: 45, C: 32 },
    label: "soutien collectif",
  },
};
const filters = document.querySelectorAll(".activity-filter");
for (const button of filters) {
  button.addEventListener("click", () => {
    const selected = synthetic[button.dataset.filter];
    if (!selected) return;
    for (const b of filters)
      b.setAttribute("aria-pressed", String(b === button));
    document.getElementById("participation-total").textContent = String(
      selected.participations,
    );
    document.getElementById("sessions-total").textContent = String(
      selected.sessions,
    );
    document.getElementById("group-count").textContent =
      selected.groups + " groupes";
    const max = Math.max(...Object.values(selected.zones));
    for (const code of ["A", "B", "C"]) {
      const value = selected.zones[code];
      document.getElementById("zone-" + code).textContent = String(value);
      document.querySelector('[data-zone="' + code + '"]').style.width =
        ((100 * value) / max).toFixed(2) + "%";
    }
    document
      .getElementById("zone-chart")
      .setAttribute(
        "aria-label",
        "Participations pour " +
          selected.label +
          " : zone A " +
          selected.zones.A +
          ", zone B " +
          selected.zones.B +
          ", zone C " +
          selected.zones.C,
      );
    document.getElementById("filter-announcement").textContent =
      selected.participations +
      " participations, " +
      selected.sessions +
      " séances, pour " +
      selected.label;
  });
}
