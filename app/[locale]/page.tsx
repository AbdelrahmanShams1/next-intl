import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import styles from "./home.module.css";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("home");

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{t("header")}</h1>
      <p className={styles.subtitle}>
        {t.rich("sub", {
          bold: (children) => (
            <strong className="text-red-800">{children}</strong>
          ),
        })}
      </p>
    </main>
  );
}
