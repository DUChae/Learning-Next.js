import Link from "next/link";
import "./globals.css";
import Control from "./Control";
export const metadata = {
  title: "WEB tutorial",
  description: "Learning Next.js",
};
export default async function RootLayout({ children }) {
  const resp = await fetch("http://localhost:9999/topics/", {
    cache: "no-cache",
  });
  const topics = await resp.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
