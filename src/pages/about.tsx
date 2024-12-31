import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Image
            alt={"Me"}
            className="object-cover rounded-xl"
            src={"/img/display-img.jpeg"}
            width={270}
          />
        <div className="inline-block max-w-lg text-center justify-center">
          <p>I am currently a final year student at UNSW studying Comp Sci/Commerce. I enjoy maths, science and the business world, continuously applying new knowledge into my personal and uni projects. Some of my favorite hobbies include volunteering with the local community, working on my car and watching anime.</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
