import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { getI18n, getScopedI18n } from "@/locales/server";
import { siteConfig } from "@/config/site";

type AboutPageProps = {
  id?: string;
  className?: string;
};

export default async function AboutPage(
  { id, className }: AboutPageProps
) {
  const config = await siteConfig();
  const fullName = (await getI18n())("global.fullname");
  const t = await getScopedI18n('about');
  return (
    <div className={`${className} flex flex-col items-center justify-center gap-6 px-6`}>
      <div className="w-full md:w-5/6 lg:w-11/12 xl:w-5/6 gap-6 flex flex-col lg:flex-row p-1">
        <Card className="flex-1 flex flex-col h-auto">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-sm">{fullName}</p>
              <Link
                isExternal
                href={config.links.twitter}
                className="text-xs text-default-500"
              >
                {config.links.twitterUser}
              </Link>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-y-4">
            <p className="text-sm">{t("description")}</p>
            <p className="text-sm">{t("motivation")}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/heroui-inc/heroui"
              className="text-sm"
            >
              {t("see.latest")}
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex-1 flex flex-col h-auto px-3 py-0.5 ">
          <CardHeader>
            <h4 className="font-bold text-large">{t("what.i.do")}</h4>
          </CardHeader>
          <CardBody>
            <ul className="list-disc list-outside ml-1 marker:text-blue-600 flex flex-col gap-1">
              <li className="text-sm">{t("what.i.do.items.0")}</li>
              <li className="text-sm">{t("what.i.do.items.1")}</li>
              <li className="text-sm hidden md:list-item">
                {t("what.i.do.items.2")}
              </li>
              <li className="text-sm hidden md:list-item">
                {t("what.i.do.items.3")}
              </li>
              <li className="text-sm">{t("what.i.do.items.4")}</li>
              <li className="text-sm">{t("what.i.do.items.5")}</li>
              <li className="text-sm hidden md:list-item">
                {t("what.i.do.items.6")}
              </li>
              <li className="text-sm hidden md:list-item">
                {t("what.i.do.items.7")}
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}