import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

export default function ContainerBlock({ children, ...customMeta } : any) {
  const router = useRouter();

  const meta = {
    title: "Chen Tzen Personal Portfolio",
    description: `This is my personal portfolio. Get in touch with me to know more.`,
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="shortcut icon" href="/assets/Chen_Logo.png" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://chentzen02.com`}
        />
        <link
          rel="canonical"
          href={`https://chentzen02.com`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Chen Tzen Kok" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main>
            {children}
        </main>
    </div>
  );
}