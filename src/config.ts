export const SITE = {
  website: "https://fmonper.com/", // replace this with your deployed domain
  author: "Fernando Montero",
  profile: "https://fmonper.com/",
  desc: "Im a software engineer that is passionate about technology and innovation.",
  title: "fmonper.com",
  ogImage: undefined,
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Madrid", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
