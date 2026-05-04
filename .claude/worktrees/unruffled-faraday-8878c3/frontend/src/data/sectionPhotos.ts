// ─────────────────────────────────────────────────────────────────────────────
// OWNER: Drop photos into frontend/public/ using these exact filenames.
// ─────────────────────────────────────────────────────────────────────────────

const base = import.meta.env.BASE_URL

export const sectionPhotos: Record<string, string> = {
  hero:         `${base}bharat_soni.jpg`,
  bio:          `${base}bio.jpg`,
  academic:     `${base}education.jpg`,
  experience:   `${base}experience.jpg`,
  competitions: `${base}competitions.jpg`,
  leadership:   `${base}leadership.jpg`,
  projects:     `${base}projects.jpg`,
  contact:      `${base}contact.jpg`,
  hobbies:      `${base}hobbies.jpg`,
  // Page backgrounds — drop these files into frontend/public/
  work:         `${base}work.jpg`,
  writing:      `${base}writing.jpg`,
}
