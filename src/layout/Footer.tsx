export default function Footer() {
  return (
    <>
      <section id="contacts" className="py-20 bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-black">Контакти</h2>
          <a
            href="https://www.instagram.com/tr__fest/"
            className="my-6 hover:scale-110 hover:transition-all ease-linear duration-200 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </a>
          <p>+380 98 047 3417</p>
        </div>
      </section>
    </>
  );
}
