import { CheckCircle2, FileText, ShieldCheck, Truck } from 'lucide-react';
import Card from '@/components/ui/Card';

const values = [
  {
    icon: CheckCircle2,
    title: '정식 통관 수입 원료',
    description: '수입식품판매업 신고 완료, 투명한 통관 절차',
  },
  {
    icon: FileText,
    title: '완벽한 거래 서류',
    description: '세금계산서, 거래명세서, 수입 서류 일체 제공',
  },
  {
    icon: ShieldCheck,
    title: '로트별 입고 관리',
    description: '선입선출 원칙, 유통기한 철저 관리',
  },
  {
    icon: Truck,
    title: '부산 중심 빠른 납품',
    description: '부산 사상구 소재, 부산/경남 당일 배송 가능',
  },
];

export default function ValueCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <value.icon className="w-10 h-10 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
