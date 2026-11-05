import Analyzer from "@/components/analyzer/Analyzer";
import { pageMeta } from "@/lib/seo";


export const metadata = pageMeta({
  title: "Free Business Growth Analyzer for Online Stores",
  description:
    "Answer 16 quick questions and get a personalized Business Growth Report with your score, top priorities and a 90-day action plan.",
  path: "/analyzer",
});

export default function AnalyzerPage() {
  return <Analyzer />;
}