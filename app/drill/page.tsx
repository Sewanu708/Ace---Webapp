import { Button } from "@/components/ui/button";

export default function DrillPage() {
  const dummyQuestion = "What is the square root of 144?";
  const dummyOptions = ["10", "12", "14", "16"];
  const currentQuestion = 5;
  const totalQuestions = 10;
  const timeLeft = "00:45";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="text-xl font-semibold">Question {currentQuestion}/{totalQuestions}</div>
        <div className="text-xl font-semibold">{timeLeft}</div>
      </header>

      {/* Main Content - Question */}
      <main className="flex flex-grow items-center justify-center p-6 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {dummyQuestion}
        </h1>
      </main>

      {/* Options Grid */}
      <section className="grid grid-cols-2 gap-4 p-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {dummyOptions.map((option, index) => (
          <Button
            key={index}
            className="h-24 text-2xl font-semibold sm:h-32 md:h-40 lg:h-48" // Large clickable touch targets
            variant="outline"
          >
            {option}
          </Button>
        ))}
      </section>
    </div>
  );
}
