/* Admin panel for updating Diyavasu (founder) details.
   Storage key shared with client.js: pulse_founder_profile
   Change the password below to your own. */

const ADMIN_PASSWORD = "diyavasu123";
const PROFILE_KEY = "pulse_founder_profile";
const PROJECTS_KEY = "pulse_projects";
const TEAM_KEY = "pulse_team";
const FOUNDER_POSTS_KEY = "pulse_founder_posts";
const COMMUNITY_POSTS_KEY = "pulse_community_posts";

const DEFAULT_FOUNDER_POSTS_ADMIN = [
  {
    id: "f-1",
    type: "vlog",
    title: "Hands-On CPR Bootcamp: Training 120 High Schoolers in One Week!",
    category: "CPR Training",
    date: "Sep 18, 2026",
    readTime: "4 min watch",
    author: "Diyavasu Gubbi Ravi Sandesh",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/M4ACYp75mjU",
    excerpt: "Watch our club members set up 15 CPR mannequins in the gym. Here is how we taught high schoolers compression depth and recoil.",
    content: "When we launched our First Aid Club, our number one objective was simple: no high schooler should graduate without knowing how to perform high-quality CPR.\n\nLast week, we partnered with local healthcare mentors and brought 15 training mannequins into the gymnasium. Over five days, 120 students cycled through 45-minute intensive practical drills.\n\nKey Lessons:\n1. Hands-only CPR requires pressing down at least 2 inches (5cm).\n2. Pushing to the beat of 'Stayin' Alive' (100-120 bpm) prevents fatigue while keeping blood flowing to the brain.\n3. Calling for an AED early is the single biggest predictor of survival."
  },
  {
    id: "f-2",
    type: "project",
    title: "Campus AED Hunt: Mapping Every Defibrillator in Our High School",
    category: "Campus Safety",
    date: "Sep 10, 2026",
    readTime: "3 min read",
    author: "Diyavasu Gubbi Ravi Sandesh",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    excerpt: "Did you know where your school's AED is? We mapped all 18 AED units across sports halls, cafeteria, and main lobbies.",
    content: "An AED is useless if nobody knows where to find it in a crisis. Our club conducted a campus-wide audit. We found that while our school possessed 18 modern automated defibrillators, fewer than 15% of students could point to the nearest one.\n\nWe designed brightly colored emergency location posters, created a quick QR-code map for classroom doors, and tested emergency runner times. Today, any student can locate an AED within 90 seconds from any room on campus."
  },
  {
    id: "f-3",
    type: "blog",
    title: "Why I Started The First Aid Club: High Schoolers as First Responders",
    category: "Founder's Story",
    date: "Aug 28, 2026",
    readTime: "5 min read",
    author: "Diyavasu Gubbi Ravi Sandesh",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    excerpt: "Teenagers are capable of immense leadership. When emergencies strike, panic is the enemy. First aid training is the antidote.",
    content: "When medical crises occur in real life, doctors and ambulances aren't immediately present—bystanders are. As high schoolers, we spend most of our waking hours together: in classrooms, cafeteria lines, athletic practices, and bus rides.\n\nBy starting this First Aid Club, my goal is to transform bystander hesitation into proactive action. We want our club to be a welcoming community where anyone—regardless of whether they want to be a future doctor or an artist—gains the self-reliance and empathy needed to step forward and save a life."
  }
];

const CATEGORY_LABELS_ADMIN = {
  drills: "Training Drills",
  certifications: "Certifications",
  vlogs: "Student Vlogs",
  tips: "First Aid Tips"
};

function loadFounderPosts() {
  try {
    const raw = localStorage.getItem(FOUNDER_POSTS_KEY);
    if (!raw) return [...DEFAULT_FOUNDER_POSTS_ADMIN];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...DEFAULT_FOUNDER_POSTS_ADMIN];
  } catch {
    return [...DEFAULT_FOUNDER_POSTS_ADMIN];
  }
}

function saveFounderPosts(posts) {
  localStorage.setItem(FOUNDER_POSTS_KEY, JSON.stringify(posts));
}

function loadCommunityPosts() {
  try {
    const raw = localStorage.getItem(COMMUNITY_POSTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCommunityPosts(posts) {
  localStorage.setItem(COMMUNITY_POSTS_KEY, JSON.stringify(posts));
}

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
    renderPostsAdmin();
    renderCommunityAdmin();
    ["projectsAdminCard", "teamAdminCard", "postsAdminCard", "communityAdminCard"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "block";
    });
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
    ["projectsAdminCard", "teamAdminCard", "postsAdminCard", "communityAdminCard"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });
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

  // ---------------- Blogs / Vlogs / Projects CRUD ----------------
  const postsListEl = document.getElementById("postsAdminList");
  const postForm = document.getElementById("postForm");
  const postEditId = document.getElementById("postEditId");
  const postFormatInput = document.getElementById("postFormat");
  const postCategoryInput = document.getElementById("postCategory");
  const postTitleInput = document.getElementById("postTitle");
  const postImageUrlInput = document.getElementById("postImageUrl");
  const postVideoUrlInput = document.getElementById("postVideoUrl");
  const postContentInput = document.getElementById("postContent");
  const postFormTitle = document.getElementById("postFormTitle");
  const postSaveBtn = document.getElementById("postSaveBtn");
  const postCancelBtn = document.getElementById("postCancelEditBtn");
  const postImageDropzone = document.getElementById("postImageDropzone");
  const postImageFile = document.getElementById("postImageFile");
  const postImagePreviewContainer = document.getElementById("postImagePreviewContainer");
  const postImagePreviewImg = document.getElementById("postImagePreviewImg");
  const removePostImageBtn = document.getElementById("removePostImageBtn");
  const postVideoDropzone = document.getElementById("postVideoDropzone");
  const postVideoFile = document.getElementById("postVideoFile");
  const postVideoName = document.getElementById("postVideoName");
  let tempPostImage = null;
  let tempPostVideo = null;
  let tempPostVideoName = "";

  function renderPostsAdmin() {
    if (!postsListEl) return;
    const posts = loadFounderPosts();
    if (posts.length === 0) {
      postsListEl.innerHTML = `<p class="admin-hint">No posts yet. Add the first blog / vlog below.</p>`;
      return;
    }
    const badge = (t) => t === "vlog" ? "🎥 Vlog" : t === "project" ? "🛠️ Project" : "📝 Blog";
    postsListEl.innerHTML = posts.map(p => `
      <div class="admin-list-item">
        <div class="admin-list-info">
          <strong>${escapeAdminHtml(p.title)} <span class="admin-list-meta">${badge(p.type)}${p.videoUrl ? " • 🎬 video" : ""}</span></strong>
          <span class="admin-list-meta">${escapeAdminHtml(p.category || "")} • ${escapeAdminHtml(p.date || "")}</span>
          <span class="admin-list-desc">${escapeAdminHtml((p.excerpt || p.content || "").slice(0, 120))}</span>
        </div>
        <div class="admin-list-actions">
          <button type="button" class="btn btn-secondary btn-sm" data-post-edit="${p.id}">Edit</button>
          <button type="button" class="btn btn-secondary btn-sm admin-danger" data-post-del="${p.id}">Delete</button>
        </div>
      </div>
    `).join("");
  }

  function showPostImagePreview(src) {
    if (!postImagePreviewImg || !postImagePreviewContainer) return;
    postImagePreviewImg.src = src;
    postImagePreviewContainer.style.display = "block";
    if (postImageDropzone) postImageDropzone.style.display = "none";
  }

  function clearPostImagePreview() {
    tempPostImage = null;
    if (postImagePreviewImg) postImagePreviewImg.src = "";
    if (postImagePreviewContainer) postImagePreviewContainer.style.display = "none";
    if (postImageDropzone) postImageDropzone.style.display = "block";
    if (postImageFile) postImageFile.value = "";
  }

  function showPostVideoName(name) {
    if (!postVideoName) return;
    if (name) {
      postVideoName.textContent = "📹 Attached video: " + name + " (saved on publish)";
      postVideoName.style.display = "block";
    } else {
      postVideoName.textContent = "";
      postVideoName.style.display = "none";
    }
  }

  function resetPostForm() {
    if (postForm) postForm.reset();
    if (postEditId) postEditId.value = "";
    clearPostImagePreview();
    tempPostVideo = null;
    tempPostVideoName = "";
    showPostVideoName("");
    if (postVideoFile) postVideoFile.value = "";
    if (postFormatInput) postFormatInput.value = "blog";
    if (postFormTitle) postFormTitle.textContent = "Add New Blog / Vlog";
    if (postSaveBtn) postSaveBtn.textContent = "Add Post";
    if (postCancelBtn) postCancelBtn.style.display = "none";
  }

  if (postImageDropzone && postImageFile) {
    postImageDropzone.addEventListener("click", () => postImageFile.click());
    postImageFile.addEventListener("change", () => {
      const file = postImageFile.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        tempPostImage = ev.target.result;
        if (postImageUrlInput) postImageUrlInput.value = "";
        showPostImagePreview(tempPostImage);
        showAdminToast("📷 Cover picture loaded — click Add/Save to publish!");
      };
      reader.readAsDataURL(file);
    });
  }

  if (removePostImageBtn) removePostImageBtn.addEventListener("click", () => {
    clearPostImagePreview();
    if (postImageUrlInput) postImageUrlInput.value = "";
  });

  if (postVideoDropzone && postVideoFile) {
    postVideoDropzone.addEventListener("click", () => postVideoFile.click());
    postVideoFile.addEventListener("change", () => {
      const file = postVideoFile.files[0];
      if (!file) return;
      if (file.size > 12 * 1024 * 1024) {
        showAdminToast("⚠️ Video over 12MB may exceed browser storage. Try a shorter clip or paste a link instead.");
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        tempPostVideo = ev.target.result;
        tempPostVideoName = file.name;
        if (postVideoUrlInput) postVideoUrlInput.value = "";
        showPostVideoName(file.name);
        showAdminToast("🎬 Video loaded — click Add/Save to publish!");
      };
      reader.readAsDataURL(file);
    });
  }

  if (postsListEl) {
    postsListEl.addEventListener("click", (e) => {
      const editBtn = e.target.closest("[data-post-edit]");
      const delBtn = e.target.closest("[data-post-del]");
      const posts = loadFounderPosts();
      if (editBtn) {
        const item = posts.find(p => p.id === editBtn.dataset.postEdit);
        if (!item) return;
        postEditId.value = item.id;
        postFormatInput.value = item.type || "blog";
        postCategoryInput.value = item.category || "";
        postTitleInput.value = item.title || "";
        postContentInput.value = item.content || "";
        if ((item.image || "").startsWith("data:")) {
          tempPostImage = item.image;
          if (postImageUrlInput) postImageUrlInput.value = "";
          showPostImagePreview(item.image);
        } else {
          clearPostImagePreview();
          if (postImageUrlInput) postImageUrlInput.value = item.image || "";
        }
        if ((item.videoUrl || "").startsWith("data:")) {
          tempPostVideo = item.videoUrl;
          tempPostVideoName = "attached video";
          if (postVideoUrlInput) postVideoUrlInput.value = "";
          showPostVideoName("attached video (kept — upload a new file to replace)");
        } else {
          tempPostVideo = null;
          tempPostVideoName = "";
          showPostVideoName("");
          if (postVideoUrlInput) postVideoUrlInput.value = item.videoUrl || "";
        }
        postFormTitle.textContent = "Edit Post";
        postSaveBtn.textContent = "Save Post";
        postCancelBtn.style.display = "inline-flex";
        postForm.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (delBtn) {
        if (!confirm("Delete this post?")) return;
        saveFounderPosts(posts.filter(p => p.id !== delBtn.dataset.postDel));
        if (postEditId.value === delBtn.dataset.postDel) resetPostForm();
        renderPostsAdmin();
        showAdminToast("Post deleted.");
      }
    });
  }

  if (postCancelBtn) postCancelBtn.addEventListener("click", resetPostForm);

  const resetPostsBtn = document.getElementById("resetPostsBtn");
  if (resetPostsBtn) resetPostsBtn.addEventListener("click", () => {
    if (!confirm("Reset blogs/vlogs to default?")) return;
    saveFounderPosts([...DEFAULT_FOUNDER_POSTS_ADMIN]);
    resetPostForm();
    renderPostsAdmin();
    showAdminToast("Default posts restored.");
  });

  if (postForm) postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();
    if (!title || !content) {
      showAdminToast("Title and story are required.");
      return;
    }
    const profile = loadProfile();
    const posts = loadFounderPosts();
    const image = tempPostImage || postImageUrlInput.value.trim() || "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80";
    const videoUrl = tempPostVideo || postVideoUrlInput.value.trim();
    const data = {
      type: postFormatInput.value,
      title,
      category: postCategoryInput.value.trim() || "General",
      content,
      excerpt: content.slice(0, 130) + (content.length > 130 ? "..." : ""),
      image,
      videoUrl: videoUrl || ""
    };
    try {
      if (postEditId.value) {
        const idx = posts.findIndex(p => p.id === postEditId.value);
        if (idx > -1) posts[idx] = { ...posts[idx], ...data };
        showAdminToast("✅ Post updated! Check Diyavasu's Corner.");
      } else {
        posts.unshift({
          id: "f-" + Date.now(),
          date: "Today",
          readTime: data.type === "vlog" ? "3 min watch" : "3 min read",
          author: profile.name || "Diyavasu Gubbi Ravi Sandesh",
          authorAvatar: profile.avatar || "",
          ...data
        });
        showAdminToast("✅ Post published to Diyavasu's Corner!");
      }
      saveFounderPosts(posts);
    } catch (err) {
      showAdminToast("⚠️ Could not save — video/picture too large for browser storage. Try smaller files or URLs.");
      return;
    }
    resetPostForm();
    renderPostsAdmin();
  });

  // ---------------- Student Hub (community) edit / delete ----------------
  const communityListEl = document.getElementById("communityAdminList");
  const communityEditForm = document.getElementById("communityEditForm");
  const communityEditId = document.getElementById("communityEditId");
  const communityEditTitle = document.getElementById("communityEditTitle");
  const communityEditCategory = document.getElementById("communityEditCategory");
  const communityEditText = document.getElementById("communityEditText");

  function renderCommunityAdmin() {
    if (!communityListEl) return;
    const posts = loadCommunityPosts();
    if (posts.length === 0) {
      communityListEl.innerHTML = `<p class="admin-hint">No student posts stored in this browser yet. Visit the homepage Student Hub to add one, or reset below to load samples.</p>`;
      return;
    }
    communityListEl.innerHTML = posts.map(p => `
      <div class="admin-list-item">
        <div class="admin-list-info">
          <strong>${escapeAdminHtml(p.title)}</strong>
          <span class="admin-list-meta">${escapeAdminHtml(p.author || "")} • ${escapeAdminHtml(CATEGORY_LABELS_ADMIN[p.category] || p.category || "")}</span>
          <span class="admin-list-desc">${escapeAdminHtml((p.text || "").slice(0, 120))}</span>
        </div>
        <div class="admin-list-actions">
          <button type="button" class="btn btn-secondary btn-sm" data-comm-edit="${p.id}">Edit</button>
          <button type="button" class="btn btn-secondary btn-sm admin-danger" data-comm-del="${p.id}">Delete</button>
        </div>
      </div>
    `).join("");
  }

  if (communityListEl) {
    communityListEl.addEventListener("click", (e) => {
      const editBtn = e.target.closest("[data-comm-edit]");
      const delBtn = e.target.closest("[data-comm-del]");
      const posts = loadCommunityPosts();
      if (editBtn) {
        const item = posts.find(p => p.id === editBtn.dataset.commEdit);
        if (!item) return;
        communityEditId.value = item.id;
        communityEditTitle.value = item.title || "";
        communityEditCategory.value = item.category || "drills";
        communityEditText.value = item.text || "";
        communityEditForm.style.display = "block";
        communityEditForm.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (delBtn) {
        if (!confirm("Delete this student post?")) return;
        saveCommunityPosts(posts.filter(p => p.id !== delBtn.dataset.commDel));
        renderCommunityAdmin();
        showAdminToast("Student post deleted.");
      }
    });
  }

  const communityCancelBtn = document.getElementById("communityCancelEditBtn");
  if (communityCancelBtn) communityCancelBtn.addEventListener("click", () => {
    communityEditForm.style.display = "none";
    communityEditId.value = "";
  });

  if (communityEditForm) communityEditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const posts = loadCommunityPosts();
    const idx = posts.findIndex(p => p.id === communityEditId.value);
    if (idx === -1) return;
    posts[idx] = {
      ...posts[idx],
      title: communityEditTitle.value.trim(),
      category: communityEditCategory.value,
      categoryLabel: CATEGORY_LABELS_ADMIN[communityEditCategory.value] || "Student Story",
      text: communityEditText.value.trim()
    };
    saveCommunityPosts(posts);
    communityEditForm.style.display = "none";
    communityEditId.value = "";
    renderCommunityAdmin();
    showAdminToast("✅ Student post updated!");
  });

  const resetCommunityBtn = document.getElementById("resetCommunityBtn");
  if (resetCommunityBtn) resetCommunityBtn.addEventListener("click", () => {
    if (!confirm("Clear stored Student Hub posts? Homepage will reload samples on next visit.")) return;
    localStorage.removeItem(COMMUNITY_POSTS_KEY);
    if (communityEditForm) communityEditForm.style.display = "none";
    renderCommunityAdmin();
    showAdminToast("Student Hub storage cleared.");
  });

  // If session already unlocked (auto-unlock path ran before handlers), render lists now
  if (sessionStorage.getItem("pulse_admin_unlocked") === "1") {
    renderProjectsAdmin();
    renderTeamAdmin();
    renderPostsAdmin();
    renderCommunityAdmin();
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
