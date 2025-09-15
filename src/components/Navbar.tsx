import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar () {
    return (
        <div className="w-full">
            <nav className="w-full flex items-center justify-between px-12 py-6 shadow-lg">
                <p className="text-3xl font-bold"><Link href={"/"}>Logo</Link></p>
                <div className="flex items-center gap-3 text-gray-600">
                    <Link href={"/features"} className="hover:text-gray-950">Features</Link>
                    <Link href={"/why-choose-us"} className="hover:text-gray-950">Why Choose Us</Link>
                    <Link href={"/how-it-works"} className="hover:text-gray-950">How it Works</Link>
                    <Link href={"/reviews"} className="hover:text-gray-950">Reviews</Link>
                    <Link href={"/faq"} className="hover:text-gray-950">FAQs</Link>
                </div>
                <Button className="rounded-2xl bg-gray-800 text-white cursor-pointer hover:bg-gray-950 drop-shadow-2xl text-shadow-2xs">CTA Title</Button>
            </nav>
        </div>
    )
}