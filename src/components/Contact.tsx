import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const form = useRef<HTMLFormElement>(null);

    const validate = () => {
        if (!name.trim() || !email.trim() || !message.trim()) {
            setError("Lütfen tüm alanları doldurun.");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Lütfen geçerli bir e-posta adresi girin.");
            return false;
        }
        setError("");
        return true;
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        if (form.current) {
            emailjs
                .sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    form.current!,
                    {
                        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                    }
                )
                .then(
                    () => {
                        toast.success("Mesaj gönderildi!");
                        setMessage("");
                    },
                    () => { 
                        toast.error("Bir hata oluştu, tekrar deneyin.");
                    }
                );
        }
    };

    return (
        <section className="py-12">
            <div className="mx-auto max-w-2xl bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

                <form ref={form} onSubmit={onSubmit} className="space-y-4">
                    {error && (
                        <div className="text-sm text-red-400">{error}</div>
                    )}

                    <div>
                        <label htmlFor="name" className="block text-sm mb-1">Name</label>
                        <input
                            autoComplete="name"
                            id="name"
                            name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-black/20 border-white border"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm mb-1">Email</label>
                        <input
                            autoComplete="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-black/20 border-white border"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm mb-1">Message</label>
                        <textarea
                            autoComplete="off"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={6}
                            className="w-full px-3 py-2 rounded bg-black/20 border-white border"
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 rounded text-white hover:bg-indigo-700 cursor-pointer"
                        >
                            Send Email
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setName("");
                                setEmail("");
                                setMessage("");
                                setError("");
                               
                            }}
                            className="px-4 py-2 border rounded cursor-pointer"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
