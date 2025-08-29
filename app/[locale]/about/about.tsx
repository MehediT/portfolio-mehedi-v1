import { title } from "@/components/primitives";

type AboutPageProps = {
  id?: string;
  className?: string;
};

export default async function AboutPage(
  { id, className }: AboutPageProps
) {
  return (
    <div className={className}>
      <h1 className={title()}>About</h1>
    </div>
  );
}