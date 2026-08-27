import Image from "next/image";
import type { Metadata } from "next";
import { getAllTeamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Le persone che scrivono e realizzano Telesis Magazine.",
};

export default function TeamPage() {
  const members = getAllTeamMembers();

  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Il team
        </h1>
        <p className="mt-3 text-ink/60">
          Telesis Magazine è scritto, fotografato e curato da un gruppo di
          studenti. Ecco chi siamo.
        </p>
      </header>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <div key={member.slug} className="flex flex-col items-start">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-ink/5">
              {member.photo && (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              )}
            </div>

            <h2 className="mt-4 font-display text-lg font-semibold text-ink">
              {member.name}
            </h2>
            <p className="text-sm font-medium text-accent">{member.role}</p>
            <p className="mt-2 text-sm text-ink/60">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
