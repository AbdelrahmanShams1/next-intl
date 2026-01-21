"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const SwitcherLocale = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    router.push(pathname, { locale: newLocale });
    router.refresh();
  };

  return (
    <select value={locale} onChange={(e) => handleChange(e.target.value)}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="ar">Arabic</option>
    </select>
  );
};

export default SwitcherLocale;
