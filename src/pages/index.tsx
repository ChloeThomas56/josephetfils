import Head from "next/head";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import projects from "@/lib/projects";
import Hero from "@/components/home/Hero";
import CustomImage from "@/components/ui/CustomImage";
import CustomLink from "@/components/ui/CustomLink";
import ProjectCard from "@/components/projects/ProjectCard";
import Testimonies from "@/components/home/Testimonies";
import { RiSofaLine, RiGraduationCapLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { GiWoodenFence, GiWoodBeam } from "react-icons/gi";
import { PiHandshake } from "react-icons/pi";
import { MdOutlineDraw } from "react-icons/md";
import { LuTruck } from "react-icons/lu";

const displayedProjects = projects.slice(0, 3);

export default function Home() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".home__about-img",
            { scale: 1 },
            {
                scale: 1.2,
                ease: "none",
                scrollTrigger: {
                    trigger: ".home__about-img",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <>
            <Head>
                <title>Joseph & Fils</title>
                <meta property="og:title" content="Joseph & Fils" />
                <meta property="og:url" content="https://www.josephetfils.com" />
            </Head>
            <div className="home">
                <Hero />
                <section className="home__intro container">
                    <p className="desktop-only">
                        Menuisier à Questembert, dans le Morbihan, j&apos;imagine et fabrique des meubles sur<br /> mesure et réalise des aménagements intérieurs et extérieurs, avec<br /> le souci du détail et la passion du travail artisanal.
                    </p>
                    <p className="mobile-only">
                        Menuisier à Questembert, dans le Morbihan, j&apos;imagine et fabrique des meubles sur mesure et réalise des aménagements intérieurs et extérieurs, avec le souci du détail et la passion du travail artisanal.
                    </p>
                </section>
                <section className="home__works">
                    <div className="container">
                        <h2>
                            Réalisations
                        </h2>
                    </div>
                    <div className="home__works-list no-scrollbar">
                        {displayedProjects.map((project) => (
                            <div
                                key={project.id}
                                className="home__works-item"
                            >
                                <ProjectCard 
                                    project={project} 
                                    imgSizes="(max-width: 768px) 85vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </section>
                <section className="home__services">
                    <div className="container">
                        <h2>
                            Services
                        </h2>
                    </div>
                    <div className="home__services-list">
                        <article>
                            <span className="icon icon--light">
                                <RiSofaLine />
                            </span>
                            <h3>
                                Mobilier sur mesure
                            </h3>
                            <p>
                                Je crée du mobilier adapté à votre espace et à vos besoins&nbsp;: meubles TV, bibliothèques, tables, étagères, etc. Chaque pièce est fabriquée avec soin pour être à la fois fonctionnelle et esthétique. Je propose également des objets tournés en bois, comme des bols, saladiers ou pièces décoratives, pour apporter une touche unique à votre intérieur.
                            </p>
                        </article>
                        <article>
                            <span className="icon icon--light">
                                <AiOutlineHome />
                            </span>
                            <h3>
                                Aménagement intérieur
                            </h3>
                            <p>
                                Je réalise des aménagements sur mesure afin d&apos;optimiser votre intérieur. Qu&apos;il s&apos;agisse de placards, d&apos;un dressing, d&apos;une bibliothèque intégrée ou d&apos;une cuisine, chaque projet est pensé pour s&apos;adapter à votre espace. Mon objectif : créer un intérieur qui vous ressemble et dans lequel vous vous sentez bien.
                            </p>
                        </article>
                        <article>
                            <span className="icon icon--light">
                                <GiWoodenFence />
                            </span>
                            <h3>
                                Aménagement extérieur
                            </h3>
                            <p>
                                Je conçois des aménagements qui s&apos;intègrent harmonieusement à votre extérieur. Terrasses, bardages, abris ou claustras, chaque réalisation est faite sur mesure pour répondre à vos envies. J&apos;apporte une attention particulière au choix des matériaux et aux finitions afin que votre jardin ou terrasse devienne un lieu accueillant et durable.
                            </p>
                        </article>
                        <article>
                            <span className="icon icon--light">
                                <RiGraduationCapLine />
                            </span>
                            <h3>
                                Formations
                            </h3>
                            <p>
                                Je propose des formations à celles et ceux qui souhaitent découvrir la menuiserie. À travers des ateliers pratiques, je vous accompagne dans la fabrication d&apos;objets simples en vous transmettant les gestes essentiels du métier. L&apos;occasion pour moi de partager ma passion du bois dans une ambiance conviviale et accessible à tous.
                            </p>
                        </article>
                    </div>
                </section>
                <section className="home__about">
                    <div className="img-container">
                        <CustomImage
                            src="/images/skills.jpg"
                            width={1250}
                            height={750}
                            alt="À propos"
                            sizes="(max-width: 1024px) 95vw, 66vw"
                            className="home__about-img"
                        />
                        <h2>Savoir-faire</h2>
                    </div>
                    <div className="home__about-content">
                        <p>
                            Menuisier artisan depuis plus de 25 ans, j&apos;ai appris à connaître le bois, à le façonner et à le respecter. Mon savoir-faire s&apos;est construit au fil du temps, entre passion, exigence et goût du travail bien fait.
                        </p>
                        <p>
                            Chaque projet est une rencontre&nbsp;: je prends le temps d&apos;échanger avec vous pour comprendre vos besoins et définir chaque détail. Votre satisfaction est au cœur de mon travail.
                        </p>
                        <div className="home__about-content-footer">
                            <CustomLink href="/a-propos" text="(EN SAVOIR PLUS)" />
                        </div>
                    </div>
                </section>
                <section className="home__steps">
                    <div className="container">
                        <h2>
                            Votre projet, pas à pas
                        </h2>
                    </div>
                    <div className="home__steps-list">
                        <article>
                            <span className="icon icon--dark">
                                <PiHandshake />
                            </span>
                            <h3>
                                Rendez-vous
                            </h3>
                            <p>

                                Chaque projet débute par un échange visant à comprendre vos besoins, vos envies et les particularités de votre espace, afin de définir ensemble les premières pistes de création.
                            </p>
                        </article>
                        <article>
                            <span className="icon icon--dark">
                                <MdOutlineDraw />
                            </span>
                            <h3>
                                Conception
                            </h3>
                            <p>
                                À partir de nos échanges, je réalise une proposition sur mesure, accompagnée d’un devis détaillé, de plans et de visuels pour vous permettre de vous projeter.
                            </p>
                        </article>
                        <article>
                            <span className="icon icon--dark">
                                <GiWoodBeam />
                            </span>
                            <h3>
                                Fabrication
                            </h3>
                            <p>
                                Une fois le projet validé, je démarre la fabrication dans mon atelier, en apportant la plus grande attention aux matériaux, aux assemblages et aux finitions.
                            </p>
                        </article>
                        <article>
                            <span className="icon icon--dark">
                                <LuTruck />
                            </span>
                            <h3>
                                Livraison
                            </h3>
                            <p>
                                Qu&apos;il s&apos;agisse d&apos;un meuble sur mesure ou d&apos;un agencement complet, j&apos;assure la livraison et le montage, en garantissant un résultat fidèle à vos attentes.
                            </p>
                        </article>
                    </div>
                </section>
                <section className="home__testimonies">
                    <div className="container">
                        <h2>
                            Témoignages
                        </h2>
                    </div>
                    <Testimonies />
                </section>
            </div>
        </>
    );
}
