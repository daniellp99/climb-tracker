import UserButton from "@/features/users/components/user-button";

export default function HomePage() {
  return (
    <section className="h-screen w-screen bg-home-mobile bg-cover bg-top bg-no-repeat sm:bg-home">
      <div className="flex size-full flex-col bg-gradient-to-b from-transparent from-5% to-black">
        <nav className="flex h-14 w-full items-center justify-between p-2">
          <span>LOGO</span>
          <ul className="flex items-center justify-center gap-4">
            <li className="h-10">
              <UserButton />
            </li>
          </ul>
        </nav>
        <main className="flex h-max grow flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-[5rem]">
            Climb Tracker
          </h1>
        </main>
      </div>
    </section>
  );
}
