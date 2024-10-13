/* eslint-disable react/prop-types */
const FertilizerList = ({ fertilizers }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md mt-4">
      <h2 className="text-purple-800 text-xl mb-4">Fertilizers</h2>
      <ul>
        {fertilizers.map((fertilizer, index) => (
          <li key={index} className="border-b py-2">
            {fertilizer.productDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FertilizerList;
