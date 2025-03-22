import { useState } from "react";
import { ChevronDown, ChevronUp, User, MapPin, Crop, DollarSign, Clock, Star, Search, CheckCircle, Award } from "lucide-react";

const farmersData = [
  { id: 1, name: "Ravi Kumar", location: "Punjab", loan: "₹50,000", crop: "Wheat", rating: 4, interestRate: "8%", repaymentTime: "3 Years", year: 2024, country: "India", region: "North", landSize: "10 acres", soilType: "Loamy", pastYield: "1200 kg/acre", annualIncome: "₹5,00,000", soilPH: 6.5, nitrogenLevel: "Medium", organicMatter: "High", landQualityScore: 85, pastRainfall: "450 mm", avgTemperature: "28°C", creditScore: 750 },
  { id: 2, name: "Amit Sharma", location: "Maharashtra", loan: "₹75,000", crop: "Sugarcane", rating: 5, interestRate: "7.5%", repaymentTime: "4 Years", year: 2024, country: "India", region: "West", landSize: "15 acres", soilType: "Clayey", pastYield: "1000 kg/acre", annualIncome: "₹7,00,000", soilPH: 7.2, nitrogenLevel: "High", organicMatter: "Medium", landQualityScore: 78, pastRainfall: "520 mm", avgTemperature: "30°C", creditScore: 800 },
  { id: 3, name: "Suresh Patel", location: "Gujarat", loan: "₹40,000", crop: "Cotton", rating: 3, interestRate: "9%", repaymentTime: "2.5 Years", year: 2024, country: "India", region: "West", landSize: "12 acres", soilType: "Sandy", pastYield: "900 kg/acre", annualIncome: "₹3,50,000", soilPH: 7.0, nitrogenLevel: "Low", organicMatter: "Medium", landQualityScore: 72, pastRainfall: "410 mm", avgTemperature: "32°C", creditScore: 720 },
  { id: 4, name: "Ramesh Yadav", location: "Uttar Pradesh", loan: "₹60,000", crop: "Rice", rating: 5, interestRate: "7%", repaymentTime: "5 Years", year: 2024, country: "India", region: "North", landSize: "20 acres", soilType: "Alluvial", pastYield: "1400 kg/acre", annualIncome: "₹6,00,000", soilPH: 6.8, nitrogenLevel: "High", organicMatter: "High", landQualityScore: 90, pastRainfall: "580 mm", avgTemperature: "29°C", creditScore: 770 }
];

export default function Farmer({ darkMode }) {
  const [expandedFarmer, setExpandedFarmer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleExpand = (id) => {
    setExpandedFarmer(expandedFarmer === id ? null : id);
  };

  const filteredFarmers = farmersData.filter(farmer => 
    farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farmer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farmer.crop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLoanRiskClass = (score) => {
    if (score >= 85) return "text-green-500";
    if (score >= 75) return "text-blue-500";
    if (score >= 65) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header Bar */}
      <div className={`fixed top-0 left-0 right-0 z-10 p-4 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-green-500 mr-2">🌾</span>
            AgroFinance
          </h1>
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search farmers, crops, locations..."
              className={`w-full py-2 px-4 pl-10 rounded-full ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Active Loans: 4</span>
            <span className="font-medium">Total Amount: ₹2,25,000</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pt-24 pb-10 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Farmer Loan Requests</h2>
          <div className={`px-4 py-2 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
            <span className="font-medium">Showing {filteredFarmers.length} farmers</span>
          </div>
        </div>

        {/* Farmers List */}
        <div className="space-y-6">
          {filteredFarmers.map((farmer) => (
            <div
              key={farmer.id}
              className={`rounded-xl shadow-lg transition-all duration-300 overflow-hidden border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
            >
              {/* Main Info Panel */}
              <div className="p-6 flex flex-col md:flex-row justify-between items-start">
                {/* Farmer Profile */}
                <div className="flex items-start space-x-4 w-full md:w-1/3 mb-4 md:mb-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${darkMode ? "bg-gray-700" : "bg-green-100 text-green-700"}`}>
                    {farmer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{farmer.name}</h3>
                    <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
                      <MapPin size={14} className="mr-1" />
                      <span>{farmer.location}, {farmer.region}</span>
                    </div>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < farmer.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Loan Details */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-1/3">
                  <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Loan Amount</p>
                    <p className="text-lg font-bold">{farmer.loan}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Interest Rate</p>
                    <p className="text-lg font-bold">{farmer.interestRate}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Repayment</p>
                    <p className="text-lg font-bold">{farmer.repaymentTime}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Crop</p>
                    <p className="text-lg font-bold">{farmer.crop}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Land Size</p>
                    <p className="text-lg font-bold">{farmer.landSize}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Credit Score</p>
                    <p className={`text-lg font-bold ${getLoanRiskClass(farmer.creditScore)}`}>{farmer.creditScore}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 w-full md:w-1/4 mt-4 md:mt-0">
                  <button 
                    className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg flex items-center justify-center"
                  >
                    <CheckCircle size={18} className="mr-2 cursor-pointer" />
                    Approve Loan
                  </button>
                  <button 
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center"
                  >
                    <Search size={18} className="mr-2 cursor-pointer" />
                    Review Details
                  </button>
                  <button 
                    onClick={() => toggleExpand(farmer.id)}
                    className={`w-full py-2 px-4 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} font-medium rounded-lg flex items-center justify-center`}
                  >
                    {expandedFarmer === farmer.id ? (
                      <>
                        <ChevronUp size={18} className="mr-2 cursor-pointer" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown size={18} className="mr-2 cursor-pointer" />
                        Show Details
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Details Panel */}
              {expandedFarmer === farmer.id && (
                <div className={`px-6 py-4 border-t ${darkMode ? "border-gray-700 bg-gray-750" : "border-gray-200 bg-gray-50"}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Land Details */}
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-white"} shadow`}>
                      <h4 className="text-lg font-bold mb-3 flex items-center">
                        <span className="mr-2">🌱</span>
                        Land Details
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Soil Type:</span>
                          <span className="font-medium">{farmer.soilType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Soil pH:</span>
                          <span className="font-medium">{farmer.soilPH}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Nitrogen Level:</span>
                          <span className="font-medium">{farmer.nitrogenLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Organic Matter:</span>
                          <span className="font-medium">{farmer.organicMatter}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Quality Score:</span>
                          <span className={`font-medium ${getLoanRiskClass(farmer.landQualityScore)}`}>
                            {farmer.landQualityScore}/100
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Climate Data */}
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-white"} shadow`}>
                      <h4 className="text-lg font-bold mb-3 flex items-center">
                        <span className="mr-2">🌤️</span>
                        Climate & Yield
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Past Rainfall:</span>
                          <span className="font-medium">{farmer.pastRainfall}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Avg Temperature:</span>
                          <span className="font-medium">{farmer.avgTemperature}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Past Yield:</span>
                          <span className="font-medium">{farmer.pastYield}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Annual Income:</span>
                          <span className="font-medium">{farmer.annualIncome}</span>
                        </div>
                      </div>
                    </div>

                    {/* Risk Assessment */}
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-white"} shadow`}>
                      <h4 className="text-lg font-bold mb-3 flex items-center">
                        <span className="mr-2">📊</span>
                        Risk Assessment
                      </h4>
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span>Credit Risk</span>
                          <span className={getLoanRiskClass(farmer.creditScore)}>
                            {farmer.creditScore > 750 ? "Low" : farmer.creditScore > 700 ? "Medium" : "High"}
                          </span>
                        </div>
                        <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              farmer.creditScore > 750 ? "bg-green-500" : 
                              farmer.creditScore > 700 ? "bg-blue-500" : 
                              farmer.creditScore > 650 ? "bg-yellow-500" : "bg-red-500"
                            }`} 
                            style={{ width: `${(farmer.creditScore / 850) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span>Land Quality</span>
                          <span className={getLoanRiskClass(farmer.landQualityScore)}>
                            {farmer.landQualityScore > 80 ? "Excellent" : 
                             farmer.landQualityScore > 70 ? "Good" : 
                             farmer.landQualityScore > 60 ? "Average" : "Poor"}
                          </span>
                        </div>
                        <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              farmer.landQualityScore > 80 ? "bg-green-500" : 
                              farmer.landQualityScore > 70 ? "bg-blue-500" : 
                              farmer.landQualityScore > 60 ? "bg-yellow-500" : "bg-red-500"
                            }`} 
                            style={{ width: `${farmer.landQualityScore}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Overall Risk</span>
                          <span className={getLoanRiskClass((farmer.creditScore/850*50) + (farmer.landQualityScore/100*50))}>
                            {((farmer.creditScore/850*50) + (farmer.landQualityScore/100*50)) > 80 ? "Low" : 
                             ((farmer.creditScore/850*50) + (farmer.landQualityScore/100*50)) > 70 ? "Medium" : "High"}
                          </span>
                        </div>
                        <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              ((farmer.creditScore/850*50) + (farmer.landQualityScore/100*50)) > 80 ? "bg-green-500" : 
                              ((farmer.creditScore/850*50) + (farmer.landQualityScore/100*50)) > 70 ? "bg-blue-500" : 
                              ((farmer.creditScore/850*50) + (farmer.landQualityScore/100*50)) > 60 ? "bg-yellow-500" : "bg-red-500"
                            }`} 
                            style={{ width: `${(farmer.creditScore/850*50) + (farmer.landQualityScore/100*50)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}