import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script type="application/ld+json" id="imageSEO">
        {`
            {"@context" : "http://schema.org",
            "@type" : "Organization",
             "name" : "WictroniX",
             "url" : "https://www.wictronix.com",
             "logo": "https://www.wictronix.com/images/WXLogo.png" }
            `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3MVHB8B8YG"
      />
      <Script id="gtags">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3MVHB8B8YG');
          `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
