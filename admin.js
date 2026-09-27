/* Admin panel for updating Diyavasu (founder) details.
   Storage key shared with client.js: pulse_founder_profile
   Change the password below to your own. */

const ADMIN_PASSWORD = "diyavasu123";
const PROFILE_KEY = "pulse_founder_profile";

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
