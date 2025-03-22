'use client';

import dynamic from 'next/dynamic';

// Dynamically import the client component with no SSR to avoid hydration issues
const BoringPage = dynamic(() => import('../components/BoringPage'), {
  ssr: false
});

export default function Home() {
  return <BoringPage />;
}
