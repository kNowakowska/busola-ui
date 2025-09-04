import { QuizAttempt } from "@/lib/types/courses";

export default function PreviousResults({
  results,
}: {
  results: QuizAttempt[];
}) {
  return (
    <>
      <h4 className="font-bold">Poprzednie 5 wyników</h4>
      {results
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((result) => (
          <div key={result.createdAt}>
            {new Date(result.createdAt).toLocaleString()} -{" "}
            <span className="font-bold text-[var(--dark-beige)]">
              {result.scoreInPercent}%
            </span>
          </div>
        ))}
    </>
  );
}
