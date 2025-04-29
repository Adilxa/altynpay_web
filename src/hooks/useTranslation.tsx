import { dictionary } from "@/ui/dictionary/dictionary";
import { useLanguageStore } from "@/stores/useLanguageStore";

export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  const t = dictionary[language as "ru" | "kg"];

  return { t };
}
