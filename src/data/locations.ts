export interface Location {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

// [[LOCATIONS]] — Replace with the cities/towns the business serves.
// Each entry gets its own SEO page at /[slug].
// Tip: 5–10 locations works well. Include the home base first.
export const locations: Location[] = [
  {
    slug: "[[CITY_1_SLUG]]", // e.g. "orlando-fl-auto-detailing"
    name: "[[CITY_1_NAME]]", // e.g. "Orlando"
    metaTitle: "Auto Detailing in [[CITY_1_NAME]], [[STATE]] | [[BUSINESS_NAME]]",
    metaDescription: "Professional auto detailing in [[CITY_1_NAME]], [[STATE]]. Interior & exterior detailing, paint correction, and more. [[BUSINESS_NAME]] — call today!",
    description: "[[CITY_1_DESCRIPTION]]",
    // e.g. "As our home base, [City] receives our fastest service times. Whether you're in [neighborhood] or [area], we bring showroom-quality results to your door."
  },
  {
    slug: "[[CITY_2_SLUG]]",
    name: "[[CITY_2_NAME]]",
    metaTitle: "Auto Detailing in [[CITY_2_NAME]], [[STATE]] | [[BUSINESS_NAME]]",
    metaDescription: "Professional car detailing in [[CITY_2_NAME]], [[STATE]]. Interior & exterior detailing, waxing, paint correction. [[BUSINESS_NAME]].",
    description: "[[CITY_2_DESCRIPTION]]",
  },
  {
    slug: "[[CITY_3_SLUG]]",
    name: "[[CITY_3_NAME]]",
    metaTitle: "Auto Detailing in [[CITY_3_NAME]], [[STATE]] | [[BUSINESS_NAME]]",
    metaDescription: "Top-rated auto detailing in [[CITY_3_NAME]], [[STATE]]. Interior cleaning, exterior wash & wax, paint protection. [[BUSINESS_NAME]].",
    description: "[[CITY_3_DESCRIPTION]]",
  },
  {
    slug: "[[CITY_4_SLUG]]",
    name: "[[CITY_4_NAME]]",
    metaTitle: "Auto Detailing in [[CITY_4_NAME]], [[STATE]] | [[BUSINESS_NAME]]",
    metaDescription: "Car detailing in [[CITY_4_NAME]], [[STATE]]. Professional interior & exterior detailing, engine cleaning, and more. [[BUSINESS_NAME]].",
    description: "[[CITY_4_DESCRIPTION]]",
  },
  {
    slug: "[[CITY_5_SLUG]]",
    name: "[[CITY_5_NAME]]",
    metaTitle: "Auto Detailing in [[CITY_5_NAME]], [[STATE]] | [[BUSINESS_NAME]]",
    metaDescription: "Premium auto detailing in [[CITY_5_NAME]], [[STATE]]. Full interior & exterior services, paint correction. [[BUSINESS_NAME]].",
    description: "[[CITY_5_DESCRIPTION]]",
  },
];
