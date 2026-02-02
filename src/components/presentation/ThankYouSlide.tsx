import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'phosphor-react';
import { Callout } from '../content/Callout';
import { ChineseTitle } from '../content/ChineseTitle';
import { StatusBadge } from '../content/StatusBadge';
import { useLanguage } from '../../contexts/LanguageContext';

export const ThankYouSlide: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[992px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center space-y-12"
        >
          {/* Thank You Message */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <Heart size={64} weight="fill" className="text-[#5755EE]" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-display md:text-[56px] lg:text-[64px]"
            >
              {t('thankyou.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-h2 text-[#9b9b9b] max-w-2xl mx-auto leading-relaxed"
            >
              {t('thankyou.message')}
            </motion.p>
          </div>

          {/* Recommended Choice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center gap-6 pt-8"
          >
            <Callout
              type="success"
              title={t('summary.recommended')}
              className="max-w-2xl w-full py-4"
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="scale-75 origin-center">
                  <ChineseTitle characters="戈迪" pinyin="Gē Dí" />
                </div>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  <StatusBadge text={t('summary.badge.best')} variant="best" />
                  <StatusBadge text={t('summary.badge.genZ')} variant="gen-z" />
                  <StatusBadge text={t('summary.badge.consumer')} variant="consumer" />
                </div>
                <p className="text-small text-[#ececec] leading-relaxed mt-1">
                  {t('summary.recommended.desc')}
                </p>
              </div>
            </Callout>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
