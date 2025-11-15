import Link from "next/link";
interface MyButtonProps {
  title: string;
  link: string;
}

export default function Button({title, link }: MyButtonProps) {
  return (
    <>
      <Link href={link}>
        <button className="rounded-2xl btn btn-soft min-w-40 bg-gradient-to-r from-[#d3f07a]  to-[#f59e0b]">
          {title}
        </button>
      </Link>
    </>
  );
}
