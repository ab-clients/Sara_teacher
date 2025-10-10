export interface Curriculum {
  id: string;
  flag: string;
  title: string;
  sub: string;
  philosophy: string[];
  ages: string;
  programs: string[];
  assessment: string;
  strength: string;
}

export const curricula: Curriculum[] = [
  {
    id: "british",
    flag: "🇬🇧",
    title: "British Curriculum",
    sub: "National Curriculum / Cambridge / Edexcel",
    philosophy: ["structured", "progression-based learning"],
    ages: "3-18",
    programs: ["EYFS", "Key Stages", "GCSE", "A Levels"],
    assessment: "GCSEs/A-Levels with some coursework",
    strength:
      "Globally recognised; strong subject mastery and university preparation",
  },
  {
    id: "american",
    flag: "🇺🇸",
    title: "American Curriculum",
    sub: "Flexible, credit-based high school pathway",
    philosophy: ["broad", "student-centred", "flexible"],
    ages: "5-18",
    programs: ["Elementary", "Middle", "High School"],
    assessment: "Continuous assessment; SAT/ACT/AP for university",
    strength: "Encourages creativity, leadership and personalised pathways",
  },
  {
    id: "australian",
    flag: "🇦🇺",
    title: "Australian Curriculum",
    sub: "Holistic, competency-based national standards",
    philosophy: ["holistic", "future-focused"],
    ages: "5-18",
    programs: ["Foundation", "Year 1-10", "Senior Secondary"],
    assessment: "Mix of school-based assessment and state exams",
    strength: "Combines academic rigour with practical, real-world skills",
  },
  {
    id: "canadian",
    flag: "🇨🇦",
    title: "Canadian Curriculum",
    sub: "Province-led approach; skills focused",
    philosophy: ["balanced", "inclusive", "inquiry-driven"],
    ages: "5-18",
    programs: ["Elementary", "Middle", "High School"],
    assessment: "Continuous assessment with provincial checks",
    strength: "Strong real-world skills and smooth North American pathways",
  },
  {
    id: "ib",
    flag: "🌐",
    title: "International Baccalaureate (IB)",
    sub: "PYP/MYP/DP/CP — inquiry & global perspective",
    philosophy: ["inquiry-based", "reflective", "globally minded"],
    ages: "3-19",
    programs: ["PYP (3-12)", "MYP (11-16)", "DP (16-19)"],
    assessment: "Mixed internal assessment + external moderation",
    strength: "Develops independent learners respected by top universities",
  },
  {
    id: "early-years",
    flag: "🧠",
    title: "Montessori / Reggio Emilia",
    sub: "Child-led early years approaches",
    philosophy: ["experiential", "developmentally paced"],
    ages: "2-6",
    programs: ["Preschool", "Kindergarten"],
    assessment: "Observation-based (no formal grades)",
    strength: "Builds creativity, confidence and intrinsic motivation",
  },
];
