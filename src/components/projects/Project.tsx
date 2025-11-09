import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useSmoothScrolling } from "@/hooks/useSmoothScrolling";
import { motion } from "motion/react";
import Link from "next/link";
import { ProjectType } from "@/types/types";
import CustomImage from "../ui/CustomImage";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function ProjectDetails({ project, previousProject, nextProject }: { 
    project: ProjectType,
    previousProject: ProjectType,
    nextProject: ProjectType
}) {
    const router = useRouter();
    const lenis = useSmoothScrolling();
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        let isFirstCallback = true;
        
        const observer = new IntersectionObserver(
            (entries) => {
                if (isFirstCallback) {
                    isFirstCallback = false;
                    const intersectingEntries = entries.filter(e => e.isIntersecting);
                    if (intersectingEntries.length === 1) {
                        const index = imageRefs.current.findIndex(
                            (ref) => ref === intersectingEntries[0].target
                        );
                        if (index !== -1)
                            setActiveImgIndex(index);
                    }
                    return;
                }

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = imageRefs.current.findIndex(
                            (ref) => ref === entry.target
                        );
                        if (index !== -1)
                            setActiveImgIndex(index);
                    }
                });
            },
            {
                root: null,
                threshold: 0.8,
                rootMargin: "-80px 0px",
            }
        );

        // Observer toutes les images
        imageRefs.current.forEach((ref) => {
            if (ref)
                observer.observe(ref);
        });

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, [project.images]);

    const handleShowImg = (index: number) => {
        setActiveImgIndex(index);

        const target = imageRefs.current[index];
        if (target) {
            lenis?.scrollTo(target, {
                offset: -80,
            });
        }
    };

    return (
        <div className="project">
            <motion.div
                key={router.asPath}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="project__illustration"
            >
                <div className="project__illustration-thumbnails">
                    {project.images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`img-container ${activeImgIndex === index ? 'active' : ''}`}
                            onClick={() => handleShowImg(index)}
                        >
                            <CustomImage
                                src={image}
                                width={1000}
                                height={1000}
                                sizes="125px"
                                alt={`${project.name}-${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="project__illustration-images">
                    {project.images.map((image, index) => (
                        <div 
                            key={index} className="img-container"
                            ref={(el) => { imageRefs.current[index] = el }}
                        >
                            <CustomImage
                                src={image}
                                width={1000}
                                height={1000}
                                sizes="(max-width: 1024px) 95vw, 50vw"
                                alt={`${project.name}-${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className="project__content">
                <div className="project__content-heading">
                    <span>{project.tag}</span>
                </div>
                <div className="project__content-cell">
                    <div>
                        <h1>{project.name}</h1>
                        <p dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                </div>
                <div className="project__content-footer">
                    <Link href={`/projets/${previousProject.slug}`}>
                        <span className="icon arrow">
                            <IoIosArrowRoundBack />
                        </span>
                        <span>Projet précédent</span>
                    </Link>
                    <Link href={`/projets/${nextProject.slug}`}>
                        <span>Projet suivant</span>
                        <span className="icon arrow">
                            <IoIosArrowRoundForward />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="project__footer--mobile">
                <Link href={`/projets/${previousProject.slug}`} aria-label="Project précédent">
                    <span className="icon arrow">
                        <IoIosArrowRoundBack />
                    </span>
                </Link>
                <Link href={`/projets/${nextProject.slug}`} aria-label="Project suivant">
                    <span className="icon arrow">
                        <IoIosArrowRoundForward />
                    </span>
                </Link>
            </div>
        </div>
    )
}