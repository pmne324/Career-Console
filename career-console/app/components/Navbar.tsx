import Link from "next/link";

export default function Navbar(){
    return(
 <nav className="w-full bg-custom-grey text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/career">Career</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    );
}