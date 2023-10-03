import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-950 relative z-[99999]">
      <div className="px-5 md:px-10">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="mx-auto flex-col flex w-full max-w-3xl items-center">
            <div className="text-center">
              <h1 className="text-slate-200 font-bold mb-4 text-4xl md:text-6xl">
                404 Error
              </h1>
              <div className="mx-auto max-w-[528px] mb-5 md:mb-6 lg:mb-8">
                <p className="text-slate-400 max-[479px]:text-sm">
                  this page doesn't exist
                </p>
              </div>
              <Link
                href="/"
                className="inline-block cursor-pointer items-center bg-slate-800 rounded-lg px-8 py-4 text-center font-semibold text-slate-200 hover:bg-opacity-80 hover:text-slate-300 duration-200"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
