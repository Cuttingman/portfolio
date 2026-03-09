import { WorkSection } from "@/components/sections/Work";
import { ExpertiseSection } from "@/components/sections/Expertise";
import { ArchiveSection } from "@/components/sections/Archive";
import { AboutSection } from "@/components/sections/About";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <WorkSection />
      <ExpertiseSection />
      <ArchiveSection />
      <AboutSection />
    </main>
  );
}
