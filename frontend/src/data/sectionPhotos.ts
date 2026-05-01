// ─────────────────────────────────────────────────────────────────────────────
// OWNER: Add your photos to frontend/public/photos/ using these exact filenames.
// The hero photo (bharat_soni.jpg) is already in frontend/public/.
// All other photos go in frontend/public/photos/
// ─────────────────────────────────────────────────────────────────────────────

const base = import.meta.env.BASE_URL

export const sectionPhotos: Record<string, string> = {
  hero:         `${base}bharat_soni.jpg`,         // already in place
  bio:          `${base}photos/about.jpg`,         // personal / candid photo
  academic:     `${base}photos/education.jpg`,     // campus, graduation, or studying
  experience:   `${base}photos/experience.jpg`,    // professional setting — KPMG era
  competitions: `${base}photos/competitions.jpg`,  // event, presentation, or team photo
  leadership:   `${base}photos/leadership.jpg`,    // speaking or group event
  projects:     `${base}photos/projects.jpg`,      // working at desk or tech-focused
  contact:      `${base}photos/contact.jpg`,       // your choice — outdoor works well
  hobbies:      `${base}photos/hobbies.jpg`,       // miata, dog, gym, badminton — your pick
}
