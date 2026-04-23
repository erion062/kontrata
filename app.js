let sections = [
  {
    id: "hapja",
    title: "Hapja",
    tag: "Start",
    lines: [
      "O përshëndetje, a po flas me [emri]?",
      "Jam Erioni prej Trimmr.",
    ],
  },
  {
    id: "pyetja",
    title: "Pyetja e shpejtë",
    tag: "Pyetje",
    lines: [
      "Po ta bëj një pyetje të shpejtë — a po i merr rezervimet veç me thirrje, apo ke ndonjë sistem online?",
      "(S'pret shumë, vazhdon direkt)",
    ],
  },
  {
    id: "problemi",
    title: "Problemi",
    tag: "Reframe",
    lines: [
      "Se po ta them drejt: shumica e berberëve po humbin klientë veç pse s'kanë rezervim online.",
    ],
  },
  {
    id: "prezantimi",
    title: "Prezantimi",
    tag: "Vlera",
    lines: [
      "Na kemi sjellë një platformë të re për berberë në Kosovë dhe Shqipëri — si një lloj Instagrami për biznesin tënd, po me rezervime direkte.",
    ],
  },
  {
    id: "klienti",
    title: "Per klientin",
    tag: "Benefit",
    lines: [
      "Klienti:",
      "• hyn, ta sheh punën",
      "• e zgjedh orarin vet",
      "• rezervon pa të thirr ty fare",
    ],
  },
  {
    id: "ti",
    title: "Per ty",
    tag: "Benefit",
    lines: [
      "Ti ndërkohë:",
      "• e menaxhon krejt kalendarin",
      "• i shton punëtorët",
      "• i bllokon ditët kur don pushim",
      "Punë më pak, klientë ma shumë.",
    ],
  },
  {
    id: "cmimi",
    title: "Cmimi",
    tag: "Oferta",
    lines: [
      "Çmimi është 15€ në muaj, po sinqerisht — muajin e parë e ke falas, vetëm provoje.",
    ],
  },
  {
    id: "mbyllja",
    title: "Mbyllja",
    tag: "Close",
    lines: [
      "A don me ta hap një llogari provë sot, 2 minuta punë?",
    ],
  },
];

const sectionNav = document.getElementById("sectionNav");
const scriptContainer = document.getElementById("scriptContainer");
const fontSizeControl = document.getElementById("fontSize");
const searchInput = document.getElementById("search");
const toggleFocusButton = document.getElementById("toggleFocus");
const toggleEditorButton = document.getElementById("toggleEditor");
const tabPitchButton = document.getElementById("tabPitch");
const tabCrmButton = document.getElementById("tabCrm");
const tabNotesButton = document.getElementById("tabNotes");
const tabCloseButtons = Array.from(document.querySelectorAll(".tab-close"));
const newTabButton = document.querySelector(".new-tab");
const addressBar = document.getElementById("addressBar");
const focusPanel = document.getElementById("focusPanel");
const focusSection = document.getElementById("focusSection");
const focusLine = document.getElementById("focusLine");
const focusPreview = document.getElementById("focusPreview");
const nextLineButton = document.getElementById("nextLine");
const prevLineButton = document.getElementById("prevLine");
const editorPanel = document.getElementById("editorPanel");
const editorList = document.getElementById("editorList");
const editorStatus = document.getElementById("editorStatus");
const addSectionButton = document.getElementById("addSection");
const saveScriptButton = document.getElementById("saveScript");
const closeEditorButton = document.getElementById("closeEditor");
const homePanel = document.getElementById("homePanel");
const homeCards = Array.from(document.querySelectorAll(".home-card"));
const notesPanel = document.getElementById("notesPanel");
const notesInput = document.getElementById("notesInput");
const saveNotesButton = document.getElementById("saveNotes");
const notesStatus = document.getElementById("notesStatus");
const toggleNotesBtn = document.getElementById("toggleNotesBtn");
const cancelNotesBtn = document.getElementById("cancelNotesBtn");
const closeNotesModalBtn = document.getElementById("closeNotesModalBtn");
const notesModal = document.getElementById("notesModal");
const notesDisplay = document.getElementById("notesDisplay");
const crmPanel = document.getElementById("crmPanel");
const crmList = document.getElementById("crmList");
const crmStatus = document.getElementById("crmStatus");
const leadForm = document.getElementById("leadForm");
const leadName = document.getElementById("leadName");
const leadPhone = document.getElementById("leadPhone");
const leadCity = document.getElementById("leadCity");
const leadStatus = document.getElementById("leadStatus");
const leadNotes = document.getElementById("leadNotes");
const countInterested = document.getElementById("countInterested");
const countNotInterested = document.getElementById("countNotInterested");
const countFollow = document.getElementById("countFollow");
const toggleFormBtn = document.getElementById("toggleFormBtn");
const cancelFormBtn = document.getElementById("cancelFormBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const crmModal = document.getElementById("crmModal");
const crmModalTitle = document.getElementById("crmModalTitle");
const crmFilters = document.getElementById("crmFilters");
const cityStatsList = document.getElementById("cityStatsList");

let activeSectionIndex = 0;
let activeLineIndex = 0;
let leads = [];
let crmFilter = "all";
let editingLeadId = null;

const buildNav = () => {
  sectionNav.innerHTML = "";
  sections.forEach((section, index) => {
    const link = document.createElement("a");
    link.href = `#${section.id}`;
    link.className = "section-link";
    link.dataset.index = index;
    link.innerHTML = `<span>${index + 1}. ${section.title}</span><small>${section.tag}</small>`;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveSection(index, true);
    });
    sectionNav.appendChild(link);
  });
};

const buildCards = () => {
  scriptContainer.innerHTML = "";
  sections.forEach((section, index) => {
    const card = document.createElement("article");
    card.id = section.id;
    card.className = "card";
    card.dataset.index = index;

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${section.title}`;

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = section.tag;

    const list = document.createElement("ul");
    section.lines.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      list.appendChild(li);
    });

    card.appendChild(tag);
    card.appendChild(heading);
    card.appendChild(list);
    scriptContainer.appendChild(card);
  });
};

const setActiveSection = (index, scrollIntoView = false) => {
  activeSectionIndex = index;
  activeLineIndex = 0;
  updateActiveStates();
  updateFocusPanel();

  if (scrollIntoView) {
    const targetCard = document.querySelector(`.card[data-index="${index}"]`);
    targetCard?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const updateActiveStates = () => {
  document.querySelectorAll(".section-link").forEach((link) => {
    link.classList.toggle("active", Number(link.dataset.index) === activeSectionIndex);
  });
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.index) === activeSectionIndex);
  });
};

const updateFocusPanel = () => {
  const section = sections[activeSectionIndex];
  focusSection.textContent = section.title;
  focusLine.textContent = section.lines[activeLineIndex] || "";
  focusPreview.textContent = section.lines[activeLineIndex + 1] || "Fundi i seksionit";
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const createEditorRow = (labelText, field, value, isTextarea = false) => {
  const row = document.createElement("div");
  row.className = "editor-row";

  const label = document.createElement("label");
  label.textContent = labelText;

  const input = isTextarea ? document.createElement("textarea") : document.createElement("input");
  if (!isTextarea) {
    input.type = "text";
  }
  input.dataset.field = field;
  input.value = value;

  row.appendChild(label);
  row.appendChild(input);

  return row;
};

const renderEditor = () => {
  editorList.innerHTML = "";
  sections.forEach((section, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "editor-section";
    wrapper.dataset.index = index;

    wrapper.appendChild(createEditorRow("Titulli", "title", section.title));
    wrapper.appendChild(createEditorRow("Shenja", "tag", section.tag));
    wrapper.appendChild(
      createEditorRow(
        "Rreshtat (nje fjali per rresht)",
        "lines",
        section.lines.join("\n"),
        true
      )
    );

    const removeButton = document.createElement("button");
    removeButton.className = "ghost editor-remove";
    removeButton.type = "button";
    removeButton.textContent = "Hiq seksionin";
    removeButton.addEventListener("click", () => {
      sections = sections.filter((_, idx) => idx !== index);
      renderEditor();
    });

    wrapper.appendChild(removeButton);
    editorList.appendChild(wrapper);
  });
};

const collectEditorData = () => {
  const entries = Array.from(editorList.querySelectorAll(".editor-section"));
  return entries.map((entry, index) => {
    const titleValue = entry.querySelector("[data-field='title']").value.trim();
    const tagValue = entry.querySelector("[data-field='tag']").value.trim();
    const linesValue = entry
      .querySelector("[data-field='lines']")
      .value.split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const title = titleValue || `Seksioni ${index + 1}`;
    const tag = tagValue || "Seksion";
    const id = slugify(title) || `seksioni-${index + 1}`;

    return {
      id,
      title,
      tag,
      lines: linesValue.length ? linesValue : ["(Shto tekst)"],
    };
  });
};

const openEditor = () => {
  renderEditor();
  editorStatus.textContent = "";
  editorPanel.classList.remove("hidden");
};

const closeEditor = () => {
  editorPanel.classList.add("hidden");
};

const saveToCloud = async (payload) => {
  editorStatus.textContent = "Duke ruajtur...";
  try {
    const response = await fetch("/api/script", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sections: payload }),
    });

    if (!response.ok) {
      throw new Error("Save failed");
    }

    editorStatus.textContent = "U ruajt me sukses.";
  } catch (error) {
    editorStatus.textContent = "Gabim ne ruajtje. Provo perseri.";
  }
};

const loadFromCloud = async () => {
  try {
    const response = await fetch("/api/script");
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    if (Array.isArray(data.sections) && data.sections.length > 0) {
      sections = data.sections;
    }
  } catch (error) {
    // Ignore loading errors and keep defaults
  }
};

const adjustFontSize = (size) => {
  document.documentElement.style.setProperty("--script-size", `${size}px`);
};

const showTab = (tab) => {
  if (tab === "pitch") {
    tabPitchButton.classList.remove("hidden");
  }
  if (tab === "crm") {
    tabCrmButton.classList.remove("hidden");
  }
  if (tab === "notes") {
    tabNotesButton.classList.remove("hidden");
  }
};

const updateAddressBar = (tab) => {
  if (!addressBar) {
    return;
  }
  if (tab === "pitch") {
    addressBar.textContent = "trimmr.app/pitch";
  } else if (tab === "crm") {
    addressBar.textContent = "trimmr.app/crm";
  } else if (tab === "notes") {
    addressBar.textContent = "trimmr.app/notes";
  } else {
    addressBar.textContent = "trimmr.app/newtab";
  }
};

const setActiveTab = (tab) => {
  const isHome = tab === "home";
  const isCrm = tab === "crm";
  const isNotes = tab === "notes";
  document.body.classList.toggle("home-active", isHome);
  document.body.classList.toggle("crm-active", isCrm);
  document.body.classList.toggle("notes-active", isNotes);
  homePanel.classList.toggle("hidden", !isHome);
  crmPanel.classList.toggle("hidden", !isCrm);
  notesPanel.classList.toggle("hidden", !isNotes);
  tabPitchButton.classList.toggle("active", tab === "pitch");
  tabCrmButton.classList.toggle("active", isCrm);
  tabNotesButton.classList.toggle("active", isNotes);
  updateAddressBar(tab);
  
  if (isCrm) {
    loadLeads();
  }
  if (isNotes) {
    loadNotes();
  }
};

const renderNotes = (notes) => {
  if (!notesDisplay) return;
  notesDisplay.innerHTML = "";
  if (!notes || notes.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Nuk ka shenime ende.";
    empty.style.color = "var(--muted)";
    empty.style.textAlign = "center";
    empty.style.padding = "40px 20px";
    notesDisplay.appendChild(empty);
    return;
  }

  notes.forEach((note) => {
    const card = document.createElement("div");
    card.className = "note-card";

    const content = document.createElement("div");
    content.className = "note-card-content";
    content.textContent = note.content;

    const footer = document.createElement("div");
    footer.className = "note-card-footer";

    const date = document.createElement("span");
    date.className = "note-card-date";
    const d = new Date(note.updated_at);
    date.textContent = d.toLocaleString("sq-AL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "ghost";
    deleteBtn.textContent = "Fshi";
    deleteBtn.style.padding = "6px 12px";
    deleteBtn.style.fontSize = "0.8rem";
    deleteBtn.addEventListener("click", async () => {
      await deleteNote(note.id);
    });

    footer.appendChild(date);
    footer.appendChild(deleteBtn);

    card.appendChild(content);
    card.appendChild(footer);
    notesDisplay.appendChild(card);
  });
};

const loadNotes = async () => {
  try {
    const response = await fetch("/api/notes");
    if (!response.ok) {
      throw new Error("Load failed");
    }
    const data = await response.json();
    renderNotes(data.notes || []);
  } catch (error) {
    if (notesDisplay) {
      notesDisplay.textContent = "Nuk u lexuan shenimet.";
    }
  }
};

const deleteNote = async (id) => {
  try {
    await fetch("/api/notes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await loadNotes();
  } catch (error) {
    console.error("Delete failed", error);
  }
};

const saveNotes = async () => {
  if (!notesInput) {
    return;
  }
  const content = notesInput.value.trim();
  if (!content) {
    notesStatus.textContent = "Shkruaj diçka.";
    return;
  }
  notesStatus.textContent = "Duke ruajtur...";
  try {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error("Save failed");
    }
    notesStatus.textContent = "U ruajt.";
    setTimeout(() => {
      notesModal?.classList.add("hidden");
      notesInput.value = "";
      notesStatus.textContent = "";
      loadNotes();
    }, 600);
  } catch (error) {
    notesStatus.textContent = "Gabim ne ruajtje.";
  }
};

const statusLabel = (value) => {
  switch (value) {
    case "interested":
      return "Interesuar";
    case "not_interested":
      return "Jo interesuar";
    default:
      return "Ne pritje";
  }
};

const updateCrmStats = () => {
  const interested = leads.filter((lead) => lead.status === "interested").length;
  const notInterested = leads.filter((lead) => lead.status === "not_interested").length;
  const follow = leads.filter((lead) => lead.status === "follow_up").length;
  countInterested.textContent = interested;
  countNotInterested.textContent = notInterested;
  countFollow.textContent = follow;
  renderCityStats();
};

const renderCityStats = () => {
  if (!cityStatsList) return;
  cityStatsList.innerHTML = "";

  const counts = new Map();
  leads.forEach((lead) => {
    const city = (lead.city || "").trim() || "Pa qytet";
    counts.set(city, (counts.get(city) || 0) + 1);
  });

  if (counts.size === 0) {
    const empty = document.createElement("p");
    empty.className = "crm-city-empty";
    empty.textContent = "Asnje qytet ende.";
    cityStatsList.appendChild(empty);
    return;
  }

  const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  sorted.forEach(([city, count]) => {
    const row = document.createElement("div");
    row.className = "crm-city-row";
    const name = document.createElement("span");
    name.textContent = city;
    const value = document.createElement("strong");
    value.textContent = count;
    row.appendChild(name);
    row.appendChild(value);
    cityStatsList.appendChild(row);
  });
};

const renderLeads = () => {
  crmList.innerHTML = "";
  updateCrmStats();

  const visibleLeads = crmFilter === "all"
    ? leads
    : leads.filter((lead) => lead.status === crmFilter);

  if (visibleLeads.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = leads.length === 0
      ? "Nuk ka kontakte ende."
      : "Asnje kontakt me kete status.";
    empty.style.color = "var(--muted)";
    empty.style.textAlign = "center";
    empty.style.padding = "40px 20px";
    crmList.appendChild(empty);
    return;
  }

  visibleLeads.forEach((lead) => {
    const card = document.createElement("div");
    card.className = "crm-card";

    const nameCol = document.createElement("div");
    nameCol.className = "crm-card-name";
    const nameLabel = document.createElement("span");
    nameLabel.className = "crm-card-label";
    nameLabel.textContent = "EMRI";
    const nameValue = document.createElement("h3");
    nameValue.textContent = lead.name;
    nameCol.appendChild(nameLabel);
    nameCol.appendChild(nameValue);

    const phoneCol = document.createElement("div");
    phoneCol.className = "crm-card-phone";
    const phoneLabel = document.createElement("span");
    phoneLabel.className = "crm-card-label";
    phoneLabel.textContent = "NUMRI";
    const phoneValue = document.createElement("span");
    phoneValue.textContent = lead.phone || "-";
    phoneCol.appendChild(phoneLabel);
    phoneCol.appendChild(phoneValue);

    const cityCol = document.createElement("div");
    cityCol.className = "crm-card-city";
    const cityLabel = document.createElement("span");
    cityLabel.className = "crm-card-label";
    cityLabel.textContent = "QYTETI";
    const cityValue = document.createElement("span");
    cityValue.textContent = lead.city || "-";
    cityCol.appendChild(cityLabel);
    cityCol.appendChild(cityValue);

    const statusCol = document.createElement("div");
    statusCol.className = "crm-card-status";
    const pill = document.createElement("span");
    pill.className = `crm-pill ${lead.status}`;
    pill.textContent = statusLabel(lead.status);
    statusCol.appendChild(pill);

    const notesCol = document.createElement("div");
    notesCol.className = "crm-card-notes";
    const notesLabel = document.createElement("span");
    notesLabel.className = "crm-card-label";
    notesLabel.textContent = "SHENIME";
    const notesValue = document.createElement("span");
    notesValue.textContent = lead.notes || "-";
    notesCol.appendChild(notesLabel);
    notesCol.appendChild(notesValue);

    const actions = document.createElement("div");
    actions.className = "crm-actions";

    const editButton = document.createElement("button");
    editButton.className = "ghost";
    editButton.textContent = "Edito";
    editButton.style.padding = "8px 14px";
    editButton.style.fontSize = "0.85rem";
    editButton.addEventListener("click", () => openEditLead(lead));

    const deleteButton = document.createElement("button");
    deleteButton.className = "ghost";
    deleteButton.textContent = "Fshi";
    deleteButton.style.padding = "8px 14px";
    deleteButton.style.fontSize = "0.85rem";

    deleteButton.addEventListener("click", async () => {
      await deleteLead(lead.id);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    card.appendChild(nameCol);
    card.appendChild(phoneCol);
    card.appendChild(cityCol);
    card.appendChild(statusCol);
    card.appendChild(notesCol);
    card.appendChild(actions);
    crmList.appendChild(card);
  });

  updateCrmStats();
};

const loadLeads = async () => {
  try {
    const response = await fetch("/api/leads");
    if (!response.ok) {
      throw new Error("Load failed");
    }
    const data = await response.json();
    leads = Array.isArray(data.leads) ? data.leads : [];
    renderLeads();
  } catch (error) {
    crmStatus.textContent = "Nuk u lexuan kontaktet.";
  }
};

const createLead = async (payload) => {
  crmStatus.textContent = "Duke ruajtur...";
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Save failed");
    }
    crmStatus.textContent = "U ruajt.";
    await loadLeads();
  } catch (error) {
    crmStatus.textContent = "Gabim ne ruajtje.";
  }
};

const updateLead = async (payload) => {
  crmStatus.textContent = "Duke perditesuar...";
  try {
    const response = await fetch("/api/leads", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Update failed");
    }
    crmStatus.textContent = "U perditesua.";
    await loadLeads();
  } catch (error) {
    crmStatus.textContent = "Gabim ne perditesim.";
  }
};

const deleteLead = async (id) => {
  crmStatus.textContent = "Duke fshire...";
  try {
    const response = await fetch("/api/leads", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      throw new Error("Delete failed");
    }
    crmStatus.textContent = "U fshi.";
    await loadLeads();
  } catch (error) {
    crmStatus.textContent = "Gabim ne fshirje.";
  }
};

const handleSearch = () => {
  const term = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(term) ? "block" : "none";
    if (term && text.includes(term)) {
      activeSectionIndex = index;
    }
  });
  updateActiveStates();
  updateFocusPanel();
};

const toggleFocus = () => {
  focusPanel.classList.toggle("hidden");
  toggleFocusButton.textContent = focusPanel.classList.contains("hidden")
    ? "Menyra fokus"
    : "Dil nga fokusi";
};

const moveLine = (direction) => {
  const section = sections[activeSectionIndex];
  const nextIndex = activeLineIndex + direction;
  if (nextIndex < 0) {
    if (activeSectionIndex > 0) {
      activeSectionIndex -= 1;
      activeLineIndex = sections[activeSectionIndex].lines.length - 1;
    }
  } else if (nextIndex >= section.lines.length) {
    if (activeSectionIndex < sections.length - 1) {
      activeSectionIndex += 1;
      activeLineIndex = 0;
    }
  } else {
    activeLineIndex = nextIndex;
  }
  updateActiveStates();
  updateFocusPanel();
};

const moveSection = (direction) => {
  const nextIndex = activeSectionIndex + direction;
  if (nextIndex < 0 || nextIndex >= sections.length) {
    return;
  }
  setActiveSection(nextIndex, true);
};

const initializeApp = async () => {
  await loadFromCloud();
  buildNav();
  buildCards();
  setActiveSection(0, false);
  adjustFontSize(fontSizeControl.value);
  await loadLeads();
  await loadNotes();
  setActiveTab("home");
};

initializeApp();

fontSizeControl.addEventListener("input", (event) => {
  adjustFontSize(event.target.value);
});

searchInput.addEventListener("input", handleSearch);

nextLineButton.addEventListener("click", () => moveLine(1));
prevLineButton.addEventListener("click", () => moveLine(-1));

toggleFocusButton.addEventListener("click", toggleFocus);
toggleEditorButton.addEventListener("click", openEditor);
closeEditorButton.addEventListener("click", closeEditor);
tabPitchButton.addEventListener("click", () => setActiveTab("pitch"));
tabCrmButton.addEventListener("click", () => setActiveTab("crm"));
tabNotesButton.addEventListener("click", () => setActiveTab("notes"));
tabCloseButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const tabItem = button.closest(".tab-item");
    tabItem?.classList.add("hidden");
    setActiveTab("home");
  });
});
newTabButton?.addEventListener("click", () => setActiveTab("home"));
homeCards.forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;
    const nextTab = target === "crm" ? "crm" : target === "notes" ? "notes" : "pitch";
    showTab(nextTab);
    setActiveTab(nextTab);
  });
});
saveNotesButton?.addEventListener("click", saveNotes);

toggleNotesBtn?.addEventListener("click", () => {
  notesModal?.classList.remove("hidden");
});

cancelNotesBtn?.addEventListener("click", () => {
  notesModal?.classList.add("hidden");
  notesInput.value = "";
  notesStatus.textContent = "";
});

closeNotesModalBtn?.addEventListener("click", () => {
  notesModal?.classList.add("hidden");
  notesInput.value = "";
  notesStatus.textContent = "";
});

notesModal?.querySelector(".notes-modal-overlay")?.addEventListener("click", () => {
  notesModal?.classList.add("hidden");
  notesInput.value = "";
  notesStatus.textContent = "";
});

const closeCrmModal = () => {
  crmModal?.classList.add("hidden");
  leadForm.reset();
  editingLeadId = null;
  if (crmModalTitle) crmModalTitle.textContent = "Shto kontakt te ri";
};

const openCreateLead = () => {
  editingLeadId = null;
  leadForm.reset();
  leadStatus.value = "interested";
  if (crmModalTitle) crmModalTitle.textContent = "Shto kontakt te ri";
  crmModal?.classList.remove("hidden");
};

const openEditLead = (lead) => {
  editingLeadId = lead.id;
  leadName.value = lead.name || "";
  leadPhone.value = lead.phone || "";
  leadCity.value = lead.city || "";
  leadStatus.value = lead.status || "interested";
  leadNotes.value = lead.notes || "";
  if (crmModalTitle) crmModalTitle.textContent = "Edito kontaktin";
  crmStatus.textContent = "";
  crmModal?.classList.remove("hidden");
};

toggleFormBtn?.addEventListener("click", openCreateLead);
cancelFormBtn?.addEventListener("click", closeCrmModal);
closeModalBtn?.addEventListener("click", closeCrmModal);
crmModal?.querySelector(".crm-modal-overlay")?.addEventListener("click", closeCrmModal);

const setCrmFilter = (value) => {
  crmFilter = value || "all";
  if (crmFilters) {
    crmFilters.querySelectorAll(".crm-filter").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === crmFilter);
    });
  }
  renderLeads();
};

crmFilters?.querySelectorAll(".crm-filter").forEach((btn) => {
  btn.addEventListener("click", () => setCrmFilter(btn.dataset.filter));
});

document.querySelectorAll(".crm-stat[data-filter]").forEach((stat) => {
  stat.addEventListener("click", () => setCrmFilter(stat.dataset.filter));
});

addSectionButton.addEventListener("click", () => {
  sections = [
    ...sections,
    {
      id: `seksioni-${sections.length + 1}`,
      title: `Seksioni ${sections.length + 1}`,
      tag: "Seksion",
      lines: ["(Shto tekst)"],
    },
  ];
  renderEditor();
});
saveScriptButton.addEventListener("click", async () => {
  sections = collectEditorData();
  buildNav();
  buildCards();
  setActiveSection(0, false);
  await saveToCloud(sections);
});

leadForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = {
    name: leadName.value.trim(),
    phone: leadPhone.value.trim(),
    city: leadCity.value.trim(),
    status: leadStatus.value,
    notes: leadNotes.value.trim(),
  };
  if (!payload.name) {
    crmStatus.textContent = "Shkruaj emrin.";
    return;
  }
  if (editingLeadId) {
    await updateLead({ id: editingLeadId, ...payload });
  } else {
    await createLead(payload);
  }
  closeCrmModal();
});

window.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea")) {
    return;
  }
  if (event.key >= "0" && event.key <= "9") {
    const index = event.key === "0" ? 9 : Number(event.key) - 1;
    if (sections[index]) {
      setActiveSection(index, true);
    }
    return;
  }
  switch (event.key.toLowerCase()) {
    case "n":
      moveSection(1);
      break;
    case "p":
      moveSection(-1);
      break;
    case " ":
      event.preventDefault();
      moveLine(1);
      break;
    case "f":
      toggleFocus();
      break;
    default:
      break;
  }
});
