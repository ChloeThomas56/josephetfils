import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import projects from "@/lib/projects";
import { ProjectType } from "@/types/types";
import ProjectDetails from "@/components/projects/Project";

export const getStaticPaths = (async () => {
    const paths = projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: true,
    }
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
    const { params } = context;
    const project = projects.find((p) => p.slug === params?.slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project,
        },
    };
}) satisfies GetStaticProps<{
    project: ProjectType;
}>;

export default function Project({ project }: { project: ProjectType }) {   
    if (!project) return null;

    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const previousProject = currentIndex === 0 ? projects[projects.length - 1] : projects[currentIndex - 1];
    const nextProject = currentIndex < (projects.length - 1) ? projects[currentIndex + 1] : projects[0];

    const title = `Joseph & Fils | ${project.name}`;
    const slug = project.slug;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:url" content={`https://www.josephetfils.com/projets/${slug}`} />
            </Head>
            <ProjectDetails 
                project={project}
                previousProject={previousProject}
                nextProject={nextProject}
            />
        </>
    );
}