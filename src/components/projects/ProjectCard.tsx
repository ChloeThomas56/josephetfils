import Link from "next/link";
import { ProjectType } from "@/types/types";
import CustomImage from "../ui/CustomImage";

export default function ProjectCard({ project, imgSizes }: { 
    project: ProjectType;
    imgSizes: string;
}) {
    return (
        <Link
            href={`/projets/${project.slug}`}
            className="project-card"
        >
            <span>{project.tag}</span>
            <div className="img-container">
                <CustomImage
                    src={project.home_img}
                    width={1000}
                    height={1000}
                    sizes={imgSizes}
                    alt={project.name}
                />
            </div>
            <div className="project-card__overlay" />
            <h3>
                {project.name}
            </h3>
        </Link>
    )
}