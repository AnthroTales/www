"use client";
import React from "react";
import Snowfall from "react-snowfall";
import {
  IconCalendarMonth,
  IconMapPin,
  IconTicket,
  IconNews,
  IconBrandTelegram,
  IconBrandX,
  IconBrandInstagram,
  IconMail,
  IconBrandBluesky,
} from "@tabler/icons-react";
import { Footer } from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("HomePage");
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center">
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
        <div className="flex flex-col justify-center items-center text-white gap-y-3 pt-16">
          <Image
            src="/images/TextLogo.png"
            alt="AnthroTales"
            height={500}
            width={500}
            className={"px-4"}
          />
          <b><h2 className="w-full lg:text-4xl text-3xl text-center">
            {t("editionName")}
          </h2></b>
          <p className="lg:text-2xl lg:pb-2 pb-3 text-lg text-center lg:w-4/6 p-2 md:w-2/3">
            {t.rich("homeText", {
              italic: (children) => (
                <i className={"text-blue-300"}>{children}</i>
              ),
            })}
          </p>
          <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-3">
            {/* Card 1 */}
            <div className="border-4 border-white border-dashed rounded-lg p-6 px-24 flex flex-col items-center text-center bg">
              <div className="text-white mb-4">
                <IconMapPin className="h-12 w-12" />
              </div>
              <p
                className="text-white text-xl font-bold"
                dangerouslySetInnerHTML={{
                  __html: t("localization", { br: "<br />" }),
                }}
              />
            </div>
            <div className="border-4 border-white border-dashed rounded-lg p-6 flex flex-col items-center text-center bg">
              <div className="text-white mb-4">
                <IconCalendarMonth className="h-12 w-12" />
              </div>
              <p
                className="text-white text-xl font-bold"
                dangerouslySetInnerHTML={{
                  __html: t("conventionDate", { br: "<br />" }),
                }}
              />
            </div>
            <div className="border-4 border-white border-dashed rounded-lg p-6 flex flex-col items-center text-center bg">
              <div className="text-white mb-4">
                <IconTicket className="h-12 w-12" />
              </div>
              <p
                className="text-white text-xl font-bold"
                dangerouslySetInnerHTML={{
                  __html: t("registrationDate", { br: "<br />" }),
                }}
              />
            </div>
          </div>
          <div className="rounded-lg p-2 items-center text-center bg mb-3">
            <div className={"flex"}>
            <a
              className="flex items-center space-x-2 p-2 bg-transparent text-white rounded"
              title="Telegram News"
              href="https://go.anthrotales.eu/news"
              target="_blank"
            >
              <IconNews className="h-10 w-10" />
            </a>
            <a
              className="flex items-center space-x-2 p-2 bg-transparent text-white rounded"
              title="Telegram"
              href="https://go.anthrotales.eu/telegram"
              target="_blank"
            >
              <IconBrandTelegram className="h-10 w-10" />
            </a>
            <a
              className="flex items-center space-x-2 p-2 bg-transparent text-white rounded"
              title="X"
              href="https://go.anthrotales.eu/x"
              target="_blank"
            >
              <IconBrandX className="h-10 w-10" />
            </a>
            <a
              className="flex items-center space-x-2 p-2 bg-transparent text-white rounded"
              title="Bluesky"
              href="https://go.anthrotales.eu/bluesky"
              target="_blank"
            >
              <IconBrandBluesky className="h-10 w-10" />
            </a>
            <a
              className="flex items-center space-x-2 p-2 bg-transparent text-white rounded"
              title="Instagram"
              href="https://go.anthrotales.eu/instagram"
              target="_blank"
            >
              <IconBrandInstagram className="h-10 w-10" />
            </a>
            <a
              className="flex items-center space-x-2 p-2 bg-transparent text-white rounded"
              title="E-mail"
              href="mailto:contact@anthrotales.eu"
              target="_blank"
            >
              <IconMail className="h-10 w-10" />
            </a>
            </div>
            <b>#ATT1</b>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
