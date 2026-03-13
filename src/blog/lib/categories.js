export const BLOG_CATEGORIES = [
  {
    slug: "practical-it-tips",
    label: "Practical IT Tips",
    description:
      "Actionable guidance for IT operations, cybersecurity hygiene, and day-to-day infrastructure decisions.",
  },
  {
    slug: "cloud-success-stories",
    label: "Cloud Success Stories",
    description:
      "Real projects, measurable outcomes, and lessons learned from cloud transformations.",
  },
  {
    slug: "future-of-it",
    label: "Future of IT",
    description:
      "Forward-looking analysis on trends shaping cloud, security, automation, and managed services.",
  },
];

export function getCategoryBySlug(slug) {
  return BLOG_CATEGORIES.find((category) => category.slug === slug) || null;
}
