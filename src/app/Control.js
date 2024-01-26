"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>update</Link>
          </li>
          <li>
            <button
              onClick={async () => {
                const resp = await fetch(`http://localhost:9999/topics/${id}`, {
                  method: "DELETE",
                });
                await resp.json();
                router.push("/");
                router.refresh();
              }}
            >
              delete
            </button>
          </li>
        </>
      ) : null}
    </ul>
  );
  <font face="NanumGothic, sans-serif">
    <span style="font-size: 10.89px; white-space: normal;"></span>
  </font>;
}
