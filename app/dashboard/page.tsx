import Link from "next/link";


function ProcedureCard({ title, description }) {
  return (
    <Link href={`/dashboard/model/1`} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href="#" 
        className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
      >
        View Details
      </a>
    </Link >
  );
}

export default function DashboardPage() {

const procedures = [
  {
    title: "Robotic-Assisted Knee Replacement",
    description: "Experience the future of knee replacement surgery with our state-of-the-art VR simulation.",
  },
  {
    title: "Minimally Invasive Spine Surgery",
    description: "Explore our VR simulation of advanced spinal procedures with reduced patient trauma.",
  },
  {
    title: "Laparoscopic Cholecystectomy",
    description: "Train for minimally invasive gallbladder removal with our cutting-edge VR simulation.",
  },
  {
    title: "Endovascular Aortic Repair",
    description: "Master the latest techniques in minimally invasive aortic aneurysm repair with our VR simulation.",
  },
  {
    title: "Robotic-Assisted Prostatectomy",
    description: "Prepare for complex prostate cancer surgery with our advanced VR simulation.",
  },
  {
    title: "Transoral Robotic Surgery",
    description: "Explore our VR simulation of minimally invasive head and neck cancer procedures.",
  },
];
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">VR Surgical Procedures</h1>
        <p className="text-lg text-gray-600 mb-6">Explore our cutting-edge VR surgical procedures.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((procedure, index) => (
            <ProcedureCard key={index} {...procedure} />
          ))}
        </div>
      </div>
    </div>
  )
}
