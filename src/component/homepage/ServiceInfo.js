import "@fortawesome/fontawesome-free/css/all.min.css";

const Page = () => {
    return (
       <section className="bg-white py-16">
  <div className="max-w-[1200px] mx-auto px-4">
    {/* Desktop View */}
    <div
      className="hidden md:flex justify-between bg-gradient-to-r from-[#004282] to-[#0166cc] text-white rounded-2xl shadow-lg p-10 divide-x divide-white/30"
    >
      {[
        { icon: "fas fa-clock", title: "24/7", desc: "Service" },
        { icon: "fas fa-calendar-alt", title: "20 Years", desc: "Of Caring & Healing" },
        { icon: "fas fa-hospital", title: "50+", desc: "Medical Experts" },
        { icon: "fas fa-user-md", title: "1,00,000+", desc: "Patients Treated" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex-1 flex flex-col items-center px-6 transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-white/20 p-4 rounded-full mb-3 shadow-md">
            <i className={`${item.icon} text-3xl`}></i>
          </div>
          <h3 className="text-2xl font-extrabold">{item.title}</h3>
          <p className="text-lg">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Mobile View */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:hidden">
      {[
        { icon: "fas fa-clock", title: "24/7", desc: "Service" },
        { icon: "fas fa-calendar-alt", title: "20 Years", desc: "Of Caring & Healing" },
        { icon: "fas fa-hospital", title: "50+", desc: "Medical Experts" },
        { icon: "fas fa-user-md", title: "1,00,000+", desc: "Patients Treated" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-[#004282] to-[#0166cc] rounded-xl p-6 flex flex-col items-center text-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="bg-white/20 p-3 rounded-full mb-3">
            <i className={`${item.icon} text-2xl`}></i>
          </div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm opacity-90">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    );
};

export default Page;
