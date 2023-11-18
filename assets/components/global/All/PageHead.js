/**
 *
 *  This is the Page Head
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

export const PageHead = (props) => {
  const router = useRouter();

  return (
    <Head>
      <title>{props.page_head_data.pageTitle}</title>

      <meta name="keywords" content={props.page_head_data.pageKeywords} />
      <meta name="description" content={props.page_head_data.pageDesc} />
      <meta name="robots" content={props.page_head_data.pageRobots} />
      <link rel="canonical" href={props.page_head_data.pageParent} />

      <link rel="icon" type="image/x-icon" href={props.icons_data.favicon} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={props.icons_data.f16}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={props.icons_data.f32}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href={props.icons_data.f48}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href={props.icons_data.f64}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={props.icons_data.f96}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href={props.icons_data.f128}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={props.icons_data.f192}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href={props.icons_data.f512}
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={props.icons_data.ati57}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={props.icons_data.ati76}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={props.icons_data.ati120}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={props.icons_data.ati152}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={props.icons_data.ati180}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href={props.icons_data.android72}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={props.icons_data.android96}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href={props.icons_data.android144}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={props.icons_data.android192}
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={props.icons_data.ms32} />
      <meta
        name="msapplication-square70x70logo"
        content={props.icons_data.ms70}
      />
      <meta
        name="msapplication-square150x150logo"
        content={props.icons_data.ms150}
      />
      <meta
        name="msapplication-wide310x150logo"
        content={props.icons_data.ms310}
      />
    </Head>
  );
};
