import quyNhonCoastImg from '../assets/images/quy_nhon_coast_1795079603330.jpg';
import vietnameseCuisineImg from '../assets/images/vietnamese_cuisine_1795079604562.jpg';
import localMarketImg from '../assets/images/local_market_vietnam_1795079604790.jpg';
import ruralVietnamFarmImg from '../assets/images/rural_vietnam_farm_1795079603969.jpg';
import cookingClassGatheringImg from '../assets/images/cooking_class_gathering_1795079604080.jpg';

export interface EditorialPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  location: string;
  aspectClass: string;
}

export interface SkillItem {
  number: string;
  title: string;
  meta?: string;
  description: string;
}

export interface MotivationPoint {
  number: string;
  title: string;
  description: string;
}

export interface PersonalityTrait {
  statement: string;
  detail: string;
  motif: 'compass' | 'bowl' | 'leaf' | 'journal' | 'sun' | 'globe';
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: 'NGUYEN THAI TUAN',
    displayName: 'Nguyen Thai Tuan',
    preferredName: 'TUAN',
    nationality: 'Vietnamese',
    hometown: 'Quy Nhon, Gia Lai, Vietnam',
    hometownShort: 'Quy Nhon, Gia Lai – Vietnam',
    currentLocation: 'Ho Chi Minh City, Vietnam',
    targetCompany: 'HCM Cooking Class',
    targetPosition: 'Cooking Class Assistant / Guest Experience Assistant / Tour Experience Staff',
    englishLevel: 'A2',
    email: 'thaituan7820@gmail.com',
    phone: '0778748901',
    cvPdfPath: '/cv/Nguyen-Thai-Tuan-CV.pdf',
    cvFileName: 'Nguyen-Thai-Tuan-CV.pdf',
  },

  hero: {
    headline: 'HELLO, I’M TUAN.',
    supportingHeadline: 'From Quy Nhon to the world of Vietnamese culture, food & experiences.',
    shortDescription: 'A curious soul who loves nature, people, food, and meaningful cultural connections.',
    quickFacts: [
      { label: 'Hometown', value: 'Quy Nhon, Gia Lai' },
      { label: 'Current Base', value: 'Ho Chi Minh City' },
      { label: 'Field Experience', value: '3 Months · BAF Farm' },
      { label: 'English Level', value: 'A2 · Daily Learner' },
    ],
  },

  introduction: [
    'My name is Nguyen Thai Tuan. I come from Quy Nhon, Gia Lai, Vietnam.',
    'I am an energetic, friendly, and open-minded person who loves nature, agriculture, Vietnamese cuisine, and cultural experiences.',
    'I have three months of practical working experience at BAF pig farm, where I learned about animal care, farm operations, teamwork, discipline, and working in challenging environments.',
    'My English communication level is A2. I enjoy meeting international people, exchanging cultures, and improving my English through real-life communication.',
    'I am responsible, adaptable, willing to learn, and not afraid of physically demanding work.',
    'I hope to become part of HCM Cooking Class, where I can improve my English communication skills, explore Vietnamese cuisine, culture, and history more deeply, and contribute to creating memorable experiences for international travelers.',
  ],

  story: {
    kicker: 'Where I Come From',
    title: 'EVERY JOURNEY HAS A BEGINNING.',
    hometownLabel: 'Quy Nhon, Gia Lai – Vietnam',
    narrative:
      'Growing up between the coastal breeze of Quy Nhon and the agricultural heartland of Gia Lai shaped how I see the world. Morning markets alive with fresh herbs, fishermen returning with the tide, family meals cooked from scratch, and the steady rhythm of rural life taught me to value warmth, honesty, and connection.',
    statement:
      '“I believe that the best way to understand a country is through its people, food, traditions, and everyday life.”',
    collage: [
      {
        id: 'quy-nhon',
        src: quyNhonCoastImg,
        alt: 'Golden hour coastline and wooden fishing boats in Quy Nhon, Vietnam',
        caption: 'Coastal mornings where sea air and quiet fishing coves set the pace of life.',
        location: 'Quy Nhon Coastline',
        aspectClass: 'aspect-[4/3]',
      },
      {
        id: 'local-market',
        src: localMarketImg,
        alt: 'Vibrant traditional Vietnamese morning market with woven bamboo baskets of fresh herbs, lemongrass, and chilies',
        caption: 'Woven baskets of fresh herbs, lemongrass, and chilies — the living heart of every neighborhood.',
        location: 'Traditional Morning Market',
        aspectClass: 'aspect-[3/4]',
      },
      {
        id: 'vietnamese-food',
        src: vietnameseCuisineImg,
        alt: 'Traditional Vietnamese dishes including crispy banh xeo, fresh summer rolls, herbs, and dipping sauces',
        caption: 'Balanced flavors of fresh herbs, crispy textures, and shared dipping bowls.',
        location: 'Vietnamese Culinary Heritage',
        aspectClass: 'aspect-[4/3]',
      },
      {
        id: 'rural-life',
        src: ruralVietnamFarmImg,
        alt: 'Misty morning view of lush green rural Vietnamese countryside and agricultural pathways',
        caption: 'Hands in the soil, early mornings, and respect for where every ingredient begins.',
        location: 'Rural Vietnamese Life',
        aspectClass: 'aspect-[16/9]',
      },
    ] as EditorialPhoto[],
  },

  experience: {
    kicker: 'My Journey & Experience',
    title: 'LEARNING THROUGH REAL EXPERIENCES.',
    image: {
      id: 'farm-experience',
      src: ruralVietnamFarmImg,
      alt: 'Vietnamese agricultural countryside at sunrise reflecting practical farm work and discipline',
      caption: 'Grounded in practical daily work, teamwork, and early-morning discipline.',
      location: 'BAF Agricultural Operations',
      aspectClass: 'aspect-[16/9]',
    } as EditorialPhoto,
    entries: [
      {
        index: '01',
        company: 'BAF – Pig Farm',
        duration: '3 Months',
        position: 'Farm Worker',
        summary:
          'Hands-on agricultural operations in a structured, physically demanding environment that built everyday reliability, care, and team spirit.',
        responsibilities: [
          'Daily animal care and feeding.',
          'Monitoring pig health and behavior.',
          'Cleaning and maintaining livestock facilities.',
          'Supporting the care of sows and piglets.',
          'Following farm hygiene and biosecurity procedures.',
          'Working with teammates in a demanding environment.',
        ],
        developedSkills: [
          'Discipline',
          'Teamwork',
          'Responsibility',
          'Adaptability',
          'Practical problem-solving',
        ],
      },
    ],
  },

  skills: {
    kicker: 'What I Bring to the Table',
    title: 'MY SKILLS & STRENGTHS',
    items: [
      {
        number: '01',
        title: 'English Communication',
        meta: 'Level A2',
        description:
          'I can communicate in basic everyday situations and am motivated to improve through real-world interaction.',
      },
      {
        number: '02',
        title: 'Agriculture & Animal Care',
        meta: 'Practical Foundation',
        description:
          'Basic knowledge of animal husbandry and veterinary care, especially pig farming.',
      },
      {
        number: '03',
        title: 'Computer Skills',
        meta: 'Everyday Office Tools',
        description:
          'Comfortable using computers and basic office applications.',
      },
      {
        number: '04',
        title: 'Driving',
        meta: 'Category B · Manual',
        description:
          'Vietnamese driving licence – Category B, manual transmission.',
      },
      {
        number: '05',
        title: 'Teamwork',
        meta: 'Guest & Crew Ready',
        description:
          'Friendly, cooperative, and comfortable working with different people.',
      },
      {
        number: '06',
        title: 'Adaptability',
        meta: 'Hands-On Mindset',
        description:
          'Willing to learn new skills and work in physically demanding environments.',
      },
    ] as SkillItem[],
  },

  motivation: {
    kicker: 'Why HCM Cooking Class?',
    title: 'WHY I WANT TO JOIN YOUR JOURNEY.',
    statement:
      '“Food is more than something we eat. It is a story about people, history, culture, and identity.”',
    points: [
      {
        number: '01',
        title: 'Language Development',
        description:
          'I want to improve my English through daily communication with international guests and colleagues.',
      },
      {
        number: '02',
        title: 'Vietnamese Cuisine',
        description:
          'I want to discover more about traditional Vietnamese dishes, ingredients, cooking techniques, and regional food culture.',
      },
      {
        number: '03',
        title: 'History & Culture',
        description:
          'I want to understand the stories, traditions, and history behind Vietnamese cuisine and share these experiences with international travelers.',
      },
      {
        number: '04',
        title: 'Personal Growth',
        description:
          'I want to develop my communication, hospitality, teamwork, and guest-support skills.',
      },
    ] as MotivationPoint[],
  },

  personality: {
    kicker: 'My Personality',
    title: 'BEYOND THE RESUME.',
    traits: [
      {
        statement: 'Curious by nature.',
        detail: 'Always asking how a dish is seasoned, where an ingredient grows, and what brings travelers to Vietnam.',
        motif: 'compass',
      },
      {
        statement: 'Friendly and approachable.',
        detail: 'A warm smile and genuine hospitality that helps international guests feel relaxed from the first hello.',
        motif: 'bowl',
      },
      {
        statement: 'Responsible and hardworking.',
        detail: 'Ready to arrive early, keep spaces spotless, and support teammates behind the scenes without hesitation.',
        motif: 'leaf',
      },
      {
        statement: 'Always willing to learn.',
        detail: 'Listening closely to chefs, guides, and guests to turn every shift into practical growth.',
        motif: 'journal',
      },
      {
        statement: 'Comfortable with new challenges.',
        detail: 'Calm and steady in busy kitchens, lively morning markets, and physically active environments.',
        motif: 'sun',
      },
      {
        statement: 'Passionate about cultural exchange.',
        detail: 'Excited to share everyday Vietnamese traditions while learning about the places guests call home.',
        motif: 'globe',
      },
    ] as PersonalityTrait[],
  },

  closing: {
    backgroundImage: cookingClassGatheringImg,
    backgroundAlt:
      'Travelers and Vietnamese hosts preparing and sharing traditional Vietnamese cuisine around a warm lantern-lit wooden table',
    headline: 'LET’S CREATE SOMETHING MEMORABLE TOGETHER.',
    paragraphs: [
      'I hope to have the opportunity to become part of HCM Cooking Class, where I can learn, grow, and contribute positively to your team.',
      'I look forward to the opportunity to meet you, introduce myself, and discuss how I can contribute to your team.',
      'Thank you for taking the time to explore my portfolio and consider my application.',
    ],
    signOff: 'Best regards,',
  },
};
