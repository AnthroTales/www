import "@mantine/core/styles.css";
import React from "react";
import "../../styles/globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import theme from "@/theme";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();
  return (
      <html lang={locale}>
      <head>
          <ColorSchemeScript/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>AnthroTales 1 | La Symphonie du Solstice</title>
          <meta name="title" content="AnthroTales 1 | La Symphonie du Solstice"/>
          <meta
              name="description"
              content="Une nouvelle convention furry qui se déroulera du 30 avril au 3 mai 2026 à Mons, en Belgique."
          />
          <meta
              name="author"
              content="AnthroTales 1 | La Symphonie du Solstice"
          />
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://anthrotales.eu/"/>
          <meta
              property="og:title"
              content="AnthroTales 1 | La Symphonie du Solstice"
          />
          <meta
              property="og:description"
              content="Une nouvelle convention furry qui se déroulera du 30 avril au 3 mai 2026 à Mons, en Belgique."
          />
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://anthrotales.eu/"/>
          <meta
              property="twitter:title"
              content="AnthroTales 1 | La Symphonie du Solstice"
          />
          <meta
              property="twitter:description"
              content="Une nouvelle convention furry qui se déroulera du 30 avril au 3 mai 2026 à Mons, en Belgique."
          />
          <link rel="icon" href="favicon.ico"/>
      </head>
      <body className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 w-full h-full -z-10">
          <Image
              src="/images/homeBackground.jpeg"
              alt="Background"
              quality={100}
              priority
              width={1920}
              height={1080}
              style={{objectFit: "cover"}}
              className="w-full h-full"
          />
      </div>
      <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme}>{children}</MantineProvider>
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
