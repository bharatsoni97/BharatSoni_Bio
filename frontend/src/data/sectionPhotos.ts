// ─────────────────────────────────────────────────────────────────────────────
// OWNER: Add your photos to frontend/public/photos/ using these exact filenames.
// The hero photo (bharat_soni.jpg) is already in frontend/public/.
// All other photos go in frontend/public/photos/
// ─────────────────────────────────────────────────────────────────────────────

export const sectionPhotos: Record<string, string> = {
  hero:         '/bharat_soni.jpg',         // already in place
  bio:          '/photos/about.jpg',         // personal / candid photo
  academic:     '/photos/education.jpg',     // campus, graduation, or studying
  experience:   '/photos/experience.jpg',    // professional setting — KPMG era
  competitions: '/photos/competitions.jpg',  // event, presentation, or team photo
  leadership:   '/photos/leadership.jpg',    // speaking or group event
  projects:     '/photos/projects.jpg',      // working at desk or tech-focused
  contact:      '/photos/contact.jpg',       // your choice — outdoor works well
}
