import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness Line | Premium Gym in Raigarh",
  description: "Best fitness center near me in Raigarh. Premium fitness experience with world-class equipment & expert trainers. Join now!",
  keywords: ["Gym in Raigarh", "Best fitness center near me", "fitness", "workout", "Fitness Line", "Raigarh gym", "Sector-01 gym"],
  openGraph: {
    title: "Fitness Line | Premium Gym in Raigarh",
    description: "Best fitness center near me in Raigarh. Premium fitness experience.",
    url: "https://fitnesslineraigarh.com",
    siteName: "Fitness Line",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Fitness Line Gym Raigarh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness Line | Premium Gym in Raigarh",
    description: "Best fitness center near me in Raigarh. Premium fitness experience.",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "Fitness Line",
  "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
  "@id": "https://fitnesslineraigarh.com",
  "url": "https://fitnesslineraigarh.com",
  "telephone": "+919876543210", 
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector-01",
    "addressLocality": "Raigarh",
    "addressRegion": "CG",
    "postalCode": "496001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.8974,
    "longitude": 83.3950
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "04:00",
    "closes": "00:00"
  },
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
