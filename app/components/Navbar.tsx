import Link from "next/link";
import { useTranslations } from "next-intl";
import SwitcherLocale from "./SwitcherLocale";
import ThemsButton from "./ThemsButton";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <SwitcherLocale />
          <ThemsButton />
        </div>
      </nav>
    </header>
  );
}
