import React from "react";
import { Link } from "next/link";

const Page = () => (
  <div>
    <h1>Note Index Path</h1>
    <Link href="/notes/[id]" as={`/notes/1`}>
      Note 1
    </Link>
  </div>
);
