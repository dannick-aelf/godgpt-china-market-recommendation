import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { ChineseTitle } from './ChineseTitle';
import { StatusBadge } from './StatusBadge';
import { useLanguage } from '../../contexts/LanguageContext';

interface ComparisonCardProps {
  optionNumber: 1 | 2 | 3;
  chineseCharacters: string;
  pinyin: string;
  positioning: string;
  bestFor: string[];
  tone: string;
  delay?: number;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  optionNumber,
  chineseCharacters,
  pinyin,
  positioning,
  bestFor,
  tone,
  delay = 0,
}) => {
  const { language, t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: optionNumber === 1 ? -50 : optionNumber === 2 ? 0 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative"
    >
      {optionNumber === 2 && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center gap-1 h-6 px-2 rounded-sm border border-[#5755EE] bg-[#5755EE] text-white text-xs font-medium">
            {t('summary.ourPick')}
          </div>
        </div>
      )}
      <Card highlighted={optionNumber === 2}>
        <div className="space-y-2 py-2">
          <div className="scale-90 origin-top">
            <ChineseTitle characters={chineseCharacters} pinyin={pinyin} />
          </div>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {optionNumber === 1 && (
              <>
                <StatusBadge text={language === 'en' ? 'Best Overall' : '最佳整体'} variant="best" />
                <StatusBadge text={language === 'en' ? 'Premium' : '高端'} variant="premium" />
              </>
            )}
            {optionNumber === 2 && (
              <>
                <StatusBadge text={language === 'en' ? 'Gen-Z' : 'Z世代'} variant="gen-z" />
                <StatusBadge text={language === 'en' ? 'Consumer' : '消费者'} variant="consumer" />
              </>
            )}
            {optionNumber === 3 && (
              <>
                <StatusBadge text={language === 'en' ? 'Philosophy' : '理念'} variant="philosophy" />
                <StatusBadge text={language === 'en' ? 'Concept' : '概念'} variant="concept" />
              </>
            )}
          </div>
          <div className="space-y-2">
            <div>
              <div className="text-small text-[#9b9b9b] mb-0.5 text-xs">{language === 'en' ? 'Positioning' : '定位'}</div>
              <div className="text-small font-medium">{positioning}</div>
            </div>
            <div>
              <div className="text-small text-[#9b9b9b] mb-0.5 text-xs">{language === 'en' ? 'Best for' : '最适合'}</div>
              <ul className="space-y-0.5">
                {bestFor.map((item, index) => (
                  <li key={index} className="text-small">• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-small text-[#9b9b9b] mb-0.5 text-xs">{language === 'en' ? 'Tone' : '语调'}</div>
              <div className="text-small">{tone}</div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
