import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ResultsPage() {
  const dummyScore = "80%";
  const dummyQuestions = [
    {
      id: 1,
      question: "What is the capital of France?",
      correctAnswer: "Paris",
      userAnswer: "Paris",
      isCorrect: true,
    },
    {
      id: 2,
      question: "What is 7 * 8?",
      correctAnswer: "56",
      userAnswer: "54",
      isCorrect: false,
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      correctAnswer: "Mars",
      userAnswer: "Mars",
      isCorrect: true,
    },
    {
      id: 4,
      question: "What is the largest ocean on Earth?",
      correctAnswer: "Pacific Ocean",
      userAnswer: "Atlantic Ocean",
      isCorrect: false,
    },
    {
      id: 5,
      question: "Who wrote 'Romeo and Juliet'?",
      correctAnswer: "William Shakespeare",
      userAnswer: "William Shakespeare",
      isCorrect: true,
    },
    {
      id: 6,
      question: "What is the chemical symbol for water?",
      correctAnswer: "H2O",
      userAnswer: "H2O",
      isCorrect: true,
    },
    {
      id: 7,
      question: "What is the smallest prime number?",
      correctAnswer: "2",
      userAnswer: "1",
      isCorrect: false,
    },
    {
      id: 8,
      question: "How many continents are there?",
      correctAnswer: "7",
      userAnswer: "7",
      isCorrect: true,
    },
    {
      id: 9,
      question: "What is the highest mountain in the world?",
      correctAnswer: "Mount Everest",
      userAnswer: "K2",
      isCorrect: false,
    },
    {
      id: 10,
      question: "What is the currency of Japan?",
      correctAnswer: "Yen",
      userAnswer: "Yen",
      isCorrect: true,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
      <main className="w-full max-w-3xl space-y-8">
        {/* Score Header */}
        <section className="text-center">
          <h1 className="text-7xl font-extrabold tracking-tight text-primary sm:text-8xl">
            {dummyScore}
          </h1>
          <p className="mt-4 text-2xl font-semibold">Your Score</p>
        </section>

        {/* Questions List */}
        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-3xl font-bold">Question Breakdown</h2>
          <ScrollArea className="h-[400px] w-full rounded-md border p-4">
            <div className="space-y-4">
              {dummyQuestions.map((q) => (
                <div
                  key={q.id}
                  className={`flex flex-col rounded-md p-3 transition-colors ${
                    q.isCorrect ? "bg-green-50/20" : "bg-red-50/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium">
                      Q{q.id}: {q.question}
                    </p>
                    {!q.isCorrect && (
                      <Button variant="outline" size="sm" className="ml-4 flex-shrink-0">
                        💡 Explain
                      </Button>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your Answer:{" "}
                    <span className={`${q.isCorrect ? "text-green-600" : "text-red-600"}`}>
                      {q.userAnswer}
                    </span>
                  </p>
                  {!q.isCorrect && (
                    <p className="text-sm text-muted-foreground">
                      Correct Answer: <span className="text-green-600">{q.correctAnswer}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>
      </main>
    </div>
  );
}
