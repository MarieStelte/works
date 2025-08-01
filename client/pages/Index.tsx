import { Link } from "react-router-dom";

const SmileyIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.5835 45.8333C66.3196 45.8333 67.7953 45.2257 69.0106 44.0104C70.2259 42.7951 70.8335 41.3194 70.8335 39.5833C70.8335 37.8472 70.2259 36.3715 69.0106 35.1563C67.7953 33.941 66.3196 33.3333 64.5835 33.3333C62.8474 33.3333 61.3717 33.941 60.1564 35.1563C58.9411 36.3715 58.3335 37.8472 58.3335 39.5833C58.3335 41.3194 58.9411 42.7951 60.1564 44.0104C61.3717 45.2257 62.8474 45.8333 64.5835 45.8333ZM35.4168 45.8333C37.1529 45.8333 38.6286 45.2257 39.8439 44.0104C41.0592 42.7951 41.6668 41.3194 41.6668 39.5833C41.6668 37.8472 41.0592 36.3715 39.8439 35.1563C38.6286 33.941 37.1529 33.3333 35.4168 33.3333C33.6807 33.3333 32.205 33.941 30.9897 35.1563C29.7745 36.3715 29.1668 37.8472 29.1668 39.5833C29.1668 41.3194 29.7745 42.7951 30.9897 44.0104C32.205 45.2257 33.6807 45.8333 35.4168 45.8333ZM50.0002 72.9167C54.7224 72.9167 59.0106 71.5799 62.8647 68.9062C66.7189 66.2326 69.514 62.7083 71.2502 58.3333H28.7502C30.4863 62.7083 33.2814 66.2326 37.1356 68.9062C40.9897 71.5799 45.2779 72.9167 50.0002 72.9167ZM50.0002 91.6667C44.2363 91.6667 38.8196 90.5729 33.7502 88.3854C28.6807 86.1979 24.271 83.2292 20.521 79.4792C16.771 75.7292 13.8022 71.3194 11.6147 66.25C9.42725 61.1806 8.3335 55.7639 8.3335 50C8.3335 44.2361 9.42725 38.8194 11.6147 33.75C13.8022 28.6806 16.771 24.2708 20.521 20.5208C24.271 16.7708 28.6807 13.8021 33.7502 11.6146C38.8196 9.42709 44.2363 8.33334 50.0002 8.33334C55.764 8.33334 61.1807 9.42709 66.2502 11.6146C71.3196 13.8021 75.7293 16.7708 79.4793 20.5208C83.2293 24.2708 86.1981 28.6806 88.3856 33.75C90.5731 38.8194 91.6668 44.2361 91.6668 50C91.6668 55.7639 90.5731 61.1806 88.3856 66.25C86.1981 71.3194 83.2293 75.7292 79.4793 79.4792C75.7293 83.2292 71.3196 86.1979 66.2502 88.3854C61.1807 90.5729 55.764 91.6667 50.0002 91.6667ZM50.0002 83.3333C59.3057 83.3333 67.1877 80.1042 73.646 73.6458C80.1043 67.1875 83.3335 59.3056 83.3335 50C83.3335 40.6944 80.1043 32.8125 73.646 26.3542C67.1877 19.8958 59.3057 16.6667 50.0002 16.6667C40.6946 16.6667 32.8127 19.8958 26.3543 26.3542C19.896 32.8125 16.6668 40.6944 16.6668 50C16.6668 59.3056 19.896 67.1875 26.3543 73.6458C32.8127 80.1042 40.6946 83.3333 50.0002 83.3333Z" fill="#1D1B20"/>
  </svg>
);

const ProjectCard = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  link,
  imageClass = "",
  isReversed = false 
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  imageClass?: string;
  isReversed?: boolean;
}) => (
  <div className={`w-full ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col gap-8 lg:gap-16 items-start mb-16 lg:mb-24`}>
    <div className="w-full lg:w-1/2 space-y-4">
      <Link to={link} className="block">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className={`w-full object-cover ${imageClass}`}
        />
      </Link>
    </div>
    <div className="w-full lg:w-1/2 space-y-4 lg:pt-8">
      <Link to={link} className="block">
        <h3 className="font-inter text-[25px] font-normal leading-[36px] tracking-[-0.36px] text-portfolio-text hover:opacity-80 transition-opacity">
          {title}
        </h3>
      </Link>
      <p className="font-inter text-[20px] font-normal leading-[30px] tracking-[-0.27px] text-portfolio-text">
        {description}
      </p>
    </div>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      {/* Header */}
      <header className="relative overflow-hidden">
        {/* Background stripe */}
        <div className="w-full h-52 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute top-0"></div>
      </header>
      <div className="relative z-10 w-full bg-portfolio-bg container mx-auto px-4 py-8">
        <div className="flex justify-between items-start">
          <h1 className="font-inter text-[40px] font-bold leading-[72px] tracking-[-0.72px] text-portfolio-text pt-8">
            Marie Stelte
          </h1>
          <div className="mt-8">
            <SmileyIcon />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Main hero image placeholder */}
          <div className="w-full aspect-[16/9] lg:aspect-[2/1] image-placeholder mb-16 lg:mb-24">
            <span className="text-gray-500 text-lg">Hero Image</span>
          </div>
          
          {/* Description */}
          <div className="max-w-4xl">
            <p className="font-inter text-[25px] leading-[52px] text-portfolio-text">
              Marie is an integrated designer working as a visual designer with a strong focus on visual 
              communication and corporate identity. Through her education and practical experiences, she has 
              developed a holistic understanding of design as an interdisciplinary approach to problem-solving, 
              where boundaries between disciplines are fluid and complementary.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <ProjectCard
            title="Traineeship"
            description="Participated in the Talents Program at Westdeutscher Rundfunk (WDR), Cologne, focusing on On-Air Design. 2021–2022"
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/68b9afa0fc6e4a4bf6cfaa4547491811e57a3ab9?width=1054"
            imageAlt="WDR Traineeship Project"
            link="/traineeship"
            imageClass="aspect-[4/3] lg:aspect-[3/2]"
          />

          <ProjectCard
            title="Freelance"
            description="Created branding concepts and corporate design solutions for independent businesses, focusing on visual strategy and social media. 2021 – ongoing"
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/991b7875963f7f92f57abc5a70830f9793950ef7?width=1764"
            imageAlt="Freelance Branding Projects"
            link="/freelance"
            imageClass="aspect-[3/2]"
            isReversed
          />

          <ProjectCard
            title="Academic"
            description="Developed a podcast concept addressing taboo topics through community-driven content, supported by a gender-inclusive corporate design and a targeted social media strategy. Bachelor thesis, 2021"
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/7781bb071a40c28580050a9b85917e80951c2929?width=2064"
            imageAlt="Academic Podcast Project"
            link="/academic"
            imageClass="aspect-[3/2]"
          />

          <ProjectCard
            title="Professional"
            description="Created 3D event visuals, editorial layouts for corporate reports, and animated product teasers, as a full-time Visual Designer. 2022 – ongoing"
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/aee7594fb9d2ee7d8e41bc933ab9335f1723f014?width=1480"
            imageAlt="Professional Design Work"
            link="/professional"
            imageClass="aspect-[2/1]"
            isReversed
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Person Section */}
          <div className="border-t border-portfolio-border pt-8">
            <div className="flex justify-between items-start mb-8">
              <h3 className="font-inter text-[25px] font-normal leading-[36px] tracking-[-0.36px] text-portfolio-text">person</h3>
            </div>
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-3">
                <div className="w-full aspect-[4/5] image-placeholder">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8f8453d21efe72562e35106f1ba3c80e3d97a30a?width=490"
                    alt="Marie Stelte"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-5">
                <p className="font-inter text-[20px] font-normal leading-[30px] tracking-[-0.27px] text-portfolio-text">
                  Marie Stelte is a Cologne-based integrated designer. She holds a B.A. in Integrated Design from the Bauhaus Dessau.
                  She works full-time as a Visual Designer in a marketing team and also takes on freelance design projects.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="border-t border-portfolio-border pt-8 font-inter">
            <div className="flex justify-between items-start mb-8">
              <h3 className="font-inter text-[25px] font-normal leading-[36px] tracking-[-0.36px] text-portfolio-text">Education</h3>
            </div>
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 lg:col-start-5">
                <div className="font-inter text-[20px] font-normal leading-[30px] tracking-[-0.27px] text-portfolio-text space-y-4">
                  <p><span className="font-bold">2014 – 2016</span> B.A. in Wood Engineering, HNE University of Applied Sciences, Eberswalde</p>
                  <p><span className="font-bold">2017 – 2021</span> B.A. in Integrated Design Anhalt University of Applied Sciences, Dessau</p>
                  <p><span className="font-bold">2019 – 2020</span> Erasmus Semester in Fine Arts University of the Arts Poznań, Poland</p>
                  <p><span className="font-bold">2021</span> Certified Training in Online Marketing Google Zukunftswerkstatt</p>
                  <p><span className="font-bold">2022</span> Advanced Training in Design Thinking, ARD.ZDF Media Academy, Cologne</p>
                  <p><span className="font-bold">2022</span> Advanced Training in Argumentation and Discussion Techniques, ARD.ZDF Media Academy, Cologne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Section */}
          <div className="border-t border-portfolio-border pt-8">
            <div className="flex justify-between items-start mb-8">
              <h3 className="font-montserrat text-[25px] font-normal leading-[36px] tracking-[-0.36px] text-portfolio-text"><span className="font-inter">Work</span></h3>
            </div>
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 lg:col-start-5">
                <div className="font-inter text-[20px] font-normal leading-[30px] tracking-[-0.27px] text-portfolio-text space-y-4">
                  <p><span className="font-bold">2018</span> Student Assistant to Prof. Brigitte Hartwig, Anhalt University of Applied Sciences, Dessau</p>
                  <p><span className="font-bold">2010 – 2021</span> Archiving and Digitizing the Negative Collection of Photographer Harald Hauswald, Berlin</p>
                  <p><span className="font-bold">since 2020</span> Freelance Designer</p>
                  <p><span className="font-bold">2021 – 2022</span> Traineeship in On-Air Design, Westdeutscher Rundfunk (WDR), Cologne</p>
                  <p><span className="font-bold">since 2022</span> Visual Designer at CONTACT Software, Cologne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-16">
            <p className="body-small text-portfolio-text">
              Copyright 2025 Marie Stelte
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
