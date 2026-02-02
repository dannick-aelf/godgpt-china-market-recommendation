import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle, Sparkle, Target, TrendUp } from 'phosphor-react';
import type { StatusBadgeVariant } from '../../types/presentation.types';

interface StatusBadgeProps {
  text: string;
  variant: StatusBadgeVariant;
  className?: string;
  icon?: React.ReactNode;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  text,
  variant,
  className = '',
  icon,
}) => {
  const variantClasses = {
    best: 'bg-[#5755EE] text-white border-[#5755EE]',
    'gen-z': 'bg-[#5755EE] text-white border-[#5755EE]',
    philosophy: 'bg-[#5755EE] text-white border-[#5755EE]',
    safe: 'bg-[#5755EE] text-white border-[#5755EE]',
    compliant: 'bg-[#5755EE] text-white border-[#5755EE]',
    premium: 'bg-[#5755EE] text-white border-[#5755EE]',
    consumer: 'bg-[#5755EE] text-white border-[#5755EE]',
    concept: 'bg-[#5755EE] text-white border-[#5755EE]',
    neutral: 'bg-[#5755EE] text-white border-[#5755EE]',
    common: 'bg-[#5755EE] text-white border-[#5755EE]',
  };

  const defaultIcons = {
    best: <Star size={14} weight="fill" />,
    'gen-z': <Sparkle size={14} weight="fill" />,
    philosophy: <Target size={14} weight="fill" />,
    safe: <ShieldCheck size={14} weight="fill" />,
    compliant: <CheckCircle size={14} weight="fill" />,
    premium: <TrendUp size={14} weight="fill" />,
    consumer: <Sparkle size={14} weight="fill" />,
    concept: <Target size={14} weight="fill" />,
    neutral: <CheckCircle size={14} weight="fill" />,
    common: <CheckCircle size={14} weight="fill" />,
  };

  const badgeIcon = icon || defaultIcons[variant] || <Star size={14} weight="fill" />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className={`inline-flex items-center gap-1.5 h-8 px-2 rounded-sm border text-small font-medium ${variantClasses[variant]} ${className}`}
    >
      <span className="flex-shrink-0">{badgeIcon}</span>
      <span>{text}</span>
    </motion.div>
  );
};
