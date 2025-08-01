import { Link } from "react-router-dom";

const SmileyIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.5835 45.8333C66.3196 45.8333 67.7953 45.2257 69.0106 44.0104C70.2259 42.7951 70.8335 41.3194 70.8335 39.5833C70.8335 37.8472 70.2259 36.3715 69.0106 35.1563C67.7953 33.941 66.3196 33.3333 64.5835 33.3333C62.8474 33.3333 61.3717 33.941 60.1564 35.1563C58.9411 36.3715 58.3335 37.8472 58.3335 39.5833C58.3335 41.3194 58.9411 42.7951 60.1564 44.0104C61.3717 45.2257 62.8474 45.8333 64.5835 45.8333ZM35.4168 45.8333C37.1529 45.8333 38.6286 45.2257 39.8439 44.0104C41.0592 42.7951 41.6668 41.3194 41.6668 39.5833C41.6668 37.8472 41.0592 36.3715 39.8439 35.1563C38.6286 33.941 37.1529 33.3333 35.4168 33.3333C33.6807 33.3333 32.205 33.941 30.9897 35.1563C29.7745 36.3715 29.1668 37.8472 29.1668 39.5833C29.1668 41.3194 29.7745 42.7951 30.9897 44.0104C32.205 45.2257 33.6807 45.8333 35.4168 45.8333ZM50.0002 72.9167C54.7224 72.9167 59.0106 71.5799 62.8647 68.9062C66.7189 66.2326 69.514 62.7083 71.2502 58.3333H28.7502C30.4863 62.7083 33.2814 66.2326 37.1356 68.9062C40.9897 71.5799 45.2779 72.9167 50.0002 72.9167ZM50.0002 91.6667C44.2363 91.6667 38.8196 90.5729 33.7502 88.3854C28.6807 86.1979 24.271 83.2292 20.521 79.4792C16.771 75.7292 13.8022 71.3194 11.6147 66.25C9.42725 61.1806 8.3335 55.7639 8.3335 50C8.3335 44.2361 9.42725 38.8194 11.6147 33.75C13.8022 28.6806 16.771 24.2708 20.521 20.5208C24.271 16.7708 28.6807 13.8021 33.7502 11.6146C38.8196 9.42709 44.2363 8.33334 50.0002 8.33334C55.764 8.33334 61.1807 9.42709 66.2502 11.6146C71.3196 13.8021 75.7293 16.7708 79.4793 20.5208C83.2293 24.2708 86.1981 28.6806 88.3856 33.75C90.5731 38.8194 91.6668 44.2361 91.6668 50C91.6668 55.7639 90.5731 61.1806 88.3856 66.25C86.1981 71.3194 83.2293 75.7292 79.4793 79.4792C75.7293 83.2292 71.3196 86.1979 66.2502 88.3854C61.1807 90.5729 55.764 91.6667 50.0002 91.6667ZM50.0002 83.3333C59.3057 83.3333 67.1877 80.1042 73.646 73.6458C80.1043 67.1875 83.3335 59.3056 83.3335 50C83.3335 40.6944 80.1043 32.8125 73.646 26.3542C67.1877 19.8958 59.3057 16.6667 50.0002 16.6667C40.6946 16.6667 32.8127 19.8958 26.3543 26.3542C19.896 32.8125 16.6668 40.6944 16.6668 50C16.6668 59.3056 19.896 67.1875 26.3543 73.6458C32.8127 80.1042 40.6946 83.3333 50.0002 83.3333Z" fill="#1D1B20"/>
  </svg>
);

export default function Traineeship() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-start">
          <Link to="/" className="heading-large text-portfolio-text hover:opacity-80 transition-opacity">
            Marie Stelte
          </Link>
          <div className="mt-8">
            <SmileyIcon />
          </div>
        </div>
      </header>

      {/* Project Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <h1 className="heading-large text-portfolio-text mb-8">
                Traineeship
              </h1>
              <p className="body-medium text-portfolio-text-muted leading-relaxed">
                Visual identities for WDR aktuell, MoMa, and Samstagskolumne (now Impuls), 
                including logos, social templates, and an icon set to ensure brand consistency 
                across platforms.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="w-full aspect-[4/3] lg:aspect-[3/2]">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a31ed6b2d893cb0cadc1b6d8d5a951e02983e63c?width=1336"
                  alt="WDR Traineeship Visual Identity Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:gap-16">
            {/* Row 1 */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="w-full aspect-[4/3] image-placeholder">
                <span className="text-gray-500">Image 01</span>
              </div>
              <div className="w-full aspect-[4/3] image-placeholder">
                <span className="text-gray-500">Image 02</span>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="w-full aspect-[4/3] image-placeholder">
                <span className="text-gray-500">Image 03</span>
              </div>
              <div className="w-full aspect-[4/3] image-placeholder">
                <span className="text-gray-500">Image 04</span>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="w-full aspect-[4/3] image-placeholder">
                <span className="text-gray-500">Image 05</span>
              </div>
              <div className="w-full aspect-[4/3] image-placeholder">
                <span className="text-gray-500">Image 06</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="body-small text-portfolio-text">
            Copyright 2025 Marie Stelte
          </p>
        </div>
      </footer>
    </div>
  );
}
