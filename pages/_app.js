import Head from 'next/head'
import '../styles/globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'
import BrandingLoader from '../components/BrandingLoader'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <title>شركة حسين الغامدي للمحاماة والاستشارات القانونية | Hussein Alghamdi Law Firm and Legal Consultations</title>
        <meta name="description" content="شركة محاماة متخصص في الاستشارات القانونية والتقاضي والقانون التجاري في الرياض. خبرة تزيد عن 13 عاماً في الخدمات القانونية. Law firm specializing in legal consultations, litigation, and commercial law in Riyadh with over 13 years of experience." />
        
        {/* Arabic Keywords */}
        <meta name="keywords" content="محامي الرياض, شركة محاماة الرياض, استشارات قانونية, محامي تجاري, قانون تجاري, تقاضي, حسين آل محمد, العليا الرياض, خدمات قانونية, محكمة, دعاوى قضائية, عقود, شركات, استشارة قانونية مجانية" />
        
        {/* English Keywords */}
        <meta name="keywords" content="lawyer Riyadh, law firm Riyadh, legal consultation, commercial lawyer, business law, litigation, Hussein Almohmmed, Al Olaya Riyadh, legal services, court, lawsuits, contracts, companies, free legal consultation" />
        
        {/* Location-based SEO */}
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="geo.position" content="24.6928918;46.6744507" />
        <meta name="ICBM" content="24.6928918, 46.6744507" />
        
        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "شركة حسين أحمد آل محمد للمحاماة",
            "alternateName": "Hussein Ahmed Almohmmed Law Firm",
            "description": "شركة محاماة متخصص في الاستشارات القانونية والتقاضي والقانون التجاري",
            "url": "https://almohmmed.com",
            "telephone": ["+966559055731", "+966114944110"],
            "email": "info@almohmmed.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "الأمير محمد بن سعود بن عبدالعزيز",
              "addressLocality": "العليا",
              "addressRegion": "الرياض",
              "postalCode": "12331",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 24.6928918,
              "longitude": 46.6744507
            },
            "openingHours": "Mo-Th 09:00-17:00, Fr 09:00-12:00",
            "priceRange": "$$",
            "areaServed": "Saudi Arabia",
            "serviceArea": "Riyadh",
            "founder": "Hussein Ahmed Almohmmed",
            "foundingDate": "2011",
            "knowsLanguage": ["Arabic", "English"]
          })}
        </script>
        
        {/* Open Graph */}
        <meta property="og:title" content="شركة حسين أحمد آل محمد للمحاماة | Law Firm Riyadh" />
        <meta property="og:description" content="خبرة قانونية تتجاوز 13 عاماً في الرياض. استشارات قانونية وتجارية متخصصة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://almohmmed.com" />
        <meta property="og:image" content="https://almohmmed.com/images/Logo.png" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شركة حسين أحمد آل محمد للمحاماة" />
        <meta name="twitter:description" content="خبرة قانونية تتجاوز 13 عاماً في الرياض" />
        <meta name="twitter:image" content="https://almohmmed.com/images/Logo.png" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="canonical" href="https://almohmmed.com" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="ar" href="https://almohmmed.com?lang=ar" />
        <link rel="alternate" hrefLang="en" href="https://almohmmed.com?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://almohmmed.com" />
      </Head>
      <BrandingLoader />
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
