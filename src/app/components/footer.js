import Link from "next/link";

export default function Footer({ sourceUrls }) {
  return (
    <>
      <footer className={"pb-[85px]"}>
        <div className={"mt-[32px] h-[1px] w-full bg-plaster"}></div>
        <div className={"pt-6 md:flex md:items-center md:gap-x-[20px]"}>
          <span className={"text-[14px] text-bank-vault underline"}>Source</span>
          <Link className={"block"} href={sourceUrls}>
            <span className={"text-[14px] text-carbon-fiber"}>{sourceUrls}</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
