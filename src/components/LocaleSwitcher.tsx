import { useLocale, useTranslations } from "next-intl";
import { Button } from "@mantine/core";
import { useRouter } from "@/navigation";
import { usePathname } from "@/navigation";
import { useParams } from "next/navigation";

export default function LocaleSwitcher() {
    const t = useTranslations("LocaleSwitcher");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    function onClick() {
        const nextLocale = locale === 'fr' ? 'en' : 'fr';
        router.replace(
            //@ts-expect-error I don't know
            { pathname, params },
            { locale: nextLocale }
        );
    }

    return (
        <div className="flex justify-end w-full">
            <Button onClick={onClick} className={"relative text-white border-2 rounded-2xl border-blue-400 bg-blue-400"}>
                {t("label")}
            </Button>
        </div>
    );
}