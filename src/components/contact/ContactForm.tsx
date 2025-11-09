import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ImSpinner8 } from 'react-icons/im';
import Modal from "../ui/Modal";

export default function ContactForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formStatus, setFormStatus] = useState<string | null>(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [bot, setBot] = useState("");
    const toEmail = "cedric.fouchard@wanadoo.fr";

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
    }

    const sendForm = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        if (bot) return;
        
        // emailjs info
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        const formData = { firstName, lastName, email, message, phone, toEmail };

        setIsLoading(true);

        emailjs.send(serviceId, templateId, formData, publicKey).then(
            () => {
                setFormStatus("success");
                setIsModalOpen(true);
                resetForm();
                console.log('SUCCESS!');
            },
            (error) => {
                setFormStatus("error");
                setIsModalOpen(true);
                console.log('FAILED...', error.text);
            },
        ).finally(() => {
            setIsLoading(false);
        });        
    }

    return (
        <section className="contact-form-container">
            <form 
                onSubmit={sendForm}
                className="contact-form"
            >
                <div className="contact-form__grid">
                    <div className="contact-form__group">
                        <input 
                            type="text" 
                            id="first_name" 
                            name="first_name"
                            placeholder="Prénom"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required 
                        />
                        <input 
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="Nom"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="contact-form__group">
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <input 
                            type="phone" 
                            id="phone"
                            name="phone"
                            placeholder="Téléphone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <input
                        className="honeypot" 
                        type="text" 
                        name="website"
                        id="website" 
                        aria-hidden="true"
                        value={bot}
                        onChange={(e) => setBot(e.target.value)}
                        tabIndex={-1}
                    />
                    <textarea 
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required 
                    />
                    <button 
                        className={`button button--contained ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading ? true : false}
                    >
                        <span className="spinner">
                            <ImSpinner8 />
                        </span>
                        <span className="text">
                            Envoyer
                        </span>
                    </button>
                </div>
            </form>
            <Modal show={isModalOpen} close={() => setIsModalOpen(false)}>
                {
                    formStatus === 'success' ? (
                        <p>
                            Votre message a bien été envoyé&nbsp;!<br />
                            Je vous répondrai dans les plus brefs délai.
                        </p>
                    ) : (
                        <p>
                            Oups&nbsp;! Quelque chose s&apos;est mal passé.<br />
                            Veuillez vérifier vos informations et réessayer.
                        </p>
                    )
                }
            </Modal>
        </section>
    )
}