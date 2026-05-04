import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="Home"
      className="min-h-dvh mt-14 flex flex-col-reverse lg:flex-row items-center justify-between gap-2.5 lg:gap-5"
    >
      <div className="flex-1">
        <div className="w-full lg:w-11/12 flex flex-col items-start justify-center gap-5 lg:gap-9">
          <h1 className="hidden lg:block">Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC,
            social media marketing, and content creation.
          </p>

          <Button variant="secondary" size="sm" className="w-full sm:w-fit">
            Book a consultation
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center justify-center gap-5">
        <h1 className="block lg:hidden">Navigating the digital landscape for success</h1>
        <Image src="/Hero_Illustration.svg" alt="Home Illustration" width={600} height={515} priority className="w-full h-auto" />
      </div>
    </section>
  );
}
