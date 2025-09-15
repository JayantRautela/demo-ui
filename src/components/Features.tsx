import Image from "next/image";


export default function Features () {
    return (
        <div className="w-full px-16 py-2 mb-10">
            <section className="w-full text-center">
                <h1 className="text-4xl font-semibold">Features Section</h1>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet.</p>
            </section>
            <div className="flex flex-col gap-2 w-full mt-8">
                <section className="flex justify-between gap-120 p-8 w-full rounded-lg bg-gray-100">
                    <div>
                        <h1 className="text-gray-700 font-semibold text-2xl">Highlight Feature 1</h1>
                        <p className="text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque impedit consectetur iure explicabo, autem sequi libero, illum voluptatum, ab obcaecati voluptatem? Facilis veritatis debitis consectetur commodi optio sunt odit quam.</p>
                    </div>
                    <Image src={'/illustration-2.avif'} height={10} width={40} alt="feature image" className="h-[20rem] w-[50rem] text-right rounded-xl"/>
                </section>
                <div className="flex gap-2">
                    <section className="flex justify-between gap-12 p-8 w-full rounded-lg bg-gray-100">
                        <div>
                            <h1 className="text-gray-700 font-semibold text-2xl">Highlight Feature 1</h1>
                            <p className="text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque impedit consectetur iure explicabo, autem sequi libero, illum voluptatum, ab obcaecati voluptatem? Facilis veritatis debitis consectetur commodi optio sunt odit quam.</p>
                        </div>
                        <Image src={'/illustration-2.avif'} height={10} width={40} alt="feature image" className="h-[20rem] w-[20rem] text-right rounded-xl"/>
                    </section>
                    <section className="flex justify-between gap-12 p-8 w-full rounded-lg bg-gray-100">
                        <div>
                            <h1 className="text-gray-700 font-semibold text-2xl">Highlight Feature 1</h1>
                            <p className="text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque impedit consectetur iure explicabo, autem sequi libero, illum voluptatum, ab obcaecati voluptatem? Facilis veritatis debitis consectetur commodi optio sunt odit quam.</p>
                        </div>
                        <Image src={'/illustration-2.avif'} height={10} width={40} alt="feature image" className="h-[20rem] w-[20rem] text-right rounded-xl"/>
                    </section>
                </div>
                <section></section>
            </div>
        </div>
    )
}