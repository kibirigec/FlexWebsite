// sections/WeddingsSection.jsx
export function ConcertsSection() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-200"></div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Concerts Project {index + 1}</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }