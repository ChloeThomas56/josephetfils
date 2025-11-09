import type { ProjectType } from '@/types/types';

const projects: ProjectType[] = [
    {
        "id": 1,
        "name": "Salle de sport E.Fitness",
        "slug": "e-fitness",
        "tag": "Aménagement intérieur",
        "description": "Pour ce projet, je suis parti d'un bâtiment à l'allure industrielle que j'ai entièrement transformé en un lieu chaleureux et convivial.<br/>J'ai d'abord habillé l'ensemble des parois avec des panneaux en OSB, afin d'apporter une base brute et naturelle. J'ai ensuite posé des tasseaux en douglas, alternant les orientations horizontales et verticales pour créer un jeu visuel dynamique et mettre en valeur la texture du bois.",
        "home_img": "/images/projects/efitness/efitness_1.jpg",
        "images": [
            "/images/projects/efitness/efitness_1.jpg",
            "/images/projects/efitness/efitness_4.jpg",
            "/images/projects/efitness/efitness_2.jpg",
            "/images/projects/efitness/efitness_3.jpg"
        ],
    },
    {
        "id": 2,
        "name": "Placard sous escalier",
        "slug": "placard-sous-escalier",
        "tag": "Aménagement intérieur",
        "description": "Pour ce projet, j'ai réalisé un aménagement intérieur sur mesure sous un escalier, optimisant chaque espace disponible grâce à de nombreux rangements pratiques et accessibles.<br/>Le corps du placard a été conçu en mélaminé pour sa facilité d’entretien, tandis que les portes ont été réalisées en contreplaqué Okoumé, apportant une finition élégante et chaleureuse.",
        "home_img": "/images/projects/escalier/escalier_1.jpg",
        "images": [
            "/images/projects/escalier/escalier_3.jpg",
            "/images/projects/escalier/escalier_1.jpg",
            "/images/projects/escalier/escalier_2.jpg",
        ]
    },
    {
        "id": 3,
        "name": "Terrasse",
        "slug": "terrasse",
        "tag": "Aménagement extérieur",
        "description": "J'ai réalisé une terrasse en bois d'acacia, une essence européenne reconnue pour sa durabilité et sa teinte chaleureuse.<br /> L'ossature a été conçue pour offrir la même longévité que le platelage, avec une retombée sur le pourtour pour une finition soignée.<br />Un espace a été décaissé au centre afin d'y planter des herbes aromatiques, apportant une touche naturelle à l'ensemble.",
        "home_img": "/images/projects/terrasse/terrasse_1.jpg",
        "images": [
            "/images/projects/terrasse/terrasse_1.jpg",
            "/images/projects/terrasse/terrasse_2.jpg",
            "/images/projects/terrasse/terrasse_3.jpg",
            "/images/projects/terrasse/terrasse_4.jpg"
        ]
    }
]

export default projects;