import AboutPage from "./about/about";
import Home from "./home/home";

export default async function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-13 py-8 md:py-10">
      <Home id="home" className="w-full" />
      <AboutPage id="about" className="w-full" />
    </section>
  );
}
