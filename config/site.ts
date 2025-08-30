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
    ],
    contact : {
      label: tNavbar("contact"),
      href: "/contact",
    },
    links: {
      github: "https://github.com/mehedit",
      twitter: "https://twitter.com/MehediToure",
      twitterUser: "@MehediToure",
      discord: "https://discord.gg/9b6yyZKmH4",
      cv: "/cv",
      sponsor: "https://patreon.com/jrgarciadev",
    },
  };
}