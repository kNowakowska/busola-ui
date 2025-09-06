import { QuizAttempt } from "@/lib/types/courses";

export default function PreviousResults({
  results,
}: {
  results: QuizAttempt[];
}) {
  return (
    <>
      <h4 className="md:text-base text-sm font-bold">Poprzednie 5 wyników</h4>
      {results
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((result) => (
          <div key={result.createdAt} className="md:text-base text-sm">
            {new Date(result.createdAt).toLocaleString()} -{" "}
            <span className="font-bold text-[var(--dark-beige)]">
              {result.scoreInPercent}%
            </span>
          </div>
        ))}
    </>
  );
}
