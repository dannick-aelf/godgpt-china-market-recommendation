import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh-CN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.previous': 'Previous',
    'nav.next': 'Next',
    'nav.language': 'Language',
    'nav.english': 'English',
    'nav.chinese': '简体中文',
    
    // Title Slide
    'title.subtitle': 'CN Name Proposal',
    'title.feature1': 'Three Strategic Options',
    'title.feature2': 'Comprehensive Analysis',
    'title.feature3': 'Market-Ready Solutions',
    
    // Evaluation Framework
    'eval.title': 'Evaluation Framework',
    'eval.subtitle': 'Each option will be evaluated across three key dimensions',
    'eval.meaning': 'Meaning & Interpretation',
    'eval.meaning.desc': 'Linguistic analysis and cultural interpretation',
    'eval.appstore': 'App Store Considerations',
    'eval.appstore.desc': 'Review safety and compliance requirements',
    'eval.market': 'Market Positioning (China)',
    'eval.market.desc': 'Brand positioning and target audience fit',
    
    // Common Section Titles
    'section.meaning': 'Meaning',
    'section.linguistic': 'Linguistic & Cultural Notes',
    'section.appstore': 'App Store (China) Considerations',
    'section.market': 'Market Positioning in CN',
    'section.characterBreakdown': 'Character Breakdown',
    
    // Option 1
    'option1.badge': 'Best overall, linguistically standard',
    'option1.title': 'Primary / Formal Brand Name',
    
    // Option 2
    'option2.badge': 'Modern & app-forward',
    'option2.title': 'Consumer / Friendly Brand Name',
    
    // Option 3
    'option3.badge': 'Core brand philosophy',
    'option3.title': 'Concept Name / Philosophy Layer / Mode',
    
    // Market Positioning
    'market.positioning': 'Positioning',
    'market.worksWell': 'Works well for',
    'market.feelsLike': 'Feels like',
    'market.bestUsed': 'Best used when',
    
    // Summary
    'summary.title': 'Summary & Recommendation',
    'summary.recommended': 'Recommended Choice',
    'summary.recommended.desc': 'The best choice for adoption, friendliness, and lower barrier to use',
    'summary.badge.best': 'Best Overall',
    'summary.badge.premium': 'Premium',
    'summary.badge.safe': 'Safe',
    'summary.badge.genZ': 'Modern',
    'summary.badge.consumer': 'Consumer',
    'summary.ourPick': 'Our Recommendation',
    
    // Thank You
    'thankyou.title': 'Thank You',
    'thankyou.message': 'Thank you for reviewing the Chinese naming options for GodGPT',
    
    // Recommendation Intro
    'recommendation.title': 'Recommendation',
  },
  'zh-CN': {
    // Navigation
    'nav.previous': '上一页',
    'nav.next': '下一页',
    'nav.language': '语言',
    'nav.english': 'English',
    'nav.chinese': '简体中文',
    
    // Title Slide
    'title.subtitle': '中文命名提案',
    'title.feature1': '三个战略选项',
    'title.feature2': '全面分析',
    'title.feature3': '市场就绪方案',
    
    // Evaluation Framework
    'eval.title': '评估框架',
    'eval.subtitle': '每个选项将从三个关键维度进行评估',
    'eval.meaning': '含义与解读',
    'eval.meaning.desc': '语言分析和文化解读',
    'eval.appstore': '应用商店考量',
    'eval.appstore.desc': '审查安全性和合规要求',
    'eval.market': '市场定位（中国）',
    'eval.market.desc': '品牌定位和目标受众匹配',
    
    // Common Section Titles
    'section.meaning': '含义',
    'section.linguistic': '语言与文化注释',
    'section.appstore': '应用商店（中国）考量',
    'section.market': '中国市场定位',
    'section.characterBreakdown': '字符解析',
    
    // Option 1
    'option1.badge': '最佳整体，语言标准',
    'option1.title': '主要/正式品牌名称',
    
    // Option 2
    'option2.badge': '现代与应用导向',
    'option2.title': '消费者/友好品牌名称',
    
    // Option 3
    'option3.badge': '核心品牌理念',
    'option3.title': '概念名称/理念层/模式',
    
    // Market Positioning
    'market.positioning': '定位',
    'market.worksWell': '适用于',
    'market.feelsLike': '感觉像',
    'market.bestUsed': '最佳使用场景',
    
    // Summary
    'summary.title': '总结与推荐',
    'summary.recommended': '推荐选择',
    'summary.recommended.desc': '在采用率、友好性和降低使用障碍方面的最佳选择',
    'summary.badge.best': '最佳整体',
    'summary.badge.premium': '高端',
    'summary.badge.safe': '安全',
    'summary.badge.genZ': '现代',
    'summary.badge.consumer': '消费者',
    'summary.ourPick': '我们的推荐',
    
    // Thank You
    'thankyou.title': '谢谢',
    'thankyou.message': '感谢您审阅GodGPT的中文命名选项',
    
    // Recommendation Intro
    'recommendation.title': '推荐',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
