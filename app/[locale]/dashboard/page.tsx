// app/[locale]/dashboard/page.tsx
import { UserDetails } from "@/components/user-details";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function DashboardPage() {
  await auth.protect();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <header className="flex items-center justify-between">
        <Link className="underline" href="./">
          Back
        </Link>
        <UserButton />
      </header>

      <div className="mt-6">
        <UserDetails />
      </div>
    </main>
  );
}
