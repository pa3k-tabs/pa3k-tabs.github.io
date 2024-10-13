/* eslint-disable react/prop-types */
const Features = ({ featuresData }) => {
  return (
    <div className="mt-10 bg-gray-950 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-100 mb-6">
        Key Features
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
