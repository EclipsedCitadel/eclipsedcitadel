// src/app/head.tsx

export default function Head() {
  return (
    <>
      <title>Eclipsed Citadel | AI-Powered Content Studio</title>
      <meta
        name="description"
        content="Affordable, automated content creation—videos, graphics, blogs—designed to help your business grow."
      />
      <meta name="theme-color" content="#2B2F4A" />

      {/* Favicon Links */}
      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* Open Graph Meta */}
      <meta property="og:title" content="Eclipsed Citadel | AI-Powered Content Studio" />
      <meta
        property="og:description"
        content="Agency-crafted content with AI speed. Discover what Eclipsed Citadel can create for your business."
      />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://www.eclipsedcitadel.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Eclipsed Citadel" />
      <meta name="twitter:description" content="AI-powered content marketing, crafted for small businesses." />
      <meta name="twitter:image" content="/og-image.png" />
    </>
  );
}
