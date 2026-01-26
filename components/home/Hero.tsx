import Link from 'next/link';
import { BadgeCheck, Building2, Truck } from 'lucide-react';
import Button from '@/components/ui/Button';

const badges = [
  { icon: BadgeCheck, text: '정식 수입판매업 신고' },
  { icon: Building2, text: '사업자등록 완료' },
  { icon: Truck, text: '부산 기반 빠른 배송' },
];

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Main.jpg')" }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center">
          {/* White layered box behind content */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-6 py-10 md:px-10 md:py-14 max-w-3xl mx-auto">
            {/* Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-5">
              정식 수입으로 기준을 만든<br />
              <span className="text-blue-700">신뢰할 수 있는 수입 원료 파트너</span>
            </h1>

            {/* Subhead */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-7 max-w-xl mx-auto leading-relaxed">
              정식 통관부터 투명한 서류까지, 아르덴 유통이 함께합니다
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Link href="/contact" className="w-full sm:w-[200px]">
                <Button variant="primary" size="md" className="w-full h-12">
                  납품 문의하기
                </Button>
              </Link>

              <Link href="/process" className="w-full sm:w-[200px]">
                <Button variant="outline" size="md" className="w-full h-12">
                  납품 프로세스 보기
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-5 md:gap-6">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <badge.icon className="w-4 h-4 text-blue-700" />
                  <span className="text-xs md:text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
