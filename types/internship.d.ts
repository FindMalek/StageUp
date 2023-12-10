export type InternshipType = {
  id: string;
  internId: string;
  enterpriseId: string;
  positionTitle: string;
  description: string;
  location: string;
  duration: string;
  domains: string[];
  documentationFileUrl: string;
  questions: QuestionType[];
  keywords: string[];
  feedbacks: FeedbackType[];
  enterprise: EnterpriseType;
  createdAt: Date;
};

export type QuestionType = {
  id: string;
  enterpriseId: string;
  question: string;
  required: boolean;
};

export type FeedbackType = {
  id: string;
  internId: string;
  internshipId: string;
  comment: string;
  rating: number;
};

export type EnterpriseType = {
  id: string;
  userId: string;
  imageUrl: string;
  description: string;
  companyName: string;
  industry: string;
  companySize: string;
  foundedDate: Date;
  websiteUrl: string;
};
