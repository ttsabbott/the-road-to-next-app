import Link from "next/link";
import { homePath } from '@/paths';
import { Heading } from "@/components/heading";

const AboutPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="About Page" />
      {/* <h2 className="text-lg">About Page</h2> */}
      {/* <br />
      <Link href={homePath()} className="text-blue-500 underline">
        Home Page
      </Link> */}
    </div>
  );
};

export default AboutPage;