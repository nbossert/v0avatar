import { useRouter } from "next/router";
import { useState } from "react";

export default function StartButton({ selectedPars }: { selectedPars: number[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function startGame() {
    setLoading(true);
    try {
      const res = await fetch("/api/games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pars: selectedPars })
      });
      if (!res.ok) throw new Error("API error");
      const { id } = await res.json();
      router.push(`/game/${id}`);
    } catch (err) {
      console.error(err);
      alert("Could not create game. Try again.");
      setLoading(false);
    }
  }

  return (
    <button onClick={startGame} disabled={loading}>
      {loading ? "Creating game…" : "Start Game"}
    </button>
  );
}
