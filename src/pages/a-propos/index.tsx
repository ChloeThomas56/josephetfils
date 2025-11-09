import Head from "next/head"
import CustomImage from "@/components/ui/CustomImage"

export default function About() {
    return (
        <>
            <Head>
                <title>Joseph & Fils | À propos</title>
                <meta property="og:title" content="Joseph & Fils | À propos" />
                <meta property="og:url" content="https://www.josephetfils.com/a-propos" />
            </Head>
            <div className="about">
                <div className="container">
                    <h1>À propos</h1>
                    <h2>
                        “Là où la matière devient forme”
                    </h2>
                </div>
                <section className="about__info">
                    <article>
                        <h3>
                            Une passion pour le bois
                        </h3>
                        <p>
                            Depuis mon enfance, je suis fasciné par le travail du bois. Dans l&apos;atelier de mon grand-père, maître artisan, j&apos;ai découvert les premiers gestes du métier. Le parfum des essences, le crissement du ciseau, la matière qui se transforme&nbsp;: autant de sensations captivantes. Un lieu où chaque pièce de bois racontait une histoire, où chaque copeau tombé au sol marquait un pas de plus vers la maîtrise de cet art ancestral.
                        </p>
                    </article>
                    <article>
                        <h3>
                            Une évolution naturelle
                        </h3>
                        <p>
                            Au fil des ans, l&apos;envie de travailler le bois au quotidien s&apos;est imposée comme une évidence. Après plusieurs expériences en atelier et sur chantier, j&apos;ai décidé de me lancer à mon compte pour exercer mon métier avec la liberté et l&apos;exigence qui me ressemblent. Aujourd&apos;hui, je mets mon savoir-faire au service de celles et ceux qui souhaitent des réalisations durables, pensées pour leurs usages et leur intérieur.
                        </p>
                    </article>
                    <article>
                        <h3>
                            Authenticité et sur-mesure
                        </h3>
                        <p>
                            Mon approche est guidée par l&apos;écoute et le respect de la matière. Chaque bois a son grain, sa teinte, son vécu. Mon rôle est de révéler ce qu&apos;il porte en lui. Que ce soit pour un meuble ou un aménagement, je privilégie des créations solides, soignées et adaptées à chaque espace. Dans un monde où le standard domine, je souhaite offrir des pièces uniques qui accompagnent le quotidien et traversent le temps.
                        </p>
                    </article>
                </section>
                <section className="about__portrait">
                    <div className="img-container">
                        <CustomImage
                            src="/images/profil.jpg"
                            width={1000}
                            height={1000}
                            alt="Cédric Fouchard"
                            sizes="(max-width: 1024px) 95vw, 50vw"
                        />
                    </div>
                    <div className="about__portrait-body">
                        <article>
                            <h3>
                                Au cœur de l&apos;atelier
                            </h3>
                            <p>
                                Dans mon atelier, chaque projet débute par une rencontre&nbsp;: un échange, une idée, un besoin. Mon métier est d&apos;écouter, de comprendre, puis de traduire tout cela dans le bois. Travailler sur-mesure, c&apos;est imaginer des pièces qui s&apos;intègrent naturellement à votre espace et à votre façon de vivre.
                            </p>
                            <p>
                                J&apos;accorde une attention particulière aux détails, aux assemblages solides, aux finitions soignées. Le bois est une matière vivante, et je prends le temps de la mettre en valeur, sans la brusquer. Mon engagement est simple&nbsp;: créer des ouvrages qui durent, qui vous accompagnent au quotidien, et qui racontent un peu de vous.
                            </p>
                        </article>
                        <span>Cédric - Artisan menuisier</span>
                    </div>
                </section>
            </div>
        </>
    )
}