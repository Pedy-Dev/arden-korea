const steps = [
  {
    number: 1,
    title: '소싱 & 발주',
    points: [
      '신뢰할 수 있는 공급처에서 원료 확보',
      '품질 기준 충족 제품만 선별',
    ],
  },
  {
    number: 2,
    title: '정식 통관',
    points: [
      '식품위생법 준수한 정식 수입',
      '수입 서류 일체 확보',
    ],
  },
  {
    number: 3,
    title: '보관 & 로트 관리',
    points: [
      '로트별 입고일 기록',
      '선입선출 원칙 철저 준수',
    ],
  },
  {
    number: 4,
    title: '납품 & 서류 제공',
    points: [
      '세금계산서, 거래명세서 발행',
      '수입 서류 사본 제공 (요청 시)',
    ],
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12">
          납품 프로세스
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200" />
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-lg shadow-md p-6 text-center">
                {/* Number Circle */}
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>

                {/* Points */}
                <ul className="text-sm text-gray-600 space-y-2">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
