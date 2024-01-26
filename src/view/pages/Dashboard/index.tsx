import { Logo } from "@/view/components/Logo";

export function Dashboard() {
  return (
    <div className="h-full w-full p-8 pt-6 flex flex-col">
      <header className="h-12">
        <Logo />
      </header>

      <main>
        Content
      </main>
    </div>
  );
}
