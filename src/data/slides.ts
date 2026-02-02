import type { Slide } from '../types/presentation.types';

export const slides: Slide[] = [
  // Slide 1: Title/Introduction
  {
    id: 'title',
    type: 'title',
    title: 'GodGPT – Chinese Naming Options',
    content: {
      sections: [],
    },
    callouts: [
      {
        type: 'info',
        content: 'Three strategic options for the Chinese market',
      },
    ],
  },

  // Slide 2: Evaluation Framework
  {
    id: 'evaluation-framework',
    type: 'title',
    title: 'Evaluation Framework',
    content: {
      sections: [],
    },
  },

  // Option 1: 戈德 (Gē Dé) - Overview
  {
    id: 'option1-overview',
    type: 'option-overview',
    optionNumber: 1,
    chineseCharacters: '戈德',
    pinyin: 'Gē Dé',
    statusBadge: {
      text: 'Best overall, linguistically standard',
      variant: 'best',
    },
    title: 'Primary / Formal Brand Name',
    content: {
      sections: [],
    },
  },

  // Option 1: Meaning
  {
    id: 'option1-meaning',
    type: 'meaning',
    optionNumber: 1,
    title: 'Meaning',
    content: {
      sections: [
        {
          type: 'character-breakdown',
          items: [
            '戈: Phonetic carrier (used in transliterations, neutral)',
            '德: Virtue, integrity, moral principle',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'emphasis',
        content: 'Not read literally as "virtue" by users — perceived as a neutral transliteration of "God".',
      },
    ],
  },

  // Option 1: Linguistic & Cultural Notes
  {
    id: 'option1-linguistic',
    type: 'linguistic',
    optionNumber: 1,
    title: 'Linguistic & Cultural Notes',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            '"德" is extremely common in Chinese brand names',
            'Carries positive but non-religious undertones',
            'Sounds authoritative but not aggressive',
            'Familiar structure → easy acceptance',
          ],
        },
      ],
    },
  },

  // Option 1: App Store Considerations
  {
    id: 'option1-app-store',
    type: 'app-store',
    optionNumber: 1,
    title: 'App Store (China) Considerations',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'Safe for App Store review',
            'No explicit religion / deity usage',
            'No ideology, no politics',
            'Suitable for AI, tools, knowledge products',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'warning',
        content: 'Slightly "serious" tone — not playful by default',
      },
    ],
  },

  // Option 1: Market Positioning
  {
    id: 'option1-market',
    type: 'market',
    optionNumber: 1,
    title: 'Market Positioning in CN',
    content: {
      sections: [
        {
          type: 'text',
          items: ['Premium / Serious / Trustworthy'],
        },
        {
          type: 'text',
          title: 'Works well for:',
          items: [
            'Investor-facing branding',
            'System-level AI positioning',
            '"AI assistant with depth"',
          ],
        },
        {
          type: 'text',
          title: 'Feels like:',
          items: [
            'A platform, not a toy',
            'Something users can rely on',
            'A trusted advisor',
          ],
        },
        {
          type: 'text',
          title: 'Best used when:',
          items: [
            'You want credibility',
            'You want longevity',
            'You want the most "correct" name linguistically',
          ],
        },
      ],
    },
  },

  // Option 2: 戈迪 (Gē Dí) - Overview
  {
    id: 'option2-overview',
    type: 'option-overview',
    optionNumber: 2,
    chineseCharacters: '戈迪',
    pinyin: 'Gē Dí',
    statusBadge: {
      text: 'Modern & app-forward',
      variant: 'gen-z',
    },
    title: 'Consumer / Friendly Brand Name',
    content: {
      sections: [],
    },
  },

  // Option 2: Meaning
  {
    id: 'option2-meaning',
    type: 'meaning',
    optionNumber: 2,
    title: 'Meaning',
    content: {
      sections: [
        {
          type: 'character-breakdown',
          items: [
            '戈: Phonetic',
            '迪: Guide, progress, to lead forward',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'emphasis',
        content: 'Reads as a soft, modern transliteration, not a concept.',
      },
    ],
  },

  // Option 2: Linguistic & Cultural Notes
  {
    id: 'option2-linguistic',
    type: 'linguistic',
    optionNumber: 2,
    title: 'Linguistic & Cultural Notes',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            '"迪" is widely used in: Apps, Youth brands, Lifestyle tech',
            'Lighter tone than 德',
            'Feels approachable and companion-like',
          ],
        },
      ],
    },
  },

  // Option 2: App Store Considerations
  {
    id: 'option2-app-store',
    type: 'app-store',
    optionNumber: 2,
    title: 'App Store (China) Considerations',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'Very safe',
            'No religious meaning',
            'Strong fit for AI assistants / chat apps',
            'Friendly to younger users',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'warning',
        content: 'Slightly less "authoritative" than 戈德',
      },
    ],
  },

  // Option 2: Market Positioning
  {
    id: 'option2-market',
    type: 'market',
    optionNumber: 2,
    title: 'Market Positioning in CN',
    content: {
      sections: [
        {
          type: 'text',
          items: ['Modern / Consumer / App-native'],
        },
        {
          type: 'text',
          title: 'Works well for:',
          items: [
            'Daily-use AI companion',
            'Conversational AI',
            'Emotional or reflective interactions',
          ],
        },
        {
          type: 'text',
          title: 'Feels like:',
          items: [
            'An AI buddy',
            'Something you talk with, not to',
            'A friend, not a tool',
          ],
        },
        {
          type: 'text',
          title: 'Best used when:',
          items: [
            'You want adoption',
            'You want friendliness',
            'You want lower psychological barrier to use',
          ],
        },
      ],
    },
  },

  // Option 3: 心镜 (Xīn Jìng) - Overview
  {
    id: 'option3-overview',
    type: 'option-overview',
    optionNumber: 3,
    chineseCharacters: '心镜',
    pinyin: 'Xīn Jìng',
    statusBadge: {
      text: 'Core brand philosophy',
      variant: 'philosophy',
    },
    title: 'Concept Name / Philosophy Layer / Mode',
    content: {
      sections: [],
    },
    callouts: [
      {
        type: 'warning',
        content: 'NOT a phonetic translation of "God" - It is a conceptual name, and that\'s exactly why it\'s powerful.',
      },
    ],
  },

  // Option 3: Meaning
  {
    id: 'option3-meaning',
    type: 'meaning',
    optionNumber: 3,
    title: 'Meaning',
    content: {
      sections: [
        {
          type: 'character-breakdown',
          items: [
            '心: Heart, mind, inner self',
            '镜: Mirror, reflection',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'emphasis',
        content: '"Heart Mirror" / "Mind Mirror" → A mirror that reflects what\'s already inside you',
      },
    ],
  },

  // Option 3: Linguistic & Cultural Notes
  {
    id: 'option3-linguistic',
    type: 'linguistic',
    optionNumber: 3,
    title: 'Linguistic & Cultural Notes',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'Deeply Chinese, poetic, intuitive',
            'Resonates with: Reflection, Self-understanding, Awareness',
            'Spiritual but not religious',
            'No deity, no worship, no belief system',
          ],
        },
      ],
    },
  },

  // Option 3: App Store Considerations
  {
    id: 'option3-app-store',
    type: 'app-store',
    optionNumber: 3,
    title: 'App Store (China) Considerations',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'Extremely safe',
            'No banned religious keywords',
            'No ideology',
            'Fits self-growth, AI reflection, journaling, assistant modes',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'warning',
        content: 'Should not be the sole product name for AI listing (best used as a feature / mode / philosophy)',
      },
    ],
  },

  // Option 3: Market Positioning
  {
    id: 'option3-market',
    type: 'market',
    optionNumber: 3,
    title: 'Market Positioning in CN',
    content: {
      sections: [
        {
          type: 'text',
          items: ['Meaningful / Poetic / Differentiated'],
        },
        {
          type: 'text',
          title: 'Works well for:',
          items: [
            '"Mirror" positioning of GodGPT',
            'Differentiating from utility-only AI',
            'Emotional and reflective AI use cases',
          ],
        },
        {
          type: 'text',
          title: 'Feels like:',
          items: [
            'A mirror that reflects inner truth',
            'A philosophical companion',
            'A mode for deeper connection',
          ],
        },
        {
          type: 'text',
          title: 'Best used when:',
          items: [
            'You want differentiation',
            'You want emotional connection',
            'You want a feature/mode/philosophy layer',
          ],
        },
      ],
    },
  },

  // Recommendation Introduction Slide (Transition to Recommendation)
  {
    id: 'recommendation-intro',
    type: 'title',
    title: 'Recommendation',
    content: {
      sections: [],
    },
  },

  // Summary Slide
  {
    id: 'summary',
    type: 'summary',
    title: 'Summary: Three Strategic Options',
    content: {
      sections: [
        {
          type: 'comparison',
          items: [],
        },
      ],
    },
  },

  // Thank You Slide
  {
    id: 'thank-you',
    type: 'title',
    title: 'Thank You',
    content: {
      sections: [],
    },
  },
];
