import { Metadata } from "next";

export function constructMetadata({
  title = "Mikheil Meskhi • Front-End Dev",
  description = "The portfolio of Mikheil Meskhi, Front-End Developer.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Meskhi7",
    },
    icons,
    metadataBase: new URL("https://meskhi.vercel.app"),
    themeColor: "#1a0b1f",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
