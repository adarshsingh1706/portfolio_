import Image from "next/image";
import Link from "next/link";

export default function ParkItPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-white">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
        ParkIt
      </h1>
      <p className="mt-4 text-lg">
        An intelligent parking solution that finds the closest available spot.
      </p>
      <Image
        src="/projects/parkit.png"
        alt="ParkIt"
        width={600}
        height={350}
        className="rounded-lg mt-4"
      />
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Technologies Used:</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>Next.js</li>
          <li>GoMaps</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="mt-6 flex gap-4">
        <Link href="https://parkit.vercel.app" target="_blank" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Live Demo
        </Link>
        <Link href="https://github.com/your-repo/parkit" target="_blank" className="px-4 py-2 bg-gray-700 text-white rounded-lg">
          GitHub
        </Link>
      </div>
    </div>
  );
}
