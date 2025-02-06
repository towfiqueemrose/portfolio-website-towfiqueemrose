import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  shortDesc: string
  imageUrl?: string | null
  tags?: string[]
}

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6 mx-auto">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group overflow-hidden border border-gray-800 rounded-lg bg-black/95"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative md:w-1/2 h-full overflow-hidden">
              <Link href={`/projects/${project.id}`} className="block h-full">
                <Image
                  src={project.imageUrl ?? "/project.jpg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  priority
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
              </Link>
            </div>
            
            <div className="flex flex-col flex-1 justify-between p-4">
              <div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 group/link"
                >
                  <h2 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <svg
                    className="w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </Link>
                
                <p className="mt-3 text-gray-300 line-clamp-3">
                  {project.shortDesc}
                </p>
                
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
