
import Image from "next/image";
import Link from "next/link";
interface Project {
  id: string;
  title: string;
  shortDesc: string;
  imageUrl?: string | null;
}

interface ProjectListProps {
  projects: Project[];
}

export default async function ProjectList({ projects }: ProjectListProps) {

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mx-auto mt-6">
      {projects.map((project) => (
        <div key={project.id} className="border border-gray-500 rounded-md shadow-md bg-black">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center">
              <Link href={`/projects/${project.id}`}>
                <Image src={project.imageUrl ?? "/project.jpg"} width={300} height={300} alt="" className="rounded-md m-2 h-200px w-300px" />
              </Link>
            </div>
            <div className="m-4 flex-1  text-center md:text-left">
              <Link href={`/projects/${project.id}`}>
                <h1 className="text-blue-500 font-bold text-2xl md:text-3xl">{project.title}</h1>
              </Link>
              <p className="mt-2 text-white text-sm md:text-base">{project.shortDesc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
