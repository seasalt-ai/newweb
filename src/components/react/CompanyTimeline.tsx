import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type SupportedLanguage =
  | "en"
  | "es"
  | "zh-TW"
  | "zh-CN"
  | "ja"
  | "ko"
  | "fr"
  | "de"
  | "ar"
  | "fa"
  | "fil"
  | "hi"
  | "id"
  | "ms"
  | "pl"
  | "pt"
  | "ru"
  | "ta"
  | "th"
  | "vi";

interface CompanyTimelineProps {
  lang: SupportedLanguage;
}

interface Milestone {
  year: string;
  event: string;
}

const CompanyTimeline: React.FC<CompanyTimelineProps> = ({ lang }) => {
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const langKey =
          lang === "zh-TW" ? "zh-TW" : lang === "zh-CN" ? "zh-CN" : lang;
        const translationModule = await import(
          `../../i18n/locales/${langKey}.json`
        );
        setTranslations(translationModule.default || translationModule);
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };

    loadTranslations();
  }, [lang]);

  if (!translations) {
    return <div>Loading...</div>;
  }

  const t = (key: string) => {
    const keys = key.split(".");
    let result: any = translations;

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }

    return typeof result === "string" ? result : key;
  };

  const milestones: Milestone[] = [
    { year: "2020.1", event: t("company.timeline.list.0.event") },
    { year: "2020~2023", event: t("company.timeline.list.1.event") },
    { year: "2022", event: t("company.timeline.list.2.event") },
    { year: "2023", event: t("company.timeline.list.3.event") },
    { year: "2025", event: t("company.timeline.list.4.event") },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t("company.timeline.title")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("company.timeline.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {milestone.year}
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-800 font-medium">
                  {milestone.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
