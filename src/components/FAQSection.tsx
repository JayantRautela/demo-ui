import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection () {
    return (
        <div className="w-full p-16">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold">FAQ Section</h1>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Cumque deserunt optio ipsa voluptate magni aut!</p>
                </div>
                <div className="w-[50%]">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full flex flex-col gap-2"
                        defaultValue="item-1"
                        >
                        <AccordionItem value="item-1" className="bg-gray-100 p-4 rounded-lg">
                            <AccordionTrigger>Question 1</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam temporibus consectetur esse aspernatur atque veniam obcaecati eveniet molestiae eos.
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, rem.
                            </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-gray-100 p-4 rounded-lg">
                            <AccordionTrigger>Question 2</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, officia mollitia maiores numquam, nostrum laborum dignissimos nihil tempore deleniti accusantium debitis fugiat incidunt nisi cum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ex.
                            </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-gray-100 p-4 rounded-lg">
                            <AccordionTrigger>Question 3</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugiat sed repudiandae quidem dolorem minima, optio dolores facere architecto, expedita ut, repellendus nisi modi assumenda?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere iste nemo ex.
                            </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-gray-100 p-4 rounded-lg">
                            <AccordionTrigger>Question 4</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugiat sed repudiandae quidem dolorem minima, optio dolores facere architecto, expedita ut, repellendus nisi modi assumenda?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere iste nemo ex.
                            </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}