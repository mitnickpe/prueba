import Link from "next/link";
import { Box } from "@/components/Box";
import { Toggle, ToggleItem } from "@/components/Toggle";
import { Heading } from "@/components/Typography";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { localesMap } from "@/lib/utils";

export const Index = () => {
  const { t, locale, locales } = useTranslation();

  return (
    <Box p={["var(--sz4)"]}>
      <Heading as="h3">{t.settings.title}</Heading>
      <Heading as="h4" muted>
        {t.settings.language}
      </Heading>

      <ul>
        {locales.map((lang) => (
          <li key={lang}>
            <Link href="/settings" locale={lang}>
              <ToggleItem>
                <a>{localesMap[lang]}</a>
                <Toggle active={locale == lang} />
              </ToggleItem>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Index;
