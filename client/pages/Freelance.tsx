import { Link } from "react-router-dom";

const SmileyIcon = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64.583 45.8333C66.3191 45.8333 67.7948 45.2257 69.0101 44.0104C70.2254 42.7951 70.833 41.3194 70.833 39.5833C70.833 37.8472 70.2254 36.3715 69.0101 35.1563C67.7948 33.941 66.3191 33.3333 64.583 33.3333C62.8469 33.3333 61.3712 33.941 60.1559 35.1563C58.9406 36.3715 58.333 37.8472 58.333 39.5833C58.333 41.3194 58.9406 42.7951 60.1559 44.0104C61.3712 45.2257 62.8469 45.8333 64.583 45.8333ZM35.4163 45.8333C37.1525 45.8333 38.6281 45.2257 39.8434 44.0104C41.0587 42.7951 41.6663 41.3194 41.6663 39.5833C41.6663 37.8472 41.0587 36.3715 39.8434 35.1563C38.6281 33.941 37.1525 33.3333 35.4163 33.3333C33.6802 33.3333 32.2045 33.941 30.9893 35.1563C29.774 36.3715 29.1663 37.8472 29.1663 39.5833C29.1663 41.3194 29.774 42.7951 30.9893 44.0104C32.2045 45.2257 33.6802 45.8333 35.4163 45.8333ZM49.9997 72.9167C54.7219 72.9167 59.0101 71.5799 62.8643 68.9062C66.7184 66.2326 69.5136 62.7083 71.2497 58.3333H28.7497C30.4858 62.7083 33.2809 66.2326 37.1351 68.9062C40.9893 71.5799 45.2775 72.9167 49.9997 72.9167ZM49.9997 91.6667C44.2358 91.6667 38.8191 90.5729 33.7497 88.3854C28.6802 86.1979 24.2705 83.2292 20.5205 79.4792C16.7705 75.7292 13.8018 71.3194 11.6143 66.25C9.42676 61.1806 8.33301 55.7639 8.33301 50C8.33301 44.2361 9.42676 38.8194 11.6143 33.75C13.8018 28.6806 16.7705 24.2708 20.5205 20.5208C24.2705 16.7708 28.6802 13.8021 33.7497 11.6146C38.8191 9.42709 44.2358 8.33334 49.9997 8.33334C55.7636 8.33334 61.1802 9.42709 66.2497 11.6146C71.3191 13.8021 75.7288 16.7708 79.4788 20.5208C83.2288 24.2708 86.1976 28.6806 88.3851 33.75C90.5726 38.8194 91.6663 44.2361 91.6663 50C91.6663 55.7639 90.5726 61.1806 88.3851 66.25C86.1976 71.3194 83.2288 75.7292 79.4788 79.4792C75.7288 83.2292 71.3191 86.1979 66.2497 88.3854C61.1802 90.5729 55.7636 91.6667 49.9997 91.6667ZM49.9997 83.3333C59.3052 83.3333 67.1872 80.1042 73.6455 73.6458C80.1038 67.1875 83.333 59.3056 83.333 50C83.333 40.6944 80.1038 32.8125 73.6455 26.3542C67.1872 19.8958 59.3052 16.6667 49.9997 16.6667C40.6941 16.6667 32.8122 19.8958 26.3538 26.3542C19.8955 32.8125 16.6663 40.6944 16.6663 50C16.6663 59.3056 19.8955 67.1875 26.3538 73.6458C32.8122 80.1042 40.6941 83.3333 49.9997 83.3333Z"
      fill="#1D1B20"
    />
  </svg>
);

export default function Freelance() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-start">
          <Link
            to="/"
            className="heading-large text-portfolio-text hover:opacity-80 transition-opacity"
          >
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
                Freelance
              </h1>
              <p className="body-medium text-portfolio-text-muted leading-relaxed">
                Brand identity for Stelte Schmuck, including logo design,
                corporate design, and social media presence. Additional
                freelance projects encompassed diverse print and digital media,
                focusing on addressing individual brand identities and
                delivering tailored solutions for clients.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="w-full aspect-[3/2]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b44561dc157b4159f044593e710c60a555976341?width=2316"
                  alt="Stelte Schmuck Brand Identity"
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
