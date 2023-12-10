export const internships = [
  {
    id: 1,
    entrepriseId: 1,
    positionTitle: 'Développeur web',
    description: "Développement d'une application web de gestion de stock",
    location: 'Paris',
    duration: '3 mois',
    domains: ['Web', 'Front-end', 'Back-end', 'Full-stack', 'Mobile'],
    documentationUrl: 'https://www.google.com',

    questions: [
      {
        id: 1,
        question: 'Quelles sont vos motivations ?',
        required: true
      },
      {
        id: 2,
        question: 'Quelles sont vos compétences ?',
        required: true
      },
      {
        id: 3,
        question: 'Quelles sont vos disponibilités ?',
        required: true
      }
    ],
    keywords: ['Web', 'Front-end', 'Back-end', 'Full-stack', 'Mobile'],

    feedbacks: [
      {
        id: 1,
        internId: 1,
        internshipId: 1,
        comment: 'Très bon étudiant',
        rating: 5
      },
      {
        id: 2,
        internId: 2,
        internshipId: 1,
        comment: 'Bon étudiant',
        rating: 4
      }
    ],
    createdAt: new Date()
  },
  {
    id: 2,
    entrepriseId: 2,
    positionTitle: 'Ingénieur logiciel',
    description: "Conception et développement de logiciels d'entreprise",
    location: 'Lyon',
    duration: '6 mois',
    domains: ['Logiciel', 'Java', 'C#', 'Python', 'DevOps'],
    documentationUrl: 'https://www.example.com',

    questions: [
      {
        id: 4,
        question: 'Quelle est votre expérience en développement logiciel ?',
        required: true
      },
      {
        id: 5,
        question: 'Quels langages de programmation connaissez-vous ?',
        required: true
      },
      {
        id: 6,
        question: 'Pouvez-vous travailler en équipe ?',
        required: true
      }
    ],
    keywords: ['Logiciel', 'Java', 'C#', 'Python', 'DevOps'],

    feedbacks: [
      {
        id: 3,
        internId: 3,
        internshipId: 2,
        comment: 'Excellent travail et esprit d’équipe',
        rating: 5
      },
      {
        id: 4,
        internId: 4,
        internshipId: 2,
        comment: 'Très engagé et créatif',
        rating: 4
      }
    ],
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
