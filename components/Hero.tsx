import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  const Logotypes: { src: string; alt: string }[] = [
    { src: "/Hero/Amazon_logo.svg", alt: "Amazon Company logo" },
    { src: "/Hero/Dribbble_logo.svg", alt: "Dribbble Company logo" },
    { src: "/Hero/Hubspot_logo.svg", alt: "Hubspot Company logo" },
    { src: "/Hero/Notion_logo.svg", alt: "Notion Company logo" },
    { src: "/Hero/Netflix_logo.svg", alt: "Netflix Company logo" },
    { src: "/Hero/Zoom_logo.svg", alt: "Zoom Company logo" },
  ];

  return (
    <section id="Home" className="py-15 flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-17.5">
      {/* Hero Contant */}
      <div className="min-h-dvh flex flex-col-reverse lg:flex-row items-center justify-between gap-2.5 lg:gap-5">
        <div className="flex-1">
          <div className="w-full lg:w-11/12 flex flex-col items-start justify-center gap-5 lg:gap-9">
            <h1 className="hidden lg:block">Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,
              PPC, social media marketing, and content creation.
            </p>

            <Button variant="secondary" size="sm" className="w-full sm:w-fit">
              Book a consultation
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col items-center justify-center gap-5">
          <h1 className="block lg:hidden">Navigating the digital landscape for success</h1>
          <Image
            src="/Hero/Hero_Illustration.svg"
            alt="Home Illustration"
            width={600}
            height={515}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Logotypes */}
      <div className="flex items-center justify-center md:justify-between gap-5 flex-wrap">
        {Logotypes.map(({ src, alt }, id) => (
          <Image
            key={id}
            src={src}
            alt={alt}
            width={150}
            height={48}
            className="w-auto h-12 grayscale-100 duration-300 hover:grayscale-50 hover:scale-110"
          />
        ))}
      </div>
    </section>
  );
}
