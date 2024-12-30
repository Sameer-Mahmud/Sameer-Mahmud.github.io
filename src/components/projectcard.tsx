import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface ProjectCardProps {
  url: string;
  imageUrl: string;
  name: string;
  language: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ url, imageUrl, name, language }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="py-4 hover:shadow-lg transition-shadow">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">{language}</small>
          <h4 className="font-bold text-large">{name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={name}
            className="object-cover rounded-xl"
            src={imageUrl}
            width={270}
          />
        </CardBody>
      </Card>
    </a>
  );
};

export default ProjectCard;