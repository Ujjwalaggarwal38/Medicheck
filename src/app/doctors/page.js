'use client';
import DoctorCard from '@/component/DoctorCard';


const doctors = [
  {
    name: 'Dr. Ajay Kumar Singh',
    specialty: 'Pediatrician',
    description: ' Dr. Ajay Kumar Singh is a full-time Pediatrician with 15+ years of experience in child care, neonatal intensive care, and developmental assessments. He offers gentle, trusted care through all stages of childhood.',
    image: '/doctors/AjayKumar.jpg',
  },
  {
    name: 'Dr.  Arshad Hussain ',
    specialty: 'Physiotherapist ',
    description: 'Dr. Arshad Hussain is a full-time Physiotherapist with over 15+ years of experience in orthopedic and post-surgical rehabilitation. He customizes recovery plans using advanced therapy techniques for faster, effective healing.',
    // image: '/directors/Ranjeeta.png',
  },
  {
    name: 'Dr. BC Gupta',
    specialty: 'Pathologist',
    description: 'Dr. B.C. Gupta is a full-time Pathologist with 25+ years of experience in clinical and diagnostic pathology. His precision in lab diagnostics plays a critical role in supporting accurate medical treatments.',
    image: '/doctors/BCGupta.jpg',
  },
  {
    name: 'Dr. Vishal N.V ',
    specialty: 'Orthopedic Surgeon ',
    description: 'Dr. Vishal N.V is a full-time Orthopedic Surgeon with 5+ years of experience in trauma care, joint replacement, and degenerative bone disorders. He emphasizes multidisciplinary care for improved mobility and long-term recovery.',
    // image: '/doctors/BCGupta.jpg',
  },
  {
    name: 'Dr. Rakhi Mehta ',
    specialty: 'Gynaecologist ',
    description: 'Dr. Rakhi Mehta is a full-time Senior Gynaecologist with 20+ years of experience in high-risk pregnancies, infertility management, and advanced laparoscopic procedures. Her extensive knowledge ensures safe and effective women’s healthcare.',
    // image: '/doctors/BCGupta.jpg',
  },
  {
    name: 'Dr. R. S. Verma ',
    specialty: 'General Physician',
    description: ' Dr. R. S. Verma is a full-time General Physician with over 20 years of experience in treating lifestyle diseases and chronic conditions. His preventive care approach and compassionate consultations make him a highly respected name in general medicine.',
    // image: '/doctors/BCGupta.jpg',
  },
  {
    name: 'Dr. Gourav Mahendra ',
    specialty: 'Dentist ',
    description: 'Dr. Gourav Mahendra is a full-time Dentist with 5+ years of experience in restorative, cosmetic, and preventive dental procedures. He provides gentle, quality dental care with a focus on long-term oral health.',
    // image: '/doctors/BCGupta.jpg',
  },
];

export default function DoctorsPage() {
 
  return (
    <div className="relative top-30 bg-white font-[var(--font-poppins)]">
      <div className="max-w-6xl mx-auto px-4  py-4 space-y-12">
        <h1 className="text-4xl font-bold text-center text-[#004282] mb-10">Meet Our Doctors</h1>
        {doctors.map((doc, index) => (
          <DoctorCard key={index} doctor={doc} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}
