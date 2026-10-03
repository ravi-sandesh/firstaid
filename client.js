/* ==========================================================================
   FIRST AID CLUB - DIYAVASU GUBBI RAVI SANDESH
   Dynamic Logic, Storage, Audio Simulator & Upload Handling
   ========================================================================== */

// --- Default Seed Data for Diyavasu's Corner ---
const DEFAULT_FOUNDER_POSTS = [
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

// --- Default Seed Data for High School Community Feed ---
const DEFAULT_COMMUNITY_POSTS = [
  {
    id: "c-1",
    author: "Lucas Miller",
    school: "Eastside High School",
    avatarBg: "#3A86FF",
    category: "drills",
    categoryLabel: "Training Drills",
    title: "Practiced chest compressions on practice dummies today in 4th period!",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    text: "Our chapter had our first CPR session today after school! Diyavasu's metronome guide helped us maintain 110 BPM. Feeling so much more confident!",
    likes: 24,
    liked: false,
    date: "2 days ago"
  },
  {
    id: "c-2",
    author: "Maya Patel",
    school: "North Valley Prep",
    avatarBg: "#06D6A0",
    category: "certifications",
    categoryLabel: "Certifications",
    title: "Proud to receive our American Red Cross Youth First Aid Badges!",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    text: "Nine of our student officers just passed our BLS and First Aid certification! Big thank you to the club resources for helping us prepare.",
    likes: 41,
    liked: false,
    date: "4 days ago"
  },
  {
    id: "c-3",
    author: "Jordan Lee",
    school: "Oakridge High",
    avatarBg: "#E63946",
    category: "vlogs",
    categoryLabel: "Student Vlogs",
    title: "Quick demonstration on the R.I.C.E protocol for soccer sprains",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    text: "During our varsity match yesterday, two players had ankle twists. We filmed a 60-second recap on Rest, Ice, Compression, and Elevation.",
    likes: 19,
    liked: false,
    date: "1 week ago"
  },
  {
    id: "c-4",
    author: "Sophia Ramirez",
    school: "Westfield High",
    avatarBg: "#8338EC",
    category: "tips",
    categoryLabel: "First Aid Tips",
    title: "5 Items Every Student Backpack First Aid Kit Must Have",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    text: "1. Sterile Gauze pads, 2. Antiseptic alcohol wipes, 3. Triangular bandage, 4. Nitrile gloves, 5. Medical adhesive tape. Keep safe everyone!",
    likes: 35,
    liked: false,
    date: "1 week ago"
  },
  {
    id: "c-5",
    author: "Ananya Sharma",
    school: "Delhi Public School, New Delhi, India",
    avatarBg: "#FB5607",
    category: "drills",
    categoryLabel: "Training Drills",
    title: "Weekend CPR camp: trained 60 juniors on compression depth",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    text: "Grade 11 chapter here! We borrowed 6 mannequins from our local clinic and ran 30-min rotations. Big win: everyone can now call 112, start 110 BPM compressions, and send a runner for the AED. Next: canteen staff drill.",
    likes: 52,
    liked: false,
    date: "3 days ago"
  },
  {
    id: "c-6",
    author: "Oliver Bennett",
    school: "Manchester Grammar School, UK",
    avatarBg: "#0284C7",
    category: "certifications",
    categoryLabel: "Certifications",
    title: "12 of us earned St John Ambulance Young First Aider awards!",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    text: "Passed our assessment on recovery position, choking (back blows + abdominal thrusts), and calling 999 with clear location info. Our evidence folders are ready for DofE volunteering hours too!",
    likes: 47,
    liked: false,
    date: "5 days ago"
  },
  {
    id: "c-7",
    author: "Brian Otieno",
    school: "Nairobi High School, Kenya",
    avatarBg: "#059669",
    category: "drills",
    categoryLabel: "Training Drills",
    title: "Built 40 matatu first-aid pouches with our stop-the-bleed team",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
    text: "Fundraised 8,000 KES, packed gauze, gloves, and emergency cards (999 / 112) for bus drivers near our school. Practiced direct pressure and how NOT to remove an embedded object. Drivers loved it!",
    likes: 63,
    liked: false,
    date: "1 week ago"
  },
  {
    id: "c-8",
    author: "Yuki Tanaka",
    school: "Shibuya High School, Tokyo, Japan",
    avatarBg: "#E63946",
    category: "vlogs",
    categoryLabel: "Student Vlogs",
    title: "Vlog: earthquake go-bag + triangle bandage arm sling in 90 seconds",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    text: "Filmed our disaster-drill prep: whistle, water, meds list, and a sling demo for sprains. In Japan we call 119 for fire/ambulance. Full vlog shows the cool ceiling-hook elevation trick our nurse taught us!",
    likes: 38,
    liked: false,
    date: "1 week ago"
  },
  {
    id: "c-9",
    author: "Mariana Silva",
    school: "Colegio Santa Cruz, Sao Paulo, Brazil",
    avatarBg: "#7C3AED",
    category: "tips",
    categoryLabel: "First Aid Tips",
    title: "Sideline concussion checklist for school football (EN + PT)",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    text: "After two collisions last month we made a 1-page card: headache, dizziness, vomiting, unequal pupils = sit them out + call SAMU 192. Laminated 25 copies for coaches. Quer jogar seguro? Cola na gente!",
    likes: 44,
    liked: false,
    date: "2 weeks ago"
  }
];

// --- Default Founder Profile (editable via admin.html) ---
const DEFAULT_FOUNDER_PROFILE = {
  name: "Diyavasu Gubbi Ravi Sandesh",
  role: "Club Founder & President",
  tagline: "High School Student \u2022 Community Health Advocate \u2022 First Aid Educator",
  quote: "I started this club because nobody should feel helpless when an accident happens at school or at home. If we can teach every high schooler CPR, AED, and bleeding control, our entire generation becomes a safety net.",
  photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
};

// --- Default Prospective / Upcoming Projects (editable via admin.html) ---
const DEFAULT_PROJECTS = [
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

// --- Default Our Team roster (editable via admin.html) ---
const DEFAULT_TEAM = [
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

const PROJECTS_KEY = "pulse_projects";
const TEAM_KEY = "pulse_team";

function getFounderProfile() {
  if (typeof localStorage === "undefined") return { ...DEFAULT_FOUNDER_PROFILE };
  try {
    const raw = localStorage.getItem("pulse_founder_profile");
    if (!raw) return { ...DEFAULT_FOUNDER_PROFILE };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_FOUNDER_PROFILE, ...parsed };
  } catch {
    return { ...DEFAULT_FOUNDER_PROFILE };
  }
}

// --- State Management ---
let founderPosts = [];
let communityPosts = [];
let prospectiveProjects = [];
let teamMembers = [];
let registeredMember = null;
let currentCommunityFilter = "all";

// Audio & Metronome State
let audioCtx = null;
let metronomeInterval = null;
let isMetronomeRunning = false;

// Media Upload Temp Storage
let tempFounderPhoto = null;
let tempFounderVideo = null;
let editingFounderPostId = null;
let tempCommMedia = null;

function isAdminUnlocked() {
  try {
    return typeof sessionStorage !== "undefined" && sessionStorage.getItem("pulse_admin_unlocked") === "1";
  } catch {
    return false;
  }
}

// Resolve playable video: YouTube embed, uploaded data: video, or direct mp4/webm link.
// Returns { kind: 'youtube'|'file', src } or null. File URLs are rendered in a <video>
// tag (never an iframe) and only http(s)/data: sources are allowed.
function resolvePlayableVideo(url) {
  if (typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed) return null;
  if (/^https:\/\/(www\.)?youtube\.com\/embed\/[A-Za-z0-9_-]+$/.test(trimmed)) {
    return { kind: "youtube", src: trimmed };
  }
  if (/^data:video\/[a-z0-9.+-]+;base64,/.test(trimmed)) {
    return { kind: "file", src: trimmed };
  }
  if (/^https:\/\/[^"'\s<>]+\.(mp4|webm|ogg)(\?[^"'\s<>]*)?$/i.test(trimmed)) {
    return { kind: "file", src: trimmed };
  }
  return null;
}

// ==========================================================================
// Initialization & LocalStorage
// ==========================================================================
// Runs only in browsers. Guards keep this file import-safe in non-DOM
// runtimes (e.g. if a host ever bundles it as a server module, import
// must be a no-op instead of throwing "document is not defined").
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

if (isBrowser) {
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  renderFounderProfile();
  renderFounderPosts();
  renderProjects();
  renderTeam();
  renderCommunityPosts();
  setupNavigation();
  setupScenarios();
  setupMetronome();
  setupAedVoice();
  setupModals();
  setupJoinForm();
});
}

function safeParse(raw, fallback) {
  try {
    const val = JSON.parse(raw);
    return Array.isArray(val) ? val : fallback;
  } catch {
    return fallback;
  }
}

function initStorage() {
  const storedFounder = localStorage.getItem("pulse_founder_posts");
  founderPosts = storedFounder ? safeParse(storedFounder, DEFAULT_FOUNDER_POSTS) : [...DEFAULT_FOUNDER_POSTS];

  const storedProj = localStorage.getItem(PROJECTS_KEY);
  prospectiveProjects = storedProj ? safeParse(storedProj, DEFAULT_PROJECTS) : [...DEFAULT_PROJECTS];
  // Merge in new default projects missing from returning visitors' storage
  const existingProjIds = new Set(prospectiveProjects.map(p => p.id));
  let projMerged = false;
  DEFAULT_PROJECTS.forEach(def => {
    if (!existingProjIds.has(def.id)) {
      prospectiveProjects.push({ ...def });
      projMerged = true;
    }
  });
  if (projMerged || !storedProj) {
    try { localStorage.setItem(PROJECTS_KEY, JSON.stringify(prospectiveProjects)); } catch {}
  }

  const storedTeam = localStorage.getItem(TEAM_KEY);
  teamMembers = storedTeam ? safeParse(storedTeam, DEFAULT_TEAM) : [...DEFAULT_TEAM];
  const existingTeamIds = new Set(teamMembers.map(p => p.id));
  let teamMerged = false;
  DEFAULT_TEAM.forEach(def => {
    if (!existingTeamIds.has(def.id)) {
      teamMembers.push({ ...def });
      teamMerged = true;
    }
  });
  if (teamMerged || !storedTeam) {
    try { localStorage.setItem(TEAM_KEY, JSON.stringify(teamMembers)); } catch {}
  }

  const storedComm = localStorage.getItem("pulse_community_posts");
  communityPosts = storedComm ? safeParse(storedComm, DEFAULT_COMMUNITY_POSTS) : [...DEFAULT_COMMUNITY_POSTS];
  // Merge in any new default posts (e.g. new international users) missing from returning visitors' storage
  const existingIds = new Set(communityPosts.map(p => p.id));
  let merged = false;
  DEFAULT_COMMUNITY_POSTS.forEach(def => {
    if (!existingIds.has(def.id)) {
      communityPosts.push({ ...def });
      merged = true;
    }
  });
  if (merged) {
    try { localStorage.setItem("pulse_community_posts", JSON.stringify(communityPosts)); } catch {}
  }

  const storedMember = localStorage.getItem("pulse_member_pass");
  if (storedMember) {
    try {
      registeredMember = JSON.parse(storedMember);
      updateMemberPassCard(registeredMember);
    } catch {
      localStorage.removeItem("pulse_member_pass");
      registeredMember = null;
    }
  }
}

function saveStorage() {
  localStorage.setItem("pulse_founder_posts", JSON.stringify(founderPosts));
  localStorage.setItem("pulse_community_posts", JSON.stringify(communityPosts));
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(prospectiveProjects));
  localStorage.setItem(TEAM_KEY, JSON.stringify(teamMembers));
  if (registeredMember) {
    localStorage.setItem("pulse_member_pass", JSON.stringify(registeredMember));
  }
}

// ==========================================================================
// Rendering: Founder Profile (managed via admin.html)
// ==========================================================================
function renderFounderProfile() {
  const profile = getFounderProfile();
  const photoEl = document.getElementById("founderPhoto");
  if (photoEl) {
    photoEl.src = profile.photo;
    photoEl.alt = profile.name;
  }
  const nameEl = document.getElementById("founderName");
  if (nameEl) nameEl.textContent = profile.name;
  const roleEl = document.getElementById("founderRole");
  if (roleEl) roleEl.textContent = profile.role;
  const taglineEl = document.getElementById("founderTagline");
  if (taglineEl) taglineEl.textContent = profile.tagline;
  const quoteEl = document.getElementById("founderQuote");
  if (quoteEl) quoteEl.textContent = '"' + profile.quote.replace(/^"|"$/g, "") + '"';
  const footerNameEl = document.getElementById("footerFounderName");
  if (footerNameEl) footerNameEl.textContent = profile.name;
}

// ==========================================================================
// Rendering: Diyavasu's Corner Posts
// ==========================================================================
function renderFounderPosts() {
  const container = document.getElementById("founderPostsContainer");
  if (!container) return;

  container.innerHTML = "";

  founderPosts.forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card";

    const typeBadge = post.type === "vlog" ? "🎥 Vlog" : post.type === "project" ? "🛠️ Project" : "📝 Blog";
    const hasVideo = !!(post.videoUrl && String(post.videoUrl).trim());
    const adminControls = isAdminUnlocked() ? `
        <div style="display:flex; gap:8px; padding:0 1.5rem 1rem;">
          <button class="btn btn-secondary btn-sm" onclick="editFounderPost('${post.id}')">Edit</button>
          <button class="btn btn-secondary btn-sm" onclick="deleteFounderPost('${post.id}')" style="color:var(--primary); border-color:#FECACA;">Delete</button>
        </div>
      ` : "";

    card.innerHTML = `
      <div class="post-media">
        <span class="post-type-tag">${typeBadge}</span>
        <img src="${post.image}" alt="${escapeHtml(post.title)}" loading="lazy">
        ${hasVideo ? `
          <div class="video-play-overlay" onclick="openArticleModal('${post.id}')" title="Play Video">
            <div class="play-circle">▶</div>
          </div>
        ` : ''}
      </div>
      <div class="post-content">
        <div class="post-meta-row">
          <span class="badge badge-primary">${escapeHtml(post.category)}</span>
          <span>&bull;</span>
          <span>${post.date}</span>
          <span>&bull;</span>
          <span>${post.readTime}</span>
        </div>
        <h4 class="post-title">${escapeHtml(post.title)}</h4>
        <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
        <div class="post-footer">
          <div class="post-author">
            <img src="${post.authorAvatar || getFounderProfile().avatar}" alt="${escapeHtml(post.author)}" class="author-mini-avatar">
            <span>${escapeHtml(post.author)}</span>
          </div>
          <button class="post-read-btn" onclick="openArticleModal('${post.id}')">
            Read Story &rarr;
          </button>
        </div>
      </div>
      ${adminControls}
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// Rendering: Prospective Projects (managed via admin.html)
// ==========================================================================
function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  container.innerHTML = "";

  if (!prospectiveProjects || prospectiveProjects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: white; border-radius: 12px; border: 1px dashed var(--slate-300);">
        <p style="font-size: 1.05rem; color: var(--slate-600);">No upcoming projects yet — check back soon!</p>
      </div>
    `;
    return;
  }

  prospectiveProjects.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";

    const statusClass = /progress/i.test(project.status || "") ? "badge-teal"
      : /upcoming/i.test(project.status || "") ? "badge-primary"
      : "badge-gold";

    card.innerHTML = `
      <div class="project-media">
        ${project.image ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy">` : `<div class="project-media-fallback">🛠️</div>`}
        <span class="badge ${statusClass} project-status">${escapeHtml(project.status || "Planned")}</span>
      </div>
      <div class="project-body">
        <div class="post-meta-row">
          <span class="badge badge-blue">${escapeHtml(project.category || "Project")}</span>
          <span>&bull;</span>
          <span>${escapeHtml(project.date || "")}</span>
        </div>
        <h4 class="project-title">${escapeHtml(project.title)}</h4>
        <p class="project-desc">${escapeHtml(project.description || "")}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// Rendering: Our Team (managed via admin.html)
// ==========================================================================
function getInitials(name) {
  if (!name) return "?";
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

function renderTeam() {
  const container = document.getElementById("teamGrid");
  if (!container) return;

  container.innerHTML = "";

  if (!teamMembers || teamMembers.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: white; border-radius: 12px; border: 1px dashed var(--slate-300);">
        <p style="font-size: 1.05rem; color: var(--slate-600);">Team introductions coming soon!</p>
      </div>
    `;
    return;
  }

  teamMembers.forEach(member => {
    const card = document.createElement("article");
    card.className = "team-card";

    const avatarHtml = member.photo
      ? `<img src="${escapeHtml(member.photo)}" alt="${escapeHtml(member.name)}" class="team-photo" loading="lazy">`
      : `<div class="team-photo team-photo-fallback" style="background:${escapeHtml(member.bg || "#0284C7")}">${getInitials(member.name)}</div>`;

    card.innerHTML = `
      ${avatarHtml}
      <h4 class="team-name">${escapeHtml(member.name)}</h4>
      <span class="badge badge-primary team-role">${escapeHtml(member.role || "Member")}</span>
      <p class="team-bio">${escapeHtml(member.bio || "")}</p>
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// Rendering: Student Community Feed
// ==========================================================================
function renderCommunityPosts() {
  const container = document.getElementById("communityGrid");
  if (!container) return;

  container.innerHTML = "";

  const filtered = currentCommunityFilter === "all" 
    ? communityPosts 
    : communityPosts.filter(p => p.category === currentCommunityFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: white; border-radius: 12px; border: 1px dashed var(--slate-300);">
        <p style="font-size: 1.1rem; color: var(--slate-600); margin-bottom: 1rem;">No stories yet in this category.</p>
        <button class="btn btn-primary btn-sm" onclick="document.querySelector('#openCommunityUploadModalBtn').click()">
          Be the first high schooler to post!
        </button>
      </div>
    `;
    return;
  }

  filtered.forEach(post => {
    const card = document.createElement("article");
    card.className = "community-card";

    const initials = post.author.split(" ").map(n => n[0]).join("").toUpperCase();

    card.innerHTML = `
      <div class="community-media">
        <span class="post-type-tag" style="top:10px; left:10px;">${escapeHtml(post.categoryLabel || post.category)}</span>
        <img src="${post.image}" alt="${escapeHtml(post.title)}" loading="lazy">
      </div>
      <div class="community-body">
        <div class="community-author-row">
          <div class="member-info">
            <div class="member-avatar" style="background:${post.avatarBg || '#0284C7'}">${initials}</div>
            <div class="member-meta">
              <h5>${escapeHtml(post.author)}</h5>
              <span>${escapeHtml(post.school)}</span>
            </div>
          </div>
          <span style="font-size:0.75rem; color:var(--slate-400);">${post.date || 'Recent'}</span>
        </div>
        <h4 class="community-title">${escapeHtml(post.title)}</h4>
        <p class="community-text">${escapeHtml(post.text)}</p>
        <div class="community-card-footer">
          <button class="like-btn ${post.liked ? 'liked' : ''}" onclick="toggleLike('${post.id}')" id="like-${post.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${post.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>${post.likes || 0}</span>
          </button>
          <span class="badge badge-teal" style="font-size:0.7rem;">Verified Student</span>
          ${isAdminUnlocked() ? `<button class="btn btn-secondary btn-sm" onclick="deleteCommunityPost('${post.id}')" style="color:var(--primary); border-color:#FECACA;">Delete</button>` : ''}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// Community Filter & Likes
// ==========================================================================
const filterGroup = isBrowser ? document.getElementById("communityFilterGroup") : null;
if (filterGroup) {
  filterGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterGroup.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCommunityFilter = btn.dataset.filter;
    renderCommunityPosts();
  });
}

function toggleLike(postId) {
  const post = communityPosts.find(p => p.id === postId);
  if (!post) return;

  if (post.liked) {
    post.liked = false;
    post.likes = Math.max(0, (post.likes || 1) - 1);
  } else {
    post.liked = true;
    post.likes = (post.likes || 0) + 1;
    showToast("❤️ Liked story!");
  }

  saveStorage();
  renderCommunityPosts();
}

// ==========================================================================
// Interactive CPR Metronome with Web Audio API (110 BPM)
// ==========================================================================
function setupMetronome() {
  const toggleBtn = document.getElementById("toggleMetronomeBtn");
  const visualBtn = document.getElementById("metronomeVisualBtn");
  const statusText = document.getElementById("metronomeStatusText");

  const startStop = () => {
    if (isMetronomeRunning) {
      stopMetronome();
    } else {
      startMetronome();
    }
  };

  if (toggleBtn) toggleBtn.addEventListener("click", startStop);
  if (visualBtn) visualBtn.addEventListener("click", startStop);
}

function startMetronome() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isMetronomeRunning = true;
    const bpm = 110;
    const intervalMs = (60 / bpm) * 1000;

    const visualBtn = document.getElementById("metronomeVisualBtn");
    const toggleBtn = document.getElementById("toggleMetronomeBtn");
    const statusText = document.getElementById("metronomeStatusText");

    if (visualBtn) visualBtn.classList.add("pulsing");
    if (toggleBtn) toggleBtn.innerHTML = `<span>Stop CPR Sound</span>`;
    if (statusText) {
      statusText.innerText = "Beating at 110 BPM (Target Compression Rhythm)";
      statusText.style.color = "var(--primary)";
    }

    playBeep();
    metronomeInterval = setInterval(() => {
      playBeep();
    }, intervalMs);

    showToast("💓 CPR Metronome started at 110 BPM!");
  } catch (err) {
    console.warn("Audio Context not allowed without interaction", err);
  }
}

function stopMetronome() {
  isMetronomeRunning = false;
  if (metronomeInterval) clearInterval(metronomeInterval);

  const visualBtn = document.getElementById("metronomeVisualBtn");
  const toggleBtn = document.getElementById("toggleMetronomeBtn");
  const statusText = document.getElementById("metronomeStatusText");

  if (visualBtn) visualBtn.classList.remove("pulsing");
  if (toggleBtn) toggleBtn.innerHTML = `<span>Start CPR Sound (110 BPM)</span>`;
  if (statusText) {
    statusText.innerText = "Metronome: Stopped";
    statusText.style.color = "var(--slate-400)";
  }
}

function playBeep() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // Crisp A5 tone
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  } catch (e) {
    // Ignore audio glitches
  }
}

// ==========================================================================
// Interactive AED Voice Simulator
// ==========================================================================
function setupAedVoice() {
  const btn = document.getElementById("playAedSimBtn");
  const bubble = document.getElementById("aedVoiceBubble");
  if (!btn || !bubble) return;

  const aedPrompts = [
    "Unit ON. Follow voice prompts.",
    "Apply pads firmly to patient's bare chest as shown in picture.",
    "Plug in connector firmly beside flashing light.",
    "Analyzing heart rhythm... Do not touch the patient!",
    "Shock advised! Charging...",
    "Stand clear of patient! Deliver shock now. Press the blinking orange button.",
    "Shock delivered. It is safe to touch the patient. Begin CPR now."
  ];

  let promptIndex = 0;
  let isSpeaking = false;

  btn.addEventListener("click", () => {
    bubble.style.display = "block";
    promptIndex = 0;

    const speakNext = () => {
      if (promptIndex >= aedPrompts.length) {
        btn.innerText = "Replay AED Voice Sequence";
        bubble.innerHTML = "✅ Complete AED cycle simulated. Remember: Always follow unit prompts in real life.";
        return;
      }

      const text = aedPrompts[promptIndex];
      bubble.innerHTML = `🔊 <strong>AED Voice:</strong> "${text}"`;

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1.05;
        utterance.onend = () => {
          promptIndex++;
          setTimeout(speakNext, 1200);
        };
        window.speechSynthesis.speak(utterance);
      } else {
        promptIndex++;
        setTimeout(speakNext, 2500);
      }
    };

    btn.innerText = "Playing AED Prompts...";
    speakNext();
  });
}

// ==========================================================================
// Interactive Scenario Tabs
// ==========================================================================
function setupScenarios() {
  const tabs = document.querySelectorAll(".sim-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetId = tab.dataset.target;
      document.querySelectorAll(".scenario-panel").forEach(panel => {
        panel.classList.remove("active");
      });

      const activePanel = document.getElementById(targetId);
      if (activePanel) activePanel.classList.add("active");
    });
  });
}

// ==========================================================================
// Navigation & Mobile Drawer
// ==========================================================================
function setupNavigation() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Emergency Button Click Notice
  const emBtn = document.getElementById("emergencyDialBtn");
  if (emBtn) {
    emBtn.addEventListener("click", () => {
      alert("🚨 EMERGENCY SERVICES:\n\nUnited States & Canada: 911\nEurope & UK: 112 / 999\nIndia: 112 / 108\n\nIf someone is unresponsive and not breathing normally, call emergency services immediately!");
    });
  }
}

// ==========================================================================
// Modals & Upload Studios
// ==========================================================================
function setupModals() {
  // Founder Modal
  const openFounderBtn = document.getElementById("openFounderPostModalBtn");
  const founderModal = document.getElementById("founderPostModal");
  const closeFounderBtn = document.getElementById("closeFounderModalBtn");
  const founderDropzone = document.getElementById("founderDropzone");
  const founderFileInput = document.getElementById("founderFileInput");
  const founderPreviewContainer = document.getElementById("founderPreviewContainer");
  const founderPreviewImg = document.getElementById("founderPreviewImg");
  const removeFounderMediaBtn = document.getElementById("removeFounderMediaBtn");
  const founderForm = document.getElementById("founderPostForm");
  const founderVideoDropzone = document.getElementById("founderVideoDropzone");
  const founderVideoFile = document.getElementById("founderVideoFile");
  const founderVideoName = document.getElementById("founderVideoName");

  if (openFounderBtn && founderModal) {
    openFounderBtn.addEventListener("click", () => founderModal.classList.add("active"));
    closeFounderBtn.addEventListener("click", () => founderModal.classList.remove("active"));
  }

  if (founderDropzone && founderFileInput) {
    founderDropzone.addEventListener("click", () => founderFileInput.click());
    founderFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        tempFounderPhoto = event.target.result;
        founderPreviewImg.src = tempFounderPhoto;
        founderPreviewContainer.style.display = "block";
        founderDropzone.style.display = "none";
      };
      reader.readAsDataURL(file);
    });
  }

  if (founderVideoDropzone && founderVideoFile) {
    founderVideoDropzone.addEventListener("click", () => founderVideoFile.click());
    founderVideoFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 12 * 1024 * 1024) {
        showToast("⚠️ Video over 12MB may exceed browser storage. Try a shorter clip or paste a link instead.", true);
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        tempFounderVideo = event.target.result;
        const urlInput = document.getElementById("founderVideoUrl");
        if (urlInput) urlInput.value = "";
        if (founderVideoName) {
          founderVideoName.textContent = "📹 Attached: " + file.name;
          founderVideoName.style.display = "block";
        }
      };
      reader.readAsDataURL(file);
    });
  }

  function resetFounderModal() {
    founderForm.reset();
    tempFounderPhoto = null;
    tempFounderVideo = null;
    editingFounderPostId = null;
    founderPreviewContainer.style.display = "none";
    founderDropzone.style.display = "block";
    if (founderVideoFile) founderVideoFile.value = "";
    if (founderVideoName) {
      founderVideoName.textContent = "";
      founderVideoName.style.display = "none";
    }
    const submitBtn = founderForm.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.textContent = "Publish to Diyavasu's Corner";
  }

  if (removeFounderMediaBtn) {
    removeFounderMediaBtn.addEventListener("click", () => {
      tempFounderPhoto = null;
      founderPreviewImg.src = "";
      founderPreviewContainer.style.display = "none";
      founderDropzone.style.display = "block";
      founderFileInput.value = "";
    });
  }

  if (founderForm) {
    founderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("founderPostTitle").value.trim();
      const tag = document.getElementById("founderPostTag").value.trim() || "Project";
      const type = document.getElementById("postType").value;
      const content = document.getElementById("founderPostContent").value.trim();
      const urlInput = document.getElementById("founderVideoUrl");
      const videoUrl = (tempFounderVideo || (urlInput && urlInput.value.trim()) || "");

      if (!title || !content) {
        showToast("Title and story are required.", true);
        return;
      }

      const profile = getFounderProfile();
      try {
        if (editingFounderPostId) {
          const idx = founderPosts.findIndex(p => p.id === editingFounderPostId);
          if (idx > -1) {
            founderPosts[idx] = {
              ...founderPosts[idx],
              type,
              title,
              category: tag,
              content,
              excerpt: content.slice(0, 130) + (content.length > 130 ? "..." : ""),
              image: tempFounderPhoto || founderPosts[idx].image,
              videoUrl
            };
          }
          showToast("✅ Post updated!");
        } else {
          const newPost = {
            id: "f-" + Date.now(),
            type: type,
            title: title,
            category: tag,
            date: "Today",
            readTime: type === "vlog" ? "3 min watch" : "3 min read",
            author: profile.name,
            authorAvatar: profile.avatar,
            image: tempFounderPhoto || "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
            videoUrl,
            excerpt: content.slice(0, 130) + (content.length > 130 ? "..." : ""),
            content: content
          };
          founderPosts.unshift(newPost);
          showToast("🎉 Post published to Diyavasu's Corner!");
        }
        saveStorage();
      } catch (err) {
        showToast("⚠️ Could not save — media too large for browser storage. Try smaller files or URLs.", true);
        return;
      }
      renderFounderPosts();

      resetFounderModal();
      founderModal.classList.remove("active");
    });
  }

  // Community Modal
  const openCommBtn = document.getElementById("openCommunityUploadModalBtn");
  const commModal = document.getElementById("communityUploadModal");
  const closeCommBtn = document.getElementById("closeCommunityModalBtn");
  const commDropzone = document.getElementById("commDropzone");
  const commFileInput = document.getElementById("commFileInput");
  const commPreviewContainer = document.getElementById("commPreviewContainer");
  const commPreviewImg = document.getElementById("commPreviewImg");
  const removeCommMediaBtn = document.getElementById("removeCommMediaBtn");
  const commForm = document.getElementById("communityUploadForm");

  if (openCommBtn && commModal) {
    openCommBtn.addEventListener("click", () => commModal.classList.add("active"));
    closeCommBtn.addEventListener("click", () => commModal.classList.remove("active"));
  }

  if (commDropzone && commFileInput) {
    commDropzone.addEventListener("click", () => commFileInput.click());
    commFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        tempCommMedia = event.target.result;
        commPreviewImg.src = tempCommMedia;
        commPreviewContainer.style.display = "block";
        commDropzone.style.display = "none";
      };
      reader.readAsDataURL(file);
    });
  }

  if (removeCommMediaBtn) {
    removeCommMediaBtn.addEventListener("click", () => {
      tempCommMedia = null;
      commPreviewImg.src = "";
      commPreviewContainer.style.display = "none";
      commDropzone.style.display = "block";
      commFileInput.value = "";
    });
  }

  if (commForm) {
    commForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("commAuthorName").value.trim();
      const school = document.getElementById("commSchool").value.trim();
      const cat = document.getElementById("commCategory").value;
      const title = document.getElementById("commTitle").value.trim();
      const story = document.getElementById("commStory").value.trim();
      const videoUrl = document.getElementById("commVideoUrl").value.trim();

      const catLabels = {
        drills: "Training Drills",
        certifications: "Certifications",
        vlogs: "Student Vlogs",
        tips: "First Aid Tips"
      };

      const colors = ["#06D6A0", "#3A86FF", "#E63946", "#8338EC", "#FB5607"];
      const randColor = colors[Math.floor(Math.random() * colors.length)];

      const newCommPost = {
        id: "c-" + Date.now(),
        author: author,
        school: school,
        avatarBg: randColor,
        category: cat,
        categoryLabel: catLabels[cat] || "Student Story",
        title: title,
        image: tempCommMedia || "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
        videoUrl: videoUrl,
        text: story,
        likes: 1,
        liked: false,
        date: "Just now"
      };

      communityPosts.unshift(newCommPost);
      saveStorage();
      renderCommunityPosts();

      commForm.reset();
      tempCommMedia = null;
      commPreviewContainer.style.display = "none";
      commDropzone.style.display = "block";
      commModal.classList.remove("active");

      showToast("🚀 Your story and media have been shared with the club!");
    });
  }

  // Reader Modal
  const readerModal = document.getElementById("articleReaderModal");
  const closeReaderBtn = document.getElementById("closeReaderModalBtn");
  if (closeReaderBtn && readerModal) {
    closeReaderBtn.addEventListener("click", () => {
      readerModal.classList.remove("active");
      const videoWrap = document.getElementById("readerModalVideoWrapper");
      if (videoWrap) videoWrap.innerHTML = "";
    });
  }

  // Close modals on clicking overlay backdrop
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        const videoWrap = document.getElementById("readerModalVideoWrapper");
        if (videoWrap) videoWrap.innerHTML = "";
      }
    });
  });
}

// Function to view full article / vlog modal
if (typeof window !== "undefined") {
window.editFounderPost = function(postId) {
  if (!isAdminUnlocked()) {
    showToast("🔒 Admin / Diyavasu only — unlock via the Admin page first.", true);
    return;
  }
  const post = founderPosts.find(p => p.id === postId);
  if (!post) return;
  editingFounderPostId = postId;
  document.getElementById("postType").value = post.type || "blog";
  document.getElementById("founderPostTitle").value = post.title || "";
  document.getElementById("founderPostTag").value = post.category || "";
  document.getElementById("founderPostContent").value = post.content || "";
  const urlInput = document.getElementById("founderVideoUrl");
  if ((post.videoUrl || "").startsWith("data:")) {
    tempFounderVideo = post.videoUrl;
    if (urlInput) urlInput.value = "";
    const nameEl = document.getElementById("founderVideoName");
    if (nameEl) {
      nameEl.textContent = "📹 Attached video kept — upload a new file to replace";
      nameEl.style.display = "block";
    }
  } else {
    tempFounderVideo = null;
    if (urlInput) urlInput.value = post.videoUrl || "";
  }
  if ((post.image || "").startsWith("data:")) {
    tempFounderPhoto = post.image;
  } else {
    tempFounderPhoto = null;
  }
  const previewImg = document.getElementById("founderPreviewImg");
  const previewContainer = document.getElementById("founderPreviewContainer");
  const dropzone = document.getElementById("founderDropzone");
  if (previewImg && previewContainer && dropzone) {
    previewImg.src = post.image || "";
    previewContainer.style.display = "block";
    dropzone.style.display = "none";
  }
  const form = document.getElementById("founderPostForm");
  const submitBtn = form && form.querySelector("button[type='submit']");
  if (submitBtn) submitBtn.textContent = "Save Changes";
  document.getElementById("founderPostModal").classList.add("active");
};

window.deleteFounderPost = function(postId) {
  if (!isAdminUnlocked()) {
    showToast("🔒 Admin / Diyavasu only — unlock via the Admin page first.", true);
    return;
  }
  if (!confirm("Delete this post?")) return;
  founderPosts = founderPosts.filter(p => p.id !== postId);
  saveStorage();
  renderFounderPosts();
  showToast("Post deleted.");
};

window.deleteCommunityPost = function(postId) {
  if (!isAdminUnlocked()) {
    showToast("🔒 Admin only — unlock via the Admin page first.", true);
    return;
  }
  if (!confirm("Delete this student post?")) return;
  communityPosts = communityPosts.filter(p => p.id !== postId);
  saveStorage();
  renderCommunityPosts();
  showToast("Student post deleted.");
};

window.openArticleModal = function(postId) {
  const post = founderPosts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById("articleReaderModal");
  const title = document.getElementById("readerModalTitle");
  const img = document.getElementById("readerModalImage");
  const videoWrap = document.getElementById("readerModalVideoWrapper");
  const tag = document.getElementById("readerModalTag");
  const author = document.getElementById("readerModalAuthor");
  const date = document.getElementById("readerModalDate");
  const content = document.getElementById("readerModalContent");

  title.innerText = post.title;
  tag.innerText = post.category;
  author.innerText = post.author;
  date.innerText = `${post.date} • ${post.readTime}`;

  // Video embed vs image (YouTube embeds play in iframe; uploaded MP4/data: plays in <video>)
  const playable = resolvePlayableVideo(post.videoUrl);
  if (playable && playable.kind === "youtube") {
    img.style.display = "none";
    videoWrap.style.display = "block";
    videoWrap.innerHTML = `
      <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px;">
        <iframe src="${escapeHtml(playable.src)}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
      </div>
    `;
  } else if (playable && playable.kind === "file") {
    img.style.display = "none";
    videoWrap.style.display = "block";
    videoWrap.innerHTML = `
      <video src="${playable.src}" controls playsinline preload="metadata" style="width:100%; max-height:380px; border-radius:12px; background:#000;"></video>
    `;
  } else {
    videoWrap.style.display = "none";
    videoWrap.innerHTML = "";
    img.style.display = "block";
    img.src = post.image;
  }

  // Format paragraphs
  const paragraphs = post.content.split("\n\n").map(p => `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`).join("");
  content.innerHTML = paragraphs;

  modal.classList.add("active");
};
}

// ==========================================================================
// Join The Club Form & Digital Pass Generator
// ==========================================================================
function setupJoinForm() {
  const form = document.getElementById("joinClubForm");
  const printBtn = document.getElementById("printPassBtn");
  const resetBtn = document.getElementById("resetDemoDataBtn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("studentName").value.trim();
      const school = document.getElementById("highSchoolName").value.trim();
      const grade = document.getElementById("gradeLevel").value;
      const email = document.getElementById("studentEmail").value.trim();
      const experience = document.getElementById("priorExperience").value.trim();

      const selectedInterests = Array.from(document.querySelectorAll("input[name='interest']:checked"))
        .map(el => el.value);

      const memberId = "HS-FA-2026-" + Math.floor(1000 + Math.random() * 9000);

      registeredMember = {
        name: name,
        school: school,
        grade: grade,
        email: email,
        interests: selectedInterests.length > 0 ? selectedInterests.join(", ") : "First Aid General",
        experience: experience,
        memberId: memberId,
        dateJoined: new Date().toLocaleDateString()
      };

      saveStorage();
      updateMemberPassCard(registeredMember);

      showToast(`🎉 Welcome to the Club, ${name}! Your Pass is ready!`);

      // Scroll to pass preview
      const pass = document.getElementById("memberPassCard");
      if (pass) {
        pass.scrollIntoView({ behavior: "smooth", block: "center" });
        pass.style.transition = "transform 0.4s ease";
        pass.style.transform = "scale(1.03)";
        setTimeout(() => { pass.style.transform = "scale(1)"; }, 500);
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all posts and member pass to the original club template?")) {
        localStorage.removeItem("pulse_founder_posts");
        localStorage.removeItem("pulse_community_posts");
        localStorage.removeItem("pulse_member_pass");
        localStorage.removeItem(PROJECTS_KEY);
        localStorage.removeItem(TEAM_KEY);
        founderPosts = [...DEFAULT_FOUNDER_POSTS];
        communityPosts = [...DEFAULT_COMMUNITY_POSTS];
        prospectiveProjects = [...DEFAULT_PROJECTS];
        teamMembers = [...DEFAULT_TEAM];
        registeredMember = null;
        renderFounderPosts();
        renderProjects();
        renderTeam();
        renderCommunityPosts();

        // Reset Pass UI
        document.getElementById("passName").innerText = "Diyavasu Gubbi Ravi Sandesh";
        document.getElementById("passSchool").innerText = "High School Chapter • Founder";
        document.getElementById("passId").innerText = "HS-FA-2026-001";
        document.getElementById("passGrade").innerText = "Club Leadership";
        document.getElementById("passInterests").innerText = "CPR / AED / Education";

        showToast("Demo data successfully reset!");
      }
    });
  }
}

function updateMemberPassCard(member) {
  if (!member) return;

  const passName = document.getElementById("passName");
  const passSchool = document.getElementById("passSchool");
  const passId = document.getElementById("passId");
  const passGrade = document.getElementById("passGrade");
  const passInterests = document.getElementById("passInterests");

  if (passName) passName.innerText = member.name;
  if (passSchool) passSchool.innerText = `${member.school} • Member`;
  if (passId) passId.innerText = member.memberId;
  if (passGrade) passGrade.innerText = member.grade;
  if (passInterests) passInterests.innerText = member.interests;
}

// ==========================================================================
// Toast Notification Utility
// ==========================================================================
function showToast(message, isError = false) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${isError ? 'toast-error' : ''}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Helper to escape HTML characters
function escapeHtml(str) {  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
