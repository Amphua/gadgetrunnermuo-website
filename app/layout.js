import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Gadget Runner Muo',
  icons: {
    icon: '/images/gadget-runner-favicon-light.png?v=5',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="stylesheet" href="/css/interface.css" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
