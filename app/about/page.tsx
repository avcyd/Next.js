// app/about/page.tsx
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="p-1 max-w-xl">
        <div>
          <h1>About Page</h1>
          <p>
            Next.js is a React framework for building full-stack web
            applications. You use React Components to build user interfaces, and
            Next.js for additional features and optimizations. It also
            automatically configures lower-level tools like bundlers and
            compilers. You can instead focus on building your product and
            shipping quickly. Whether you're an individual developer or part of
            a larger team, Next.js can help you build interactive, dynamic, and
            fast React applications.
          </p>
          <br></br>
          <p>
            Go back to <Link href="/">Home</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
