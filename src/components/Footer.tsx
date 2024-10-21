import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("HomePage");

  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="px-4 flex justify-between items-center">
        <a href="https://x.com/Slashset" target="_blank">
          {t("backgroundBy")} @Slashset
        </a>
        <div className="lg:text-right text-center">
          <a href="https://go.anthrotales.eu/bce" target="_blank">
            &copy; {new Date().getFullYear()} AnthroTales Events.{" "}
            {t("rightsReserved")}.
          </a>
        </div>
      </div>
    </footer>
  );
};
