import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const FaqAccordion = () => {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>What are your opening hours?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We are open Monday to Saturday from 11:00 AM to 10:00 PM, and Sundays from 12:00 PM to 8:00 PM.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer vegetarian or vegan options?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Yes! Our menu includes a variety of vegetarian and vegan dishes. Please ask our staff for recommendations or check the menu for the green leaf icon.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>How can I make a reservation?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        You can make a reservation directly on our website by clicking the "Make a reservation" button, or by calling us at (123) 456-7890.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Do you deliver?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Yes, we offer delivery through our website and popular delivery apps. Delivery hours are the same as our opening hours.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Are pets allowed?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Pets are welcome in our outdoor seating area. Service animals are allowed inside the restaurant.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>Do you have parking?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Yes, we offer free parking for our customers in the lot next to the restaurant.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}