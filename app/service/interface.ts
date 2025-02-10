interface SanityBody {
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface I_social extends SanityBody {
  title: string;
  url: string;
  image: Image;
}

interface I_pageInfo extends SanityBody {
  typewriter: string[];
  role: string;
  email: string;
  Phone: string;
  heroImage: Image;
  aboutMe: string;
  aboutMeImage: Image;
}

interface I_skill extends SanityBody {
  title: string;
  image: Image;
}

interface I_experience extends SanityBody {
  company: string;
  jobTitle: string;
  isWorkingHere: boolean;
  companyImage: Image;
  technologies: I_skill[];
  points: string[];
  dateStarted: string;
  dateEnded: string;
  sort: number;
}

interface I_project extends SanityBody {
  title: string;
  image: Image;
  technologies: I_skill[];
  linkToProject?: string;
  summary: string;
  sort: number;
}

export type { I_social, I_pageInfo, I_skill, I_experience, I_project };
