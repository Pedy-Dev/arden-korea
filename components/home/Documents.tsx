import { Check } from 'lucide-react';

const documents = [
  { name: '거래명세서', description: '품목, 수량, 금액 상세' },
  { name: '세금계산서', description: '정규 발행' },
  { name: '수입 서류', description: '원산지증명, 검역증 등 - 요청 시' },
  { name: '로트 정보', description: '입고일, 유통기한' },
];

export default function Documents() {
  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12">
          제공 가능한 거래 서류
        </h2>

        {/* Document List */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-800">{doc.name}</span>
                    <span className="text-gray-500 ml-2">({doc.description})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
