import { getScopedI18n } from '@/locales/server'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
 
export type SiteConfig = typeof siteConfig;

export async function siteConfig() {
  const tGlobal = await getScopedI18n('global');
  const tNavbar = await getScopedI18n('navbar');


  return {
    navItems: [
      {
        label: tNavbar("home"),
        href: "/",
      },
      {
        label: tNavbar("about.me"),
        href: "/docs",
      },
      {
        label: tNavbar("skills"),
        href: "/skills",
      },
      {
        label: tNavbar("projects"),
        href: "/projects",
      },
      {
        label: tNavbar("experience"),
        href: "/experience",
      },
      {
        label: tNavbar("contact.me"),
        href: "/contact",
      },
    ],
    navMenuItems: [
      {
        label: "Profile",
        href: "/profile",
      },
      {
        label: "Dashboard",
        href: "/dashboard",
      },
      {
        label: "Projects",
        href: "/projects",
      },
      {
        label: "Team",
        href: "/team",
      },
      {
        label: "Calendar",
        href: "/calendar",
      },
      {
        label: "Settings",
        href: "/settings",
      },
      {
        label: "Help & Feedback",
        href: "/help-feedback",
      },
      {
        label: "Logout",
        href: "/logout",
      },
    ],
    links: {
      github: "https://github.com/mehedit",
      twitter: "https://twitter.com/mehedit",
      discord: "https://discord.gg/9b6yyZKmH4",
      sponsor: "https://patreon.com/jrgarciadev",
    },
  };
}