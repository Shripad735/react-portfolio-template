export type NavItem = { label: string; to: string };

/** Primary navigation, in order. Single source for the header and tests. */
export const navItems: NavItem[] = [
  { label: "Expertise", to: "/expertise" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Writing", to: "/articles" },
  { label: "Reading", to: "/reading" },
  { label: "Contact", to: "/contact" },
];

/** Paths that resolve without being linked in the header. */
export const redirects: Record<string, string> = {
  "/about": "/",
  "/work": "/projects",
  "/writing": "/articles",
  "/certifications": "/experience",
};

export const routes = ["/", ...navItems.map((item) => item.to)];
