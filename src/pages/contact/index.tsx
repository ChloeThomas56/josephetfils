import Head from "next/head";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contact/ContactForm";
import { MdPlace, MdOutlineMailOutline } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";

const Map = dynamic(() => import('@/components/contact/Map'), {
    ssr: false,
});

export default function Contact() {
    return (
        <>
            <Head>
                <title>Joseph & Fils | Contact</title>
                <meta property="og:title" content="Joseph & Fils | Contact" />
                <meta property="og:url" content="https://www.josephetfils.com/contact" />
            </Head>
            <div className="contact">
                <div className="container">
                    <h1>Contact</h1>
                    <p>
                        Un projet, une question&nbsp;? N&apos;hésitez pas à me contacter via le formulaire ci-dessous.
                    </p>
                </div>
                <section className="contact__info">
                    <div className="contact__info-item">
                        <span className="icon icon--dark">
                            <MdPlace />
                        </span>
                        <div>
                            <span className="contact__info-item-title">
                                Adresse
                            </span>
                            <span>Le Congo - 56230 Questembert</span>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <span className="icon icon--dark">
                            <PiPhoneCall />
                        </span>
                        <div>
                            <span className="contact__info-item-title">
                                Téléphone
                            </span>
                            <a href="tel:0684668091" className="hover-fade">
                                06 84 66 80 91
                            </a>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <span className="icon icon--dark">
                            <MdOutlineMailOutline />
                        </span>
                        <div>
                            <span className="contact__info-item-title">
                                Email
                            </span>
                            <a href="mailto:contact@josephetfils.com" className="hover-fade">
                                contact@josephetfils.com
                            </a>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <span className="icon icon--dark">
                            <LuClock3 />
                        </span>
                        <div>
                            <span className="contact__info-item-title">
                                Horaires
                            </span>
                            <span>Lun - Ven&nbsp;: 8h-18h</span>
                        </div>
                    </div>
                </section>
                <div className="contact__main">
                    <section className="contact__main-map">
                        <Map />
                    </section>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}