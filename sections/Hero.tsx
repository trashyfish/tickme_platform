import { Button } from '@/components/ui/button';
import { heroText } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10"
    >
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold ">{heroText.headText}</h1>
          <p className=" p-regular-20 md:p-regular-24  ">
            {heroText.subHeadText}
          </p>
          <Button
            className="button w-full sm:w-fit bg-primary2-500"
            size="lg"
            asChild
          >
            <Link href="#events">Explore Now</Link>
          </Button>
        </div>

        <Image
          src="/assets/images/hero.jpg"
          alt="hero-img"
          width={1000}
          height={666}
          className=" max-h-[70vh] objec-contain object-center 2xl:max-h[50vh] rounded-full shadow-sm shadow-black"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
