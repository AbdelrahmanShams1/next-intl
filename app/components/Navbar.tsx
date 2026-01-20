import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./navbar.module.css";
import SwitcherLocale from "./SwitcherLocale";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/about">{t("about")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("contact")}</Link>
          </li>
        </ul>

        <div>
          <SwitcherLocale />
        </div>
        <div className="text-red-700">hiii</div>
      </nav>
    </header>
  );
}
