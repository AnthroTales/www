import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("HomePage");

  return (
    <footer className="bg-gray-800 text-white py-2 relative z-20">
      <div className="px-4 flex justify-between items-center">
        <p>{t("siteConstruction")}</p>
        <div className="lg:text-right text-center">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://go.anthrotales.eu/bce" target="_blank">AnthroTales Events.{" "}</a>
          {t("rightsReserved")}.{" "}
          {t("backgroundBy")}{" "}
          <a href="https://x.com/Slashset" target="_blank">@Slashset</a>.
        </div>
      </div>
    </footer>
  );
};
