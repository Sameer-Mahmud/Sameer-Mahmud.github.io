import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProjectCard from "@/components/projectcard";
export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Projects</h1>
        </div>
      </section>
      <section className="">
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <ProjectCard name = "AI Message Generator" url = "www..google.com" imageUrl="public/img/altadhkirah.png" language="Created with React and Rust"/>
          <ProjectCard name = "Al Tadhkirah Institute Website" url = "www..google.com" imageUrl="public/img/altadhkirah.png" language="Created with Wordpress, Elementor"/>
          <ProjectCard name = "Al Tadhkirah Institute Website" url = "www..google.com" imageUrl="public/img/ethcardmaker.png" language="Created with React"/>
          <ProjectCard name = "Al Tadhkirah Institute Website" url = "www..google.com" imageUrl="public/img/Vue-QuizApp.png" language="Created with Vue.js"/>
          
        </div>
      </section>
    </DefaultLayout>
  );
}
