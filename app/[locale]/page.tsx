import AboutPage from "./about/about";
import Home from "./home/home";

export default async function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Home id="home" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" />
      <AboutPage id="about" className="flex flex-col w-full items-center justify-center gap-4 py-8 md:py-10" />
    </section>
  );
}
