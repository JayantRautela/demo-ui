import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Circle } from "lucide-react";

export default function ReviewSection () {
    return (
        <div className="w-full p-16">
            <div className="text-center w-full">
                <h1 className="text-3xl font-bold">Review Section</h1>
                <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing <br />elit. Asperiores, suscipit!</p>
            </div>
            <div className="flex justify-center items-center mt-4">
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card className="bg-gray-100">
                                <CardContent className="flex flex-col gap-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, exercitationem.
                                    <Separator />
                                    <div className="flex gap-2 items-center">
                                        <Circle />
                                        <div>
                                            <p className="text-xl font-semibold">Name</p>
                                            <p className="text-muted-foreground">Country</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="cursor-pointer"/>
                    <CarouselNext className="cursor-pointer"/>
                </Carousel>
            </div>
        </div>
    )
}