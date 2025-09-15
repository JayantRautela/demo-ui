import { LucideMessageCircleQuestionMark } from "lucide-react"


export default function ChooseUsSection () {
    const options = [
        {
            icon: LucideMessageCircleQuestionMark,
            title: "Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            icon: LucideMessageCircleQuestionMark,
            title: "Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            icon: LucideMessageCircleQuestionMark,
            title: "Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            icon: LucideMessageCircleQuestionMark,
            title: "Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
    ]
    return (
        <div className="p-16 w-full">
            <div className="w-full text-center">
                <h1 className="text-3xl font-bold">Why Choose Us Section</h1>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, rem</p>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <div className="flex gap-5 mt-10 text-left">
                    {
                        options.map((option, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <LucideMessageCircleQuestionMark />
                                <h1 className="text-xl font-semibold">{option.title}</h1>
                                <p className="text-muted-foreground">{option.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}