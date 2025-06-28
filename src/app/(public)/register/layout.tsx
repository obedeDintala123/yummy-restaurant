import { Toaster } from "@/components/ui/sonner";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function RegisterLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head />
            <body>
                <main>
                    <header className="flex justify-between items-center p-4">

                        <div className="flex items-center gap-1">
                            <ArrowLeft size={20} />
                            <a href="/">Voltar</a>
                        </div>

                        <Image
                            src="/yummy-logo.svg"
                            alt="Yummy Logo"
                            width={120}
                            height={120}
                            className="mb-6 hidden md:block"
                        />
                    </header>
                    {children}
                </main>
                <Toaster />
            </body>
        </html>
    )
}