import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export async function getAppMetadata(locale: string): Promise<Metadata> {
  const t = await getScopedI18n("global");

  const title = t("portfolio.title");
  const description = t("portfolio.description");

  return {
    title: {
      default: title,
      template: `%s - ${title}`,
    },
    description,
    metadataBase: new URL("https://mehedi-portfolio.com"),
    alternates: {
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
  };
}