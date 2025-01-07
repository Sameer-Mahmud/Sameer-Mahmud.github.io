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
          <p>I am a dedicated software developer with over two years of experience at Optus, where I’ve honed my technical skills in building reliable, robust, and user-friendly software solutions. Collaborating closely with my team, I thrive in creating impactful technologies that deliver real value to users.

I graduated from UNSW in 2023 with a double degree in Computer Science and Commerce. My passion for maths, science, and business continues to drive me as I apply my knowledge to both professional and personal projects, with a particular interest in emerging technologies like Web3, blockchain, and artificial intelligence.

Beyond my professional career, I’m deeply committed to giving back to the community. I work with various organizations, particularly those focused on youth education, sports, and community engagement.

With a blend of technical expertise, business acumen, and community spirit, I strive to stay at the forefront of innovation while making a positive impact in everything I do.</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
