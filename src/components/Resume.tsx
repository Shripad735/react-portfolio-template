import { profile } from "../data/profile";

/** Kept for backwards compatibility: the résumé URL lives with the rest of the profile data. */
export const resumeConfig = {
  label: "Résumé",
  url: profile.resumeUrl,
  isExternal: true,
};
