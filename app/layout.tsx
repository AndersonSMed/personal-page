import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { AVATAR_IMAGE_SIZE } from "@/constants";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Medeiros",
  description: "Anderson Medeiros personal page",
};

export default function RootLayout({
  links,
}: Readonly<{
  links: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <section>
            <figure className="flex flex-col items-center mb-0">
              <Image
                src="/avatar.png"
                alt="Anderson Medeiros"
                width={AVATAR_IMAGE_SIZE}
                height={AVATAR_IMAGE_SIZE}
                className="rounded-full"
              />
              <figcaption className="contents">
                <h3 className="mb-0">Anderson Medeiros</h3>
                <p className="font-normal text-sm mb-0">Software Engineer</p>
                <nav>
                  <ul className="list-none flex p-0 gap-2">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="text-sky-950 visited:text-sky-950"
                    >
                      <LinkedInIcon aria-hidden />
                    </a>
                    <a
                      href="#"
                      aria-label="Github"
                      className="text-sky-950 visited:text-sky-950"
                    >
                      <GitHubIcon aria-hidden />
                    </a>
                    <a
                      href="#"
                      aria-label="Personal Blog"
                      className="text-sky-950 visited:text-sky-950"
                    >
                      <RssFeedIcon aria-hidden />
                    </a>
                  </ul>
                </nav>
              </figcaption>
            </figure>
          </section>
          {links}
        </main>
      </body>
    </html>
  );
}
