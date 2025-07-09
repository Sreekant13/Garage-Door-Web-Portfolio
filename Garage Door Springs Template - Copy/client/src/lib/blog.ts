// src/lib/blog.ts
import imgWeather from "@/assets/images/article1.png";
import imgStyle   from "@/assets/images/article2.png";
import imgOpener  from "@/assets/images/article3.png";

export type BlogTag = "Maintenance" | "Design" | "Openers";

export type BlogPost = {
  title: string;
  href: string;       // e.g. "/blog/weather-effects"
  excerpt: string;
  date: string;
  read: string;       // "7 min"
  tag: BlogTag;
  img: string;        // URL produced by Vite via the imports above
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How Weather Affects Your Garage Door",
    href: "/blog/weather-effects",
    excerpt: "Tips to keep your door smooth year-round.",
    date: "Jan 2025",
    read: "7 min",
    tag: "Maintenance",
    img: imgWeather,
  },
  {
    title: "Modern vs. Rustic: Picking a Style",
    href: "/blog/modern-vs-rustic",
    excerpt: "Choose what fits your home and budget.",
    date: "Jan 2025",
    read: "6 min",
    tag: "Design",
    img: imgStyle,
  },
  {
    title: "Top Opener Features in 2025",
    href: "/blog/top-opener-features",
    excerpt: "Battery backup, Wi-Fi, and quiet drive systems.",
    date: "Jan 2025",
    read: "5 min",
    tag: "Openers",
    img: imgOpener,
  },
];
