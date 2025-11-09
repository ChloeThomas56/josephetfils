import Head from "next/head"
import Link from "next/link"

export default function Legal() {
    return (
        <>
            <Head>
                <title>Joseph & Fils | Mentions légales</title>
                <meta property="og:title" content="Joseph & Fils | Mentions légales" />
                <meta property="og:url" content="https://www.josephetfils.com/mentions-legales" />
            </Head>
            <div className="legal">
                <div className="container">
                    <h1>Mentions légales</h1>
                </div>
                <section className="legal__info">
                    <article>
                        <h2>
                            Éditeur
                        </h2>
                        <p>
                            Le site <Link href="/" className="hover-fade">josephetfils.com</Link> est édité par Cédric Fouchard, entrepreneur individuel, enregistré sous le numéro SIREN 528744543 et domicilié à l&apos;adresse suivante&nbsp;: 9 Sainte-Suzanne, 56230 Questembert.
                            <br />
                            Contact&nbsp;: <a href="mailto:contact@josephetfils.com" className="hover-fade">contact@josephetfils.com</a>
                        </p>
                    </article>
                    <article>
                        <h2>
                            Hébergeur
                        </h2>
                        <p>
                            Le site <Link href="/" className="hover-fade">josephetfils.com</Link> est hébergé par Vercel Inc.
                            <br />
                            Siège social&nbsp;: 340 S Lemon Ave #4120, Walnut, CA 91789, USA
                            <br />
                            Contact&nbsp;: <a href="tel:+19513836898" className="hover-fade">+1 951-383-6898</a>
                        </p>
                    </article>
                    <article>
                        <h2>
                            Propriété intellectuelle
                        </h2>
                        <p>
                            L&apos;ensemble des contenus de ce site est la propriété exclusive de Cédric Fouchard, sauf indication contraire. Toute reproduction ou représentation totale ou partielle de ce site, sans autorisation expresse, est interdite et constituerait une contrefaçon.
                        </p>
                    </article>
                    <article>
                        <h2>
                            Données personnelles
                        </h2>
                        <p>
                            Ce site ne collecte pas de données personnelles. Les informations fournies par les utilisateurs via le formulaire de contact sont uniquement utilisées pour répondre aux demandes et ne sont pas stockées ni partagées.
                        </p>
                    </article>
                    <article>
                        <h2>
                            Responsabilité
                        </h2>
                        <p>
                            Le site peut contenir des liens vers des sites externes. Nous déclinons toute responsabilité quant au contenu de ces sites et à toute éventuelle conséquence découlant de leur utilisation.
                        </p>
                    </article>
                    <article>
                        <h2>
                            Modification
                        </h2>
                        <p>
                            Nous nous réservons le droit de modifier les présentes mentions légales à tout moment. Il est recommandé de les consulter régulièrement pour prendre connaissance de toute mise à jour.
                        </p>
                    </article>
                </section>
            </div>
        </>
    )
}