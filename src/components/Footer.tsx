'use client';
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer () {
    const date = new Date();
    return (
        <div className="w-full bottom-0 mb-6">
            <div className="w-[80%] mx-auto">
                <div className="bg-gray-100 rounded-lg flex justify-between items-center px-8 py-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">CTA Heading</h1>
                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Totam odit similique sunt perferendis quaerat id ea, tenetur <br />corporis fuga odio.</p>
                        <div className="flex gap-3">
                            <Button className="bg-gray-800 hover:bg-hover-950 text-white rounded-2xl cursor-pointer font-semibold hover:shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640"><path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z"/></svg>
                                Download Now</Button>
                            <Button className="bg-gray-800 hover:bg-hover-950 text-white rounded-2xl cursor-pointer font-semibold hover:shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640"><path d="M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z"/></svg>
                                Download Now</Button>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Image src={'/illustration-1.avif'} alt="illustration" width={250} height={40} className="rounded-lg hover:shadow-lg" />
                        <Image src={'/illustration-2.avif'} alt="illustration" width={250} height={40} className="rounded-lg hover:shadow-lg" />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-muted-foreground">&copy; {date.getFullYear()} Company Name. All Rights Reserved</p>
                    <div className="flex items-center gap-3 text-muted-foreground">
                    <Link href={"/https://linkedin.com"}className="hover:text-gray-950">LinkedIn</Link>
                    <Link href={"/https://instagram.com"} className="hover:text-gray-950">Instagram</Link>
                    <Link href={"/https://facebook.com"} className="hover:text-gray-950">Facebook</Link>
                    <Link href={"https://x.com"} className="hover:text-gray-950">X(Twitter)</Link>
                </div>
                </div>
            </div>
        </div>
    )
}