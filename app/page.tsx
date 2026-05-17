import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div>
          <h1>Welcome to My Next.js App!</h1>
          <p>This is the homepage customized by Juliana Jimeno.</p>
          <br></br>
          <p>
            Go to <Link href="/about">About</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
