import { useState } from "react";
import { Calculator, Users, Phone, MessageSquare, Info } from "lucide-react";
import { useTranslation, type SupportedLanguage } from "../i18n/helpers";

interface Props {
  lang: SupportedLanguage;
  translations?: any;
}

const OmniChannelCalculator = ({ lang, translations }: Props) => {
  // OmniChannelCalculator 初始化

  // 安全地調用 Hook，如果失敗則使用 SSR translations
  let hookResult;
  let hookT = null;
  let isLoading = false;

  try {
    // 只有在有 translations 時才嘗試調用 hook（作為 fallback）
    if (!translations) {
      hookResult = useTranslation(lang);
      hookT = hookResult.error ? null : hookResult.t;
      isLoading = hookResult.error ? false : hookResult.isLoading;
    }
  } catch (error) {
    console.log("🔧 Hook 調用失敗，使用 SSR translations:", error.message);
    hookT = null;
    isLoading = false;
  }

  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [users, setUsers] = useState(1);
  const [localNumbers, setLocalNumbers] = useState(1);
  const [tollFreeNumbers, setTollFreeNumbers] = useState(0);
  const [whatsappNumbers, setWhatsappNumbers] = useState(1);
  const [smsCount, setSmsCount] = useState(100);
  const [callMinutes, setCallMinutes] = useState(100);
  const [voicemailDrops, setVoicemailDrops] = useState(0);
  const [whatsappMessages, setWhatsappMessages] = useState(100);

  // 統一的翻譯獲取函數，支援參數插值
  const getText = (
    key: string,
    params?: Record<string, any>,
    fallback: string = key
  ): string => {
    let text: string;
    const originalText = text; // 用於調試

    // 優先使用 SSR translations，如果沒有則使用 hook
    if (translations) {
      const keys = key.split(".");
      let result: any = translations;

      for (const k of keys) {
        if (result && typeof result === "object" && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          text = fallback;
          break;
        }
      }

      if (result !== undefined) {
        text = typeof result === "string" ? result : fallback;
      }
    } else {
      // 回退到 hook 翻譯（如果有的話）
      if (hookT) {
        text = hookT(key, params);
      } else {
        text = fallback;
      }
    }

    // 如果有參數，進行插值替換
    if (params && text) {
      const beforeInterpolation = text;

      Object.entries(params).forEach(([paramKey, paramValue]) => {
        // Handle simple parameters: {{key}}
        const simplePlaceholder = new RegExp(`\{\{${paramKey}\}\}`, "g");
        text = text.replace(simplePlaceholder, String(paramValue));

        // Handle formatted parameters: {{key, number}}, {{key, currency}}, etc.
        // 正確的轉義：在 new RegExp() 中需要雙層轉義
        const formattedPlaceholder = new RegExp(
          `\\{\\{${paramKey},\\s*number\\}\\}`,
          "g"
        );
        text = text.replace(
          formattedPlaceholder,
          typeof paramValue === "number"
            ? paramValue.toLocaleString()
            : String(paramValue)
        );

        // Handle other potential formats
        const currencyPlaceholder = new RegExp(
          `\\{\\{${paramKey},\\s*currency\\}\\}`,
          "g"
        );
        text = text.replace(
          currencyPlaceholder,
          typeof paramValue === "number"
            ? `$${paramValue.toLocaleString()}`
            : String(paramValue)
        );
      });
    }

    return text || fallback;
  };

  // 處理載入狀態（只有在 CSR 且沒有 translations 時才顯示）
  if (!translations && isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="h-6 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="h-6 bg-gray-200 rounded mb-6"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Pricing constants
  const pricing = {
    firstUser: {
      monthly: 99,
      yearly: 999,
    },
    additionalUser: {
      monthly: 49,
      yearly: 499,
    },
    localNumber: 2,
    tollFreeNumber: 3,
    whatsappNumber: 0,
    smsRate: 0.02,
    callRate: 0.015,
    voicemailRate: 0.05,
    whatsappRate: 0, // Free for business-initiated messages
  };

  // Calculate monthly costs
  const calculateMonthlyCosts = () => {
    const userCost =
      pricing.firstUser.monthly +
      Math.max(0, users - 1) * pricing.additionalUser.monthly;
    const phoneNumberCost =
      localNumbers * pricing.localNumber +
      tollFreeNumbers * pricing.tollFreeNumber;
    const whatsappNumberCost = whatsappNumbers * pricing.whatsappNumber;
    const smsCost = smsCount * pricing.smsRate;
    const callCost = callMinutes * pricing.callRate;
    const voicemailCost = voicemailDrops * pricing.voicemailRate;
    const whatsappCost = whatsappMessages * pricing.whatsappRate;

    return {
      userCost,
      phoneNumberCost,
      whatsappNumberCost,
      smsCost,
      callCost,
      voicemailCost,
      whatsappCost,
      total:
        userCost +
        phoneNumberCost +
        whatsappNumberCost +
        smsCost +
        callCost +
        voicemailCost +
        whatsappCost,
    };
  };

  // Calculate yearly costs
  const calculateYearlyCosts = () => {
    const userCost =
      pricing.firstUser.yearly +
      Math.max(0, users - 1) * pricing.additionalUser.yearly;
    const phoneNumberCost =
      (localNumbers * pricing.localNumber +
        tollFreeNumbers * pricing.tollFreeNumber) *
      12;
    const whatsappNumberCost = whatsappNumbers * pricing.whatsappNumber * 12;
    const smsCost = smsCount * pricing.smsRate * 12;
    const callCost = callMinutes * pricing.callRate * 12;
    const voicemailCost = voicemailDrops * pricing.voicemailRate * 12;
    const whatsappCost = whatsappMessages * pricing.whatsappRate * 12;

    return {
      userCost,
      phoneNumberCost,
      whatsappNumberCost,
      smsCost,
      callCost,
      voicemailCost,
      whatsappCost,
      total:
        userCost +
        phoneNumberCost +
        whatsappNumberCost +
        smsCost +
        callCost +
        voicemailCost +
        whatsappCost,
    };
  };

  const monthlyCosts = calculateMonthlyCosts();
  const yearlyCosts = calculateYearlyCosts();
  const currentCosts = billingPeriod === "monthly" ? monthlyCosts : yearlyCosts;

  // Calculate savings for yearly plan
  const monthlyTotal = monthlyCosts.total;
  const yearlyTotal = yearlyCosts.total;
  const yearlyEquivalent = monthlyTotal * 12;
  const savings = yearlyEquivalent - yearlyTotal;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calculator className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            {getText(
              "seax.pricing.omniCalculator.title",
              "Omni-channel Cost Calculator"
            )}
          </h2>
        </div>
        <p className="text-lg text-gray-600">
          {getText(
            "seax.pricing.omniCalculator.subtitle",
            "Calculate your monthly costs based on your usage"
          )}
        </p>
      </div>

      {/* Billing Period Toggle */}
      <div className="flex items-center justify-center mb-8">
        <span
          className={`mr-3 ${
            billingPeriod === "monthly"
              ? "text-gray-900 font-medium"
              : "text-gray-500"
          }`}
        >
          {getText("seax.pricing.omniCalculator.billing.monthly", "Monthly")}
        </span>
        <button
          onClick={() =>
            setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")
          }
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              billingPeriod === "yearly" ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span
          className={`ml-3 ${
            billingPeriod === "yearly"
              ? "text-gray-900 font-medium"
              : "text-gray-500"
          }`}
        >
          {getText("seax.pricing.omniCalculator.billing.yearly", "Yearly")}
          <span className="text-green-500 font-semibold">
            {getText("seax.pricing.omniCalculator.billing.save", "Save 15%")}
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {getText(
              "seax.pricing.omniCalculator.configureTitle",
              "Configure Your Setup"
            )}
          </h3>

          {/* Users */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <label className="text-sm font-medium text-gray-700">
                {getText(
                  "seax.pricing.omniCalculator.users.label",
                  "Number of Users"
                )}
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setUsers(Math.max(1, users - 1))}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg font-semibold"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">
                {users}
              </span>
              <button
                onClick={() => setUsers(users + 1)}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-lg font-semibold"
              >
                +
              </button>
            </div>
            <p className="text-sm text-gray-500">
              {getText(
                "seax.pricing.omniCalculator.users.pricing",
                {
                  first:
                    billingPeriod === "monthly" ? "$99/month" : "$999/year",
                  additional:
                    billingPeriod === "monthly" ? "$49/month" : "$499/year",
                },
                `First user: ${
                  billingPeriod === "monthly" ? "$99/month" : "$999/year"
                }, Additional: ${
                  billingPeriod === "monthly" ? "$49/month" : "$499/year"
                }`
              )}
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-600" />
              <label className="text-sm font-medium text-gray-700">
                {getText(
                  "seax.pricing.omniCalculator.phone.label",
                  "Phone Numbers"
                )}
              </label>
            </div>

            {/* Local Numbers */}
            <div className="ml-7">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 break-words hyphens-auto flex-1 mr-2">
                  {getText(
                    "seax.pricing.omniCalculator.phone.local",
                    "Local Numbers ($2/month each)"
                  )}
                </span>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() =>
                      setLocalNumbers(Math.max(0, localNumbers - 1))
                    }
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm flex-shrink-0"
                  >
                    -
                  </button>
                  <span className="w-8 text-center flex-shrink-0">
                    {localNumbers}
                  </span>
                  <button
                    onClick={() => setLocalNumbers(localNumbers + 1)}
                    className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center text-sm flex-shrink-0"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Toll-Free Numbers */}
            <div className="ml-7">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 break-words hyphens-auto flex-1 mr-2">
                  {getText(
                    "seax.pricing.omniCalculator.phone.tollfree",
                    "Toll-Free Numbers ($3/month each)"
                  )}
                </span>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() =>
                      setTollFreeNumbers(Math.max(0, tollFreeNumbers - 1))
                    }
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm flex-shrink-0"
                  >
                    -
                  </button>
                  <span className="w-8 text-center flex-shrink-0">
                    {tollFreeNumbers}
                  </span>
                  <button
                    onClick={() => setTollFreeNumbers(tollFreeNumbers + 1)}
                    className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center text-sm flex-shrink-0"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Numbers */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <label className="text-sm font-medium text-gray-700">
                {getText(
                  "seax.pricing.omniCalculator.whatsapp.label",
                  "WhatsApp Business Numbers"
                )}
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  setWhatsappNumbers(Math.max(0, whatsappNumbers - 1))
                }
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg font-semibold"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">
                {whatsappNumbers}
              </span>
              <button
                onClick={() => setWhatsappNumbers(whatsappNumbers + 1)}
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center text-lg font-semibold"
              >
                +
              </button>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-start space-x-2">
              <Info className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-emerald-700">
                {getText(
                  "seax.pricing.omniCalculator.whatsapp.note",
                  "WhatsApp Business numbers are free to set up. You only pay for messages sent."
                )}
              </p>
            </div>
          </div>

          {/* Usage */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-900">
              {getText(
                "seax.pricing.omniCalculator.usageTitle",
                "Monthly Usage"
              )}
            </h4>

            {/* SMS */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                {getText(
                  "seax.pricing.omniCalculator.sms",
                  "SMS Messages ($0.02 each)"
                )}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={smsCount}
                onChange={(e) => setSmsCount(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{getText("omniCalculator.ranges.zero", "0")}</span>
                <span className="font-medium">{smsCount.toLocaleString()}</span>
                <span>{getText("omniCalculator.ranges.smsMax", "10,000")}</span>
              </div>
            </div>

            {/* Call Minutes */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                {getText(
                  "seax.pricing.omniCalculator.calls",
                  "Call Minutes ($0.015 per minute)"
                )}
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={callMinutes}
                onChange={(e) => setCallMinutes(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{getText("omniCalculator.ranges.zero", "0")}</span>
                <span className="font-medium">
                  {callMinutes.toLocaleString()}
                </span>
                <span>
                  {getText("omniCalculator.ranges.callsMax", "5,000")}
                </span>
              </div>
            </div>

            {/* Voicemail Drops */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                {getText(
                  "seax.pricing.omniCalculator.voicemail",
                  "Voicemail Drops ($0.05 each)"
                )}
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={voicemailDrops}
                onChange={(e) => setVoicemailDrops(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{getText("omniCalculator.ranges.zero", "0")}</span>
                <span className="font-medium">
                  {voicemailDrops.toLocaleString()}
                </span>
                <span>
                  {getText("omniCalculator.ranges.voicemailMax", "1,000")}
                </span>
              </div>
            </div>

            {/* WhatsApp Messages */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                {getText(
                  "seax.pricing.omniCalculator.whatsappMessages",
                  "WhatsApp Messages (Free for business-initiated)"
                )}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={whatsappMessages}
                onChange={(e) => setWhatsappMessages(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{getText("omniCalculator.ranges.zero", "0")}</span>
                <span className="font-medium">
                  {whatsappMessages.toLocaleString()}
                </span>
                <span>
                  {getText("omniCalculator.ranges.whatsappMax", "10,000")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {getText(
              "seax.pricing.omniCalculator.breakdownTitle",
              {
                period:
                  billingPeriod === "monthly"
                    ? getText(
                        "seax.pricing.omniCalculator.billing.monthly",
                        "Monthly"
                      )
                    : getText(
                        "seax.pricing.omniCalculator.billing.yearly",
                        "Yearly"
                      ),
              },
              `${
                billingPeriod === "monthly" ? "Monthly" : "Yearly"
              } Cost Breakdown`
            )}
          </h3>

          <div className="space-y-4">
            {/* User Costs */}
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <div>
                <span className="text-gray-700">
                  {getText(
                    "seax.pricing.omniCalculator.usersBreakdown",
                    { count: users },
                    `${users} User${users > 1 ? "s" : ""}`
                  )}
                </span>
                <p className="text-sm text-gray-500">
                  {getText(
                    "seax.pricing.omniCalculator.usersDetail",
                    { additional: Math.max(0, users - 1) },
                    `1 first user + ${Math.max(0, users - 1)} additional`
                  )}
                </p>
              </div>
              <span className="text-lg font-semibold">
                ${currentCosts.userCost.toLocaleString()}
              </span>
            </div>

            {/* Phone Number Costs */}
            {(localNumbers > 0 || tollFreeNumbers > 0) && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <span className="text-gray-700">
                    {getText(
                      "seax.pricing.omniCalculator.phoneBreakdown",
                      "Phone Numbers"
                    )}
                  </span>
                  <p className="text-sm text-gray-500">
                    {localNumbers}{" "}
                    {getText("omniCalculator.breakdown.localPlus", "local")} +{" "}
                    {tollFreeNumbers}{" "}
                    {getText(
                      "omniCalculator.breakdown.tollFreeMinus",
                      "toll-free"
                    )}
                  </p>
                </div>
                <span className="text-lg font-semibold">
                  ${currentCosts.phoneNumberCost.toLocaleString()}
                </span>
              </div>
            )}

            {/* WhatsApp Numbers */}
            {whatsappNumbers > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <span className="text-gray-700">
                    {getText(
                      "seax.pricing.omniCalculator.whatsappBreakdown",
                      { count: whatsappNumbers },
                      `${whatsappNumbers} WhatsApp Number${
                        whatsappNumbers > 1 ? "s" : ""
                      }`
                    )}
                  </span>
                  <p className="text-sm text-emerald-600">
                    {getText(
                      "seax.pricing.omniCalculator.whatsappFree",
                      "Free setup"
                    )}
                  </p>
                </div>
                <span className="text-lg font-semibold text-emerald-600">
                  $0
                </span>
              </div>
            )}

            {/* Usage Costs */}
            {smsCount > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">
                  {getText(
                    "seax.pricing.omniCalculator.smsBreakdown",
                    { count: smsCount },
                    `${smsCount} SMS Messages`
                  )}
                </span>
                <span className="text-lg font-semibold">
                  ${currentCosts.smsCost.toFixed(2)}
                </span>
              </div>
            )}

            {callMinutes > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">
                  {getText(
                    "seax.pricing.omniCalculator.callsBreakdown",
                    { count: callMinutes },
                    `${callMinutes} Call Minutes`
                  )}
                </span>
                <span className="text-lg font-semibold">
                  ${currentCosts.callCost.toFixed(2)}
                </span>
              </div>
            )}

            {voicemailDrops > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">
                  {getText(
                    "seax.pricing.omniCalculator.voicemailBreakdown",
                    { count: voicemailDrops },
                    `${voicemailDrops} Voicemail Drops`
                  )}
                </span>
                <span className="text-lg font-semibold">
                  ${currentCosts.voicemailCost.toFixed(2)}
                </span>
              </div>
            )}

            {whatsappMessages > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <span className="text-gray-700">
                    {getText(
                      "seax.pricing.omniCalculator.whatsappMessagesBreakdown",
                      { count: whatsappMessages },
                      `${whatsappMessages} WhatsApp Messages`
                    )}
                  </span>
                  <p className="text-sm text-emerald-600">
                    {getText(
                      "seax.pricing.omniCalculator.whatsappMessagesFree",
                      "Free for business-initiated"
                    )}
                  </p>
                </div>
                <span className="text-lg font-semibold text-emerald-600">
                  $0
                </span>
              </div>
            )}

            {/* Total */}
            <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
              <span className="text-xl font-bold text-gray-900">
                {getText(
                  "seax.pricing.omniCalculator.total",
                  {
                    period:
                      billingPeriod === "monthly"
                        ? getText(
                            "seax.pricing.omniCalculator.billing.monthly",
                            "Monthly"
                          )
                        : getText(
                            "seax.pricing.omniCalculator.billing.yearly",
                            "Yearly"
                          ),
                  },
                  `Total ${billingPeriod === "monthly" ? "Monthly" : "Yearly"}`
                )}
              </span>
              <span className="text-2xl font-bold text-blue-600">
                ${currentCosts.total.toLocaleString()}
              </span>
            </div>

            {/* Yearly Savings */}
            {billingPeriod === "yearly" && savings > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-800 font-semibold">
                    {getText(
                      "seax.pricing.omniCalculator.savings.title",
                      { amount: savings.toLocaleString() },
                      `Save $${savings.toLocaleString()} per year`
                    )}
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  {getText(
                    "seax.pricing.omniCalculator.savings.detail",
                    "Compared to paying monthly"
                  )}
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8 space-y-3">
            <a
              href="https://seax.seasalt.ai/signup"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center inline-block break-words hyphens-auto"
            >
              {getText(
                "seax.pricing.omniCalculator.cta.start",
                "Start Free Trial"
              )}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center inline-block break-words hyphens-auto"
            >
              {getText(
                "seax.pricing.omniCalculator.cta.sales",
                "Talk to Sales"
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmniChannelCalculator;
