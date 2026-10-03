/* Admin panel for updating Diyavasu (founder) details.
   Storage key shared with client.js: pulse_founder_profile
   Change the password below to your own. */

const ADMIN_PASSWORD = "diyavasu123";
const PROFILE_KEY = "pulse_founder_profile";
const PROJECTS_KEY = "pulse_projects";
const TEAM_KEY = "pulse_team";

const DEFAULT_PROJECTS_ADMIN = [
  {
    id: "p-1",
    title: "Campus AED Map — Phase 2 Expansion",
    status: "In Progress",
    category: "Campus Safety",
    date: "Oct 2026",
    description: "Expand our AED audit to the sports complex and bus bays. Goal: QR-code maps on every classroom door so any student can reach an AED within 90 seconds.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p-2",
    title: "Community CPR Drive: 500 Hands in a Day",
    status: "Upcoming",
    category: "CPR Training",
    date: "Nov 2026",
    description: "One-day open camp in the school gym with 20 mannequins. Target: train 500 students, parents and canteen staff in hands-only CPR at 110 BPM.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p-3",
    title: "Stop-the-Bleed Kit Fundraiser",
    status: "Planned",
    category: "First Aid Kits",
    date: "Dec 2026",
    description: "Raise funds for 50 classroom bleed-control pouches (gauze, gloves, tourniquet trainer, emergency card with 911 / 112). Assemble with student volunteers.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
  }
];

const DEFAULT_TEAM_ADMIN = [
  {
    id: "t-1",
    name: "Diyavasu Gubbi Ravi Sandesh",
    role: "Founder & President",
    bio: "Started Pulse Point so no student feels helpless in an emergency. Leads CPR bootcamps and AED mapping.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bg: "#E63946"
  },
  {
    id: "t-2",
    name: "Aarav Rao",
    role: "VP — Training & Drills",
    bio: "Runs weekly mannequin practice, tracks compression scores and certifies new volunteers.",
    photo: "",
    bg: "#4361EE"
  },
  {
    id: "t-3",
    name: "Meera Shah",
    role: "Media & Vlog Lead",
    bio: "Films training vlogs, edits reels and keeps the Student Hub feed updated.",
    photo: "",
    bg: "#06D6A0"
  },
  {
    id: "t-4",
    name: "Kabir Nair",
    role: "Outreach Coordinator",
    bio: "Contacts schools, books venues and organises community CPR camps and kit drives.",
    photo: "",
    bg: "#F59E0B"
  }
];

function loadProjects() {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    if (!raw) return [...DEFAULT_PROJECTS_ADMIN];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...DEFAULT_PROJECTS_ADMIN];
  } catch {
    return [...DEFAULT_PROJECTS_ADMIN];
  }
}

function loadTeam() {
  try {
    const raw = localStorage.getItem(TEAM_KEY);
    if (!raw) return [...DEFAULT_TEAM_ADMIN];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...DEFAULT_TEAM_ADMIN];
  } catch {
    return [...DEFAULT_TEAM_ADMIN];
  }
}

function escapeAdminHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const DEFAULT_FOUNDER_PROFILE_ADMIN = {
  name: "Diyavasu Gubbi Ravi Sandesh",
  role: "Club Founder & President",
  tagline: "High School Student \u2022 Community Health Advocate \u2022 First Aid Educator",
  quote: "I started this club because nobody should feel helpless when an accident happens at school or at home. If we can teach every high schooler CPR, AED, and bleeding control, our entire generation becomes a safety net.",
  photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
};

function loadProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return { ...DEFAULT_FOUNDER_PROFILE_ADMIN };
    return { ...DEFAULT_FOUNDER_PROFILE_ADMIN, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_FOUNDER_PROFILE_ADMIN };
  }
}

function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

document.addEventListener("DOMContentLoaded", () => {
  const loginCard = document.getElementById("loginCard");
  const panel = document.getElementById("adminPanel");
  const passwordInput = document.getElementById("adminPassword");
  const unlockBtn = document.getElementById("unlockBtn");
  const loginError = document.getElementById("loginError");
  const form = document.getElementById("adminForm");
  const lockBtn = document.getElementById("lockBtn");
  const resetBtn = document.getElementById("resetAdminBtn");

  const nameInput = document.getElementById("adminName");
  const roleInput = document.getElementById("adminRole");
  const taglineInput = document.getElementById("adminTagline");
  const quoteInput = document.getElementById("adminQuote");
  const photoUrlInput = document.getElementById("adminPhotoUrl");
  const avatarUrlInput = document.getElementById("adminAvatarUrl");
  const fileInput = document.getElementById("adminPhotoFile");
  const dropzone = document.getElementById("adminDropzone");
  const previewImg = document.getElementById("adminPreview");
  const previewName = document.getElementById("adminPreviewName");
  const previewRole = document.getElementById("adminPreviewRole");

  function fillForm(p) {
    nameInput.value = p.name || "";
    roleInput.value = p.role || "";
    taglineInput.value = p.tagline || "";
    quoteInput.value = p.quote || "";
    photoUrlInput.value = p.photo || "";
    avatarUrlInput.value = p.avatar === p.photo ? "" : (p.avatar || "");
    updatePreview();
  }

  function updatePreview() {
    const photo = photoUrlInput.value.trim() || DEFAULT_FOUNDER_PROFILE_ADMIN.photo;
    previewImg.src = photo;
    previewName.textContent = nameInput.value.trim() || "Preview Name";
    previewRole.textContent = roleInput.value.trim() || "Role";
  }

  [nameInput, roleInput, photoUrlInput].forEach(el => el && el.addEventListener("input", updatePreview));

  function unlock() {
    loginCard.style.display = "none";
    panel.classList.add("unlocked");
    fillForm(loadProfile());
    renderProjectsAdmin();
    renderTeamAdmin();
    const projCard = document.getElementById("projectsAdminCard");
    if (projCard) projCard.style.display = "block";
    const teamCard = document.getElementById("teamAdminCard");
    if (teamCard) teamCard.style.display = "block";
  }

  // Auto-unlock if already unlocked this session
  if (sessionStorage.getItem("pulse_admin_unlocked") === "1") {
    unlock();
  }

  unlockBtn.addEventListener("click", () => {
    if (passwordInput.value === ADMIN_PASSWORD) {
      sessionStorage.setItem("pulse_admin_unlocked", "1");
      loginError.style.display = "none";
      unlock();
      showAdminToast("🔓 Admin panel unlocked!");
    } else {
      loginError.style.display = "block";
    }
  });

  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      unlockBtn.click();
    }
  });

  lockBtn.addEventListener("click", () => {
    sessionStorage.removeItem("pulse_admin_unlocked");
    panel.classList.remove("unlocked");
    loginCard.style.display = "block";
    passwordInput.value = "";
  });

  dropzone.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      photoUrlInput.value = e.target.result;
      updatePreview();
      showAdminToast("📷 Photo loaded — click Save Changes to apply!");
    };
    reader.readAsDataURL(file);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const photo = photoUrlInput.value.trim() || DEFAULT_FOUNDER_PROFILE_ADMIN.photo;
    const avatar = avatarUrlInput.value.trim() || photo;
    const profile = {
      name: nameInput.value.trim(),
      role: roleInput.value.trim(),
      tagline: taglineInput.value.trim(),
      quote: quoteInput.value.trim(),
      photo,
      avatar
    };
    saveProfile(profile);
    updatePreview();
    showAdminToast("✅ Diyavasu details updated! Check the homepage.");
  });

  resetBtn.addEventListener("click", () => {
    if (!confirm("Reset Diyavasu details to default?")) return;
    localStorage.removeItem(PROFILE_KEY);
    fillForm({ ...DEFAULT_FOUNDER_PROFILE_ADMIN });
    showAdminToast("Default profile restored. Click Save Changes to apply.");
  });

  // ---------------- Prospective Projects CRUD ----------------
  const projectsListEl = document.getElementById("projectsAdminList");
  const projectForm = document.getElementById("projectForm");
  const projectEditId = document.getElementById("projectEditId");
  const projectTitleInput = document.getElementById("projectTitle");
  const projectStatusInput = document.getElementById("projectStatus");
  const projectDateInput = document.getElementById("projectDate");
  const projectCategoryInput = document.getElementById("projectCategory");
  const projectImageInput = document.getElementById("projectImage");
  const projectDescInput = document.getElementById("projectDesc");
  const projectFormTitle = document.getElementById("projectFormTitle");
  const projectSaveBtn = document.getElementById("projectSaveBtn");
  const projectCancelBtn = document.getElementById("projectCancelEditBtn");

  function renderProjectsAdmin() {
    if (!projectsListEl) return;
    const projects = loadProjects();
    if (projects.length === 0) {
      projectsListEl.innerHTML = `<p class="admin-hint">No projects yet. Add your first prospective project below.</p>`;
      return;
    }
    projectsListEl.innerHTML = projects.map(p => `
      <div class="admin-list-item">
        <div class="admin-list-info">
          <strong>${escapeAdminHtml(p.title)}</strong>
          <span class="admin-list-meta">${escapeAdminHtml(p.status || "")} • ${escapeAdminHtml(p.category || "")} • ${escapeAdminHtml(p.date || "")}</span>
          <span class="admin-list-desc">${escapeAdminHtml((p.description || "").slice(0, 120))}${(p.description || "").length > 120 ? "…" : ""}</span>
        </div>
        <div class="admin-list-actions">
          <button type="button" class="btn btn-secondary btn-sm" data-proj-edit="${p.id}">Edit</button>
          <button type="button" class="btn btn-secondary btn-sm admin-danger" data-proj-del="${p.id}">Delete</button>
        </div>
      </div>
    `).join("");
  }

  function resetProjectForm() {
    if (projectForm) projectForm.reset();
    if (projectEditId) projectEditId.value = "";
    if (projectFormTitle) projectFormTitle.textContent = "Add New Project";
    if (projectSaveBtn) projectSaveBtn.textContent = "Add Project";
    if (projectCancelBtn) projectCancelBtn.style.display = "none";
    if (projectStatusInput) projectStatusInput.value = "Upcoming";
  }

  if (projectsListEl) {
    projectsListEl.addEventListener("click", (e) => {
      const editBtn = e.target.closest("[data-proj-edit]");
      const delBtn = e.target.closest("[data-proj-del]");
      const projects = loadProjects();
      if (editBtn) {
        const item = projects.find(p => p.id === editBtn.dataset.projEdit);
        if (!item) return;
        projectEditId.value = item.id;
        projectTitleInput.value = item.title || "";
        projectStatusInput.value = item.status || "Upcoming";
        projectDateInput.value = item.date || "";
        projectCategoryInput.value = item.category || "";
        projectImageInput.value = (item.image || "").startsWith("data:") ? "" : (item.image || "");
        projectDescInput.value = item.description || "";
        projectFormTitle.textContent = "Edit Project";
        projectSaveBtn.textContent = "Save Project";
        projectCancelBtn.style.display = "inline-flex";
        projectForm.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (delBtn) {
        if (!confirm("Delete this project?")) return;
        const next = projects.filter(p => p.id !== delBtn.dataset.projDel);
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(next));
        if (projectEditId.value === delBtn.dataset.projDel) resetProjectForm();
        renderProjectsAdmin();
        showAdminToast("Project deleted.");
      }
    });
  }

  if (projectCancelBtn) projectCancelBtn.addEventListener("click", resetProjectForm);

  const resetProjectsBtn = document.getElementById("resetProjectsBtn");
  if (resetProjectsBtn) resetProjectsBtn.addEventListener("click", () => {
    if (!confirm("Reset projects to default?")) return;
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(DEFAULT_PROJECTS_ADMIN));
    resetProjectForm();
    renderProjectsAdmin();
    showAdminToast("Default projects restored.");
  });

  if (projectForm) projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = projectTitleInput.value.trim();
    const desc = projectDescInput.value.trim();
    if (!title || !desc) {
      showAdminToast("Title and description are required.");
      return;
    }
    const projects = loadProjects();
    const data = {
      title,
      status: projectStatusInput.value,
      date: projectDateInput.value.trim(),
      category: projectCategoryInput.value.trim() || "Project",
      image: projectImageInput.value.trim(),
      description: desc
    };
    if (projectEditId.value) {
      const idx = projects.findIndex(p => p.id === projectEditId.value);
      if (idx > -1) projects[idx] = { ...projects[idx], ...data };
      showAdminToast("✅ Project updated! Check homepage Projects section.");
    } else {
      projects.unshift({ id: "p-" + Date.now(), ...data });
      showAdminToast("✅ Project added! Check homepage Projects section.");
    }
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    resetProjectForm();
    renderProjectsAdmin();
  });

  // ---------------- Our Team CRUD ----------------
  const teamListEl = document.getElementById("teamAdminList");
  const teamForm = document.getElementById("teamForm");
  const teamEditId = document.getElementById("teamEditId");
  const teamNameInput = document.getElementById("teamName");
  const teamRoleInput = document.getElementById("teamRole");
  const teamBioInput = document.getElementById("teamBio");
  const teamPhotoInput = document.getElementById("teamPhoto");
  const teamColorInput = document.getElementById("teamColor");
  const teamFormTitle = document.getElementById("teamFormTitle");
  const teamSaveBtn = document.getElementById("teamSaveBtn");
  const teamCancelBtn = document.getElementById("teamCancelEditBtn");
  const teamDropzone = document.getElementById("teamDropzone");
  const teamFileInput = document.getElementById("teamPhotoFile");
  const teamPreviewContainer = document.getElementById("teamPreviewContainer");
  const teamPreviewImg = document.getElementById("teamPreviewImg");
  const removeTeamMediaBtn = document.getElementById("removeTeamMediaBtn");
  let tempTeamPhoto = null;

  function renderTeamAdmin() {
    if (!teamListEl) return;
    const team = loadTeam();
    if (team.length === 0) {
      teamListEl.innerHTML = `<p class="admin-hint">No team members yet. Add your first member below.</p>`;
      return;
    }
    teamListEl.innerHTML = team.map(m => `
      <div class="admin-list-item">
        <div class="admin-list-info">
          <strong>${escapeAdminHtml(m.name)}</strong>
          <span class="admin-list-meta">${escapeAdminHtml(m.role || "")}</span>
          <span class="admin-list-desc">${escapeAdminHtml((m.bio || "").slice(0, 120))}${(m.bio || "").length > 120 ? "…" : ""}</span>
        </div>
        <div class="admin-list-actions">
          <button type="button" class="btn btn-secondary btn-sm" data-team-edit="${m.id}">Edit</button>
          <button type="button" class="btn btn-secondary btn-sm admin-danger" data-team-del="${m.id}">Delete</button>
        </div>
      </div>
    `).join("");
  }

  function resetTeamForm() {
    if (teamForm) teamForm.reset();
    if (teamEditId) teamEditId.value = "";
    tempTeamPhoto = null;
    if (teamPreviewImg) teamPreviewImg.src = "";
    if (teamPreviewContainer) teamPreviewContainer.style.display = "none";
    if (teamDropzone) teamDropzone.style.display = "block";
    if (teamColorInput) teamColorInput.value = "#0284C7";
    if (teamFormTitle) teamFormTitle.textContent = "Add Team Member";
    if (teamSaveBtn) teamSaveBtn.textContent = "Add Member";
    if (teamCancelBtn) teamCancelBtn.style.display = "none";
  }

  function showTeamPreview(src) {
    if (!teamPreviewImg || !teamPreviewContainer) return;
    teamPreviewImg.src = src;
    teamPreviewContainer.style.display = "block";
    if (teamDropzone) teamDropzone.style.display = "none";
  }

  if (teamDropzone && teamFileInput) {
    teamDropzone.addEventListener("click", () => teamFileInput.click());
    teamFileInput.addEventListener("change", () => {
      const file = teamFileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        tempTeamPhoto = ev.target.result;
        if (teamPhotoInput) teamPhotoInput.value = "";
        showTeamPreview(tempTeamPhoto);
        showAdminToast("📷 Team photo loaded — click Add/Save to apply!");
      };
      reader.readAsDataURL(file);
    });
  }

  if (removeTeamMediaBtn) removeTeamMediaBtn.addEventListener("click", () => {
    tempTeamPhoto = null;
    teamPreviewImg.src = "";
    teamPreviewContainer.style.display = "none";
    teamDropzone.style.display = "block";
    teamFileInput.value = "";
    if (teamPhotoInput) teamPhotoInput.value = "";
  });

  if (teamListEl) {
    teamListEl.addEventListener("click", (e) => {
      const editBtn = e.target.closest("[data-team-edit]");
      const delBtn = e.target.closest("[data-team-del]");
      const team = loadTeam();
      if (editBtn) {
        const item = team.find(m => m.id === editBtn.dataset.teamEdit);
        if (!item) return;
        teamEditId.value = item.id;
        teamNameInput.value = item.name || "";
        teamRoleInput.value = item.role || "";
        teamBioInput.value = item.bio || "";
        teamColorInput.value = /^#[0-9a-fA-F]{6}$/.test(item.bg || "") ? item.bg : "#0284C7";
        if ((item.photo || "").startsWith("data:")) {
          tempTeamPhoto = item.photo;
          if (teamPhotoInput) teamPhotoInput.value = "";
          showTeamPreview(item.photo);
        } else {
          tempTeamPhoto = null;
          if (teamPhotoInput) teamPhotoInput.value = item.photo || "";
          if (teamPreviewContainer) teamPreviewContainer.style.display = "none";
          if (teamDropzone) teamDropzone.style.display = "block";
        }
        teamFormTitle.textContent = "Edit Team Member";
        teamSaveBtn.textContent = "Save Member";
        teamCancelBtn.style.display = "inline-flex";
        teamForm.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (delBtn) {
        if (!confirm("Remove this team member?")) return;
        const next = team.filter(m => m.id !== delBtn.dataset.teamDel);
        localStorage.setItem(TEAM_KEY, JSON.stringify(next));
        if (teamEditId.value === delBtn.dataset.teamDel) resetTeamForm();
        renderTeamAdmin();
        showAdminToast("Team member removed.");
      }
    });
  }

  if (teamCancelBtn) teamCancelBtn.addEventListener("click", resetTeamForm);

  const resetTeamBtn = document.getElementById("resetTeamBtn");
  if (resetTeamBtn) resetTeamBtn.addEventListener("click", () => {
    if (!confirm("Reset team to default?")) return;
    localStorage.setItem(TEAM_KEY, JSON.stringify(DEFAULT_TEAM_ADMIN));
    resetTeamForm();
    renderTeamAdmin();
    showAdminToast("Default team restored.");
  });

  if (teamForm) teamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = teamNameInput.value.trim();
    const role = teamRoleInput.value.trim();
    const bio = teamBioInput.value.trim();
    if (!name || !role || !bio) {
      showAdminToast("Name, role and bio are required.");
      return;
    }
    const photo = tempTeamPhoto || teamPhotoInput.value.trim();
    const team = loadTeam();
    const data = { name, role, bio, photo, bg: teamColorInput.value || "#0284C7" };
    if (teamEditId.value) {
      const idx = team.findIndex(m => m.id === teamEditId.value);
      if (idx > -1) team[idx] = { ...team[idx], ...data };
      showAdminToast("✅ Team member updated! Check homepage Our Team section.");
    } else {
      team.push({ id: "t-" + Date.now(), ...data });
      showAdminToast("✅ Team member added! Check homepage Our Team section.");
    }
    localStorage.setItem(TEAM_KEY, JSON.stringify(team));
    resetTeamForm();
    renderTeamAdmin();
  });

  // If session already unlocked (auto-unlock path ran before handlers), render lists now
  if (sessionStorage.getItem("pulse_admin_unlocked") === "1") {
    renderProjectsAdmin();
    renderTeamAdmin();
  }
});

function showAdminToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) {
    alert(message);
    return;
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
