import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedIcon from "@mui/icons-material/RssFeed";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AVATAR_IMAGE_PLACEHOLDER, AVATAR_IMAGE_SIZE } from "@/constants";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Medeiros - Software Engineer",
  description:
    "A highly experienced programmer with experience in TS, JS, React, and Python and loves to face new challenges.",
  openGraph: {
    title: "Anderson Medeiros - Software Engineer",
    type: "profile",
    firstName: "Anderson",
    lastName: "Medeiros",
    gender: "male",
    url: "https://andersonmedeiros.net",
    images: [
      {
        url: "https://andersonmedeiros.net/avatar_700x700.jpg",
        secureUrl: "https://andersonmedeiros.net/avatar_700x700.jpg",
        type: "image/jpeg",
        width: 700,
        height: 700,
        alt: "Anderson Medeiros picture",
      },
      {
        url: "https://andersonmedeiros.net/avatar_200x200.jpg",
        secureUrl: "https://andersonmedeiros.net/avatar_200x200.jpg",
        type: "image/jpeg",
        width: 200,
        height: 200,
        alt: "Anderson Medeiros picture",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <section>
            <figure className="flex flex-col items-center mb-0">
              <Image
                src="/avatar_700x700.jpg"
                alt="Picture of Anderson Medeiros"
                width={AVATAR_IMAGE_SIZE}
                height={AVATAR_IMAGE_SIZE}
                blurDataURL={AVATAR_IMAGE_PLACEHOLDER}
                placeholder="blur"
                className="rounded-full"
              />
              <figcaption className="contents">
                <h3 className="mb-0">Anderson Medeiros</h3>
                <p className="font-normal text-sm mb-0">Software Engineer</p>
                <nav>
                  <ul className="list-none flex p-0 gap-2">
                    <li>
                      <a
                        href="https://linkedin.com/in/andersonsmedeiros"
                        target="_blank"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                        className="text-sky-950 visited:text-sky-950"
                      >
                        <LinkedInIcon aria-hidden fontSize="large" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/AndersonSMed"
                        target="_blank"
                        aria-label="Github"
                        title="Github"
                        className="text-sky-950 visited:text-sky-950"
                      >
                        <GitHubIcon aria-hidden fontSize="large" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.andersonmedeiros.net"
                        target="_blank"
                        aria-label="Personal Blog"
                        title="Personal Blog"
                        className="text-sky-950 visited:text-sky-950"
                      >
                        <RssFeedIcon aria-hidden fontSize="large" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </figcaption>
            </figure>
          </section>
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
