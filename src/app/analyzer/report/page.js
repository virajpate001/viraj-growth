import Container from "@/components/Container";
import Button from "@/components/Button";
import Report from "@/components/report/Report";
import { decodeAnswers } from "@/lib/share";
import { computeReport } from "@/lib/scoring";
import TrackOnMount from "@/components/TrackOnMount";

export const metadata = {
  title: "Your Business Growth Report",
  robots: { index: false, follow: false }, // personal reports shouldn't appear in Google
};

export default async function ReportPage({ searchParams }) {
  const params = await searchParams;
  const code = typeof params?.r === "string" ? params.r : "";
  const answers = decodeAnswers(code);

  if (!answers) {
    return (
      <Container className="max-w-xl py-24 text-center">
        <h1 className="text-3xl font-bold">We couldn’t find this report</h1>
        <p className="mt-3 text-muted">
          The link may be incomplete. Take the free 3-minute analyzer to get
          your own report.
        </p>
        <Button href="/analyzer" className="mt-8">
          Start the Analyzer
        </Button>
      </Container>
    );
  }

  const result = computeReport(answers);
   return (
    <>
      <TrackOnMount event="report_view" props={{ score: result.overall }} />
      <Report result={result} code={code} unlockedByLink={params?.u === "1"} />
    </>
  );
}