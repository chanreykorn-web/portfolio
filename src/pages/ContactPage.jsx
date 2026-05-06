import React from "react";
import BannerTamplate from "../components/BannerTamplate";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

export default function ContactPage() {
  const url = `https://chanreykorn.com/contact`;
  return (
    <>
      <Helmet>
        {/* BASIC SEO */}
        <title>Contact Us | Chanrey Korn</title>
        <meta
          name="description"
          content="Get in touch with Chanrey Korn for all your web development and IT solutions needs."
        />

        {/* 🔥 OPEN GRAPH (Facebook, LinkedIn, Google) */}
        <meta property="og:title" content="Contact Us | Chanrey Korn" />
        <meta
          property="og:description"
          content="Get in touch with Chanrey Korn for all your web development and IT solutions needs."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        {/* 🔥 EXTRA (Better preview control) */}
        <meta property="og:site_name" content="CHANREY KORN" />

        {/* 🔥 TWITTER SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Chanrey Korn" />
        <meta
          name="twitter:description"
          content="Get in touch with Chanrey Korn for all your web development and IT solutions needs."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        />

        {/* 🔥 CANONICAL URL (Very important for Google) */}
        <link rel="canonical" href={url} />
      </Helmet>
      <BannerTamplate
        title={"Contact Us"}
        description={
          "contact us for all your web development and IT solutions needs."
        }
        urlImage={
          "../../public/image/about-us-word-with-wooden-cubes-photo.webp"
        }
      />
      <SectionContact />
      <Footer />
    </>
  );
}

export function SectionContact() {
  return (
    <>
      <div className="w-full h-auto px-[6%] pb-[2%] sm:px-[15%] md:px-[10%] lg:px-[15%] z-50">
        <form action="#" method="post">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
            <div className="pt-5">
              <label htmlFor="">Input Full Name</label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
