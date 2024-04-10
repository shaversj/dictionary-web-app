import Link from "next/link";

export default function Footer({ sourceUrls }) {
  return (
    <>
      <footer className={"pb-[85px]"}>
        <div className={"mt-[32px] h-[1px] w-full bg-plaster"}></div>
        <div className={"pt-6"}>
          <span className={"text-[15px] text-bank-vault"}>Source</span>
          <Link className={"block"} href={sourceUrls}>
            <span className={"text-carbon-fiber"}>{sourceUrls}</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
