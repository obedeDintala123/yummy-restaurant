import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen md:min-h-[80vh] bg-white">
            <LoginForm />
        </div>
    )
}