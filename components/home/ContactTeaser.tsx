import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ContactTeaser() {
  return (
    <section className="bg-blue-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          납품 문의하기
        </h2>

        {/* Subtitle */}
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">
          상호, 연락처, 월 사용량을 알려주시면 빠르게 안내드립니다
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <Button variant="secondary" size="lg">
            문의 폼 작성하기
          </Button>
        </Link>
      </div>
    </section>
  );
}
