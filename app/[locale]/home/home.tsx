import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { getScopedI18n } from "@/locales/server";

type HomeProps = {
  id: string;
  className?: string;
};

export default async function Home(
  { id, className }: HomeProps
) {
  const config = await siteConfig();
  const t = await getScopedI18n('home')
    return (
      <section
        id={id}
        className={`${className} flex flex-col items-center justify-center gap-4`}
      >
        <div className="space-y-2 w-2/3">
          <p
            className="
          text-center tracking-tight font-extralight
          text-sm md:text-xl lg:text-xl xl:text-3xl"
          >
            {t("hi.im")}
          </p>
          <p
            className="
            text-center tracking-tight font-bold
            bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent
            text-4xl md:text-5xl lg:text-5xl xl:text-5xl
            "
          >
            {t("name")}
          </p>
          <p
            className="
          text-center tracking-tight font-light
          text-md md:text-2xl lg:text-xl xl:text-3xl
          "
          >
            {t("description")}
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={config.links.cv}
          >
            {t("get.my.cv")}
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={config.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    );
}