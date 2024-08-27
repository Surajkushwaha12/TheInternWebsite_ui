import Industry from "./Industry";

const IndustryName = () => {
  const industryNames = [
    "Government",
    "Food and Beverage",
    "Technology",
    "Healthcare",
  ];

  return (
    <div>
      <Industry industryNames={industryNames} />
    </div>
  );
};

export default IndustryName;
