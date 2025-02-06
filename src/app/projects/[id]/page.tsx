import { fetchSingleProject } from "@/lib/actions";
import Image from "next/image";
import { notFound } from "next/navigation";


export default async function SingleProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Fetch the project
  const singleProject = await fetchSingleProject({ id });

  // Handle the case where the project is not found
  if (!singleProject) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      <div className="text-2xl lg:text-5xl xl:hidden md:text-3xl font-bold text-center text-white mb-4">
        {singleProject.title}
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex gap-8 flex-col xl:w-1/2">
          <div className="flex justify-center">
            <Image
              src={singleProject.imageUrl ?? "/project.jpg"}
              width={700}
              height={700}
              alt={singleProject.title}
              className="rounded-lg"
            />
          </div>

        </div>
        <div className="ml-0 xl:ml-16 flex gap-8 xl:w-1/2">
          <div>
            <h1 className="hidden xl:block text-5xl font-bold text-white mb-4">
              {singleProject.title}
            </h1>
            <p className="text-white my-6 text-lg md:text-xl">{singleProject.longDesc}</p>
            {singleProject.essentialInfo && (
              <p className="text-red-500 my-6 text-base md:text-lg">{"**"} {singleProject.essentialInfo}</p>
            )}
                      <div className="flex gap-4 justify-evenly">
            {singleProject.deployedLink && (
              <a
                href={singleProject.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-4 rounded-full transition-colors duration-300"
              >
                Deploy Link
              </a>
            )}
            {singleProject.sourceCodeLink && (
              <a
                href={singleProject.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-4 rounded-full transition-colors duration-300"
              >
                Source Code
              </a>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
