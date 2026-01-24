import { AlertCircle, FileText, Package } from 'lucide-react';
import Card from '@/components/ui/Card';

const problems = [
  {
    icon: AlertCircle,
    question: '원료 품질은 믿을 수 있나요?',
  },
  {
    icon: FileText,
    question: '세금계산서 발행은 가능한가요?',
  },
  {
    icon: Package,
    question: '소량 주문도 받아주시나요?',
  },
];

export default function Problem() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12">
          이런 고민, 하고 계시지 않나요?
        </h2>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center" hover={false}>
              <problem.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <p className="text-lg text-gray-700 font-medium">
                {problem.question}
              </p>
            </Card>
          ))}
        </div>

        {/* Solution Message */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-blue-700">
            아르덴은 이 모든 것을 투명하게 제공합니다
          </p>
        </div>
      </div>
    </section>
  );
}
