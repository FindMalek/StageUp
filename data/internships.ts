export const internships = [
  {
    id: 'sdfs3df4sd35f1',
    enterpriseId: '1',
    internId: '1',
    positionTitle: 'Développeur web',
    description: "Développement d'une application web de gestion de stock",
    location: 'Paris',
    duration: '3 mois',
    documentationFileUrl: 'https://www.google.com',
    questions: [
      {
        id: '1',
        enterpriseId: '1',
        question: 'Quelles sont vos motivations ?',
        required: true
      },
      {
        id: '2',
        enterpriseId: '1',

        question: 'Quelles sont vos compétences ?',
        required: true
      },
      {
        id: '3',
        enterpriseId: '1',

        question: 'Quelles sont vos disponibilités ?',
        required: true
      }
    ],
    keywords: ['Web', 'Front-end', 'Back-end', 'Full-stack', 'Mobile'],

    feedbacks: [
      {
        id: '1',
        internId: '1',
        internshipId: '1',
        comment: 'Très bon étudiant',
        rating: 4
      },
      {
        id: '1',
        internId: '1',
        internshipId: '1',
        comment: 'Bon étudiant',
        rating: 3
      }
    ],

    enterprise: {
      id: '1',
      userId: '1',
      imageUrl: 'https://placehold.co/400x400',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet.',
      companyName: 'Entreprise 1',
      industry: 'Informatique',
      companySize: '10-50',
      foundedDate: new Date(),
      websiteUrl: 'https://www.example.com'
    },
    createdAt: new Date()
  },
  {
    id: '1',
    enterpriseId: '1',
    internId: '1',
    positionTitle: 'Ingénieur logiciel',
    description: "Conception et développement de logiciels d'entreprise",
    location: 'Lyon',
    duration: '6 mois',
    documentationFileUrl: 'https://www.example.com',

    questions: [
      {
        id: '4',
        enterpriseId: '1',

        question: 'Quelle est votre expérience en développement logiciel ?',
        required: true
      },
      {
        id: '5',
        enterpriseId: '1',

        question: 'Quels langages de programmation connaissez-vous ?',
        required: true
      },
      {
        id: '6',
        enterpriseId: '1',
        question: 'Pouvez-vous travailler en équipe ?',
        required: true
      }
    ],
    keywords: ['Logiciel', 'Java', 'C#', 'Python', 'DevOps'],

    feedbacks: [
      {
        id: '1',
        internId: '1',
        internshipId: '1',
        comment: 'Excellent travail et esprit d’équipe',
        rating: 5
      },
      {
        id: '1',
        internId: '1',
        internshipId: '1',
        comment: 'Très engagé et créatif',
        rating: 4
      }
    ],
    enterprise: {
      id: '1',
      userId: '1',
      imageUrl: 'https://placehold.co/400x400',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet.',
      companyName: 'Entreprise 1',
      industry: 'Informatique',
      companySize: '10-50',
      foundedDate: new Date(),
      websiteUrl: 'https://www.example.com'
    },
    createdAt: new Date()
  },
  {
    id: '2',
    enterpriseId: '2',
    internId: '2',
    positionTitle: 'Analyste de données',
    description: 'Analyse des tendances du marché et extraction de données',
    location: 'Marseille',
    duration: '4 mois',
    documentationFileUrl: 'https://www.exampledata.com',

    questions: [
      {
        id: '7',
        enterpriseId: '2',
        question: 'Avez-vous de l’expérience avec Python et SQL ?',
        required: true
      },
      {
        id: '8',
        enterpriseId: '2',
        question: 'Comment gérez-vous les gros volumes de données ?',
        required: true
      },
      {
        id: '9',
        enterpriseId: '2',
        question: 'Quels outils d’analyse de données connaissez-vous ?',
        required: true
      }
    ],
    keywords: ['Data', 'Python', 'SQL', 'Analytics'],

    feedbacks: [
      {
        id: '3',
        internId: '2',
        internshipId: '2',
        comment: 'Capacité d’analyse impressionnante',
        rating: 1
      },
      {
        id: '4',
        internId: '3',
        internshipId: '2',
        comment: 'Excellente maîtrise des outils de données',
        rating: 2
      }
    ],
    enterprise: {
      id: '1',
      userId: '1',
      imageUrl: 'https://placehold.co/400x400',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet.',
      companyName: 'Entreprise 1',
      industry: 'Informatique',
      companySize: '10-50',
      foundedDate: new Date(),
      websiteUrl: 'https://www.example.com'
    },
    createdAt: new Date()
  },
  {
    id: '3',
    enterpriseId: '3',
    internId: '3',
    positionTitle: 'Stage en Marketing Digital',
    description: 'Gestion de campagnes publicitaires en ligne et analyse SEO',
    location: 'Nice',
    duration: '5 mois',
    documentationFileUrl: 'https://www.marketingexample.com',

    questions: [
      {
        id: '10',
        enterpriseId: '3',
        question: 'Avez-vous une expérience en marketing digital ?',
        required: true
      },
      {
        id: '11',
        enterpriseId: '3',
        question: 'Quelle est votre compréhension du SEO et du SEM ?',
        required: true
      },
      {
        id: '12',
        enterpriseId: '3',
        question:
          'Comment évaluez-vous le succès d’une campagne publicitaire ?',
        required: true
      }
    ],
    keywords: ['Marketing', 'SEO', 'SEM', 'Publicité'],

    feedbacks: [
      {
        id: '5',
        internId: '4',
        internshipId: '3',
        comment: 'Très créatif et innovant dans les stratégies de marketing',
        rating: 5
      },
      {
        id: '6',
        internId: '5',
        internshipId: '3',
        comment: 'Approche excellente de l’analyse de marché',
        rating: 4
      }
    ],
    enterprise: {
      id: '1',
      userId: '1',
      imageUrl: 'https://placehold.co/400x400',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet.',
      companyName: 'Entreprise 1',
      industry: 'Informatique',
      companySize: '10-50',
      foundedDate: new Date(),
      websiteUrl: 'https://www.example.com'
    },
    createdAt: new Date()
  }
];

export const domains = {
  id: 'domains',
  name: 'Domaines',
  options: [
    { value: 'design', label: 'Design', checked: false },
    { value: 'engineering', label: 'Ingénierie', checked: false },
    { value: 'management', label: 'Gestion', checked: false },
    { value: 'marketing', label: 'Marketing', checked: false },
    { value: 'sales', label: 'Ventes', checked: false },
    { value: 'support', label: 'Support', checked: false },
    { value: 'product', label: 'Produit', checked: false },
    { value: 'finance', label: 'Finance', checked: false },
    { value: 'legal', label: 'Juridique', checked: false },
    { value: 'human-resources', label: 'Ressources Humaines', checked: false },
    { value: 'operations', label: 'Opérations', checked: false }
  ]
};

export const locations = {
  id: 'localizations',
  name: 'Localisations',
  options: [
    { value: 'tunis', label: 'Tunis', checked: false },
    { value: 'sfax', label: 'Sfax', checked: false },
    { value: 'sousse', label: 'Sousse', checked: false },
    { value: 'ariana', label: 'Ariana', checked: false },
    { value: 'monastir', label: 'Monastir', checked: false },
    { value: 'bizerte', label: 'Bizerte', checked: false },
    { value: 'nabeul', label: 'Nabeul', checked: false },
    { value: 'gabes', label: 'Gabès', checked: false },
    { value: 'kairouan', label: 'Kairouan', checked: false },
    { value: 'gafsa', label: 'Gafsa', checked: false }
  ]
};
export const positions = {
  id: 'positions',
  name: 'Positions',
  options: [
    {
      value: 'intern-developer',
      label: 'Développeur Stagiaire',
      checked: false
    },
    { value: 'intern-designer', label: 'Designer Stagiaire', checked: false },
    { value: 'intern-marketer', label: 'Marketeur Stagiaire', checked: false },
    { value: 'intern-sales', label: 'Commercial Stagiaire', checked: false },
    { value: 'intern-hr', label: 'RH Stagiaire', checked: false },
    { value: 'intern-finance', label: 'Finance Stagiaire', checked: false },
    { value: 'intern-legal', label: 'Juridique Stagiaire', checked: false },
    {
      value: 'intern-operations',
      label: 'Opérations Stagiaire',
      checked: false
    }
  ]
};
