export default function Reviews() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-4">
          고객사 후기
        </h2>
        <p className="text-center text-gray-500 mb-12">
          곧 업데이트 예정입니다
        </p>

        {/* Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 md:p-8 flex items-center justify-center min-h-[200px]"
            >
              <span className="text-gray-400 text-lg">준비 중</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
