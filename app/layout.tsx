import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '아르덴 유통(Arden) | 부산 카페용 수입 원료 납품 전문',
  description:
    '정식 통관 수입 원료, 투명한 거래 서류, 부산 기반 빠른 납품. 피스타치오, 마시멜로, 쿠키용기 등 카페 필수 재료 공급.',
  keywords: '피스타치오 수입, 카페 원료, 부산 납품, 식자재 공급, 수입 원료',
  openGraph: {
    title: '아르덴 유통(Arden) | 부산 카페용 수입 원료 납품',
    description: '정식 통관, 투명한 서류, 부산 기반 빠른 납품',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://ardenkorea.com',
    siteName: 'Arden Korea',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
