// app/[locale]/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-semibold">clerk-vercel-ready</h1>
      <p className="mt-2 text-sm opacity-80">
        Minimal starter: Clerk + Next.js App Router + Vercel + /[locale]
      </p>

      <div className="mt-6 flex gap-3">
        <Link className="underline" href="./sign-in">
          Sign in
        </Link>
        <Link className="underline" href="./dashboard">
          Dashboard (protected)
        </Link>
      </div>
    </main>
  );
}
