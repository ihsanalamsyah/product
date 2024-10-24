'use client'
import Link from "next/link";

export default function LoginFirst() {
  return (
    <div>
      <p>Please Login First</p>
      <Link href="/"><button>Back to Login Page</button></Link>
    </div>
  );
}
  