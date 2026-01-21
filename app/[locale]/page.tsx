import { useTranslations } from "next-intl";
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
    <main className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        {t("header")}
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
        {t.rich("sub", {
          bold: (children) => (
            <strong className="text-red-600 dark:text-red-400">
              {children}
            </strong>
          ),
        })}
      </p>
    </main>
  );
}
