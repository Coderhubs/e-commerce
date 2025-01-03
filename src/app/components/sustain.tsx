export function Sustain() {
    return (
      <section className="w-full bg-[#F8F8F8] py-20">
        {/* Main Statement */}
        <div className="container mx-auto px-4 ">
          <h2 className="text-[32px] md:text-[42px] text-center font-medium leading-[1.2] max-w-[900px] mx-auto mb-32">
            These products are  made with
            wood forest certified to be responsibly managed, environmentally  sound
            and socially beneficial
          </h2>
  
          {/* New Collections */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-[1200px] mx-auto">
            <div>
              <h3 className="text-2xl font-medium mb-2">
                New Collections
              </h3>
              <p className="text-gray-600 text-[15px] max-w-[400px]">
                These products are made with wood from forest certified to be responsibly
              </p>
            </div>
            <button className="bg-[#E2FF7D] px-6 py-3 rounded-full text-[15px] font-medium hover:bg-[#d4ff4d] transition-colors">
              See Collection
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  