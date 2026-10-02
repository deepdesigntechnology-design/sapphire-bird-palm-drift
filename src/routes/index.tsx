import { createFileRoute } from "@tanstack/react-router";
import { Brochure } from "@/components/brochure/brochure";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Brochure />;
}
