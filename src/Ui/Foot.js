import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "School",
    links: ["About Us", "Principal's Message", "Our Team", "Achievements"],
  },
  {
    title: "Admissions",
    links: ["How to Apply", "Fee Structure", "Scholarships", "Contact Us"],
  },
  {
    title: "Academics",
    links: ["Curriculum", "Syllabus", "Exam Schedule", "Results"],
  },
  {
    title: "Resources",
    links: ["Library", "E-Learning", "Downloads", "Notices"],
  },
];

const currentYear = new Date().getFullYear();

const Foot = () => {
  return (
    <footer className="relative bg-blue-900 w-full text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                className="mb-4 font-bold uppercase opacity-80"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, index) => (
                  <Typography
                    key={index}
                    as="li"
                    className="font-normal text-white opacity-90"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-center justify-center border-t border-blue-800 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal md:mb-0"
          >
            &copy; {currentYear} Your School Name. All Rights Reserved.
          </Typography>

          <div className="flex gap-4 sm:justify-center text-white">
           {/* Facebook */}
<a
  href="https://www.facebook.com/search/top?q=rolpa%20polytechnic%20institute" 
  target="_blank"
  rel="noopener noreferrer"
  className="hover:opacity-100 opacity-80 transition-opacity"
>
  <svg
    className="h-5 w-5 fill-current"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
</a>

            {/* Instagram */}
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.755 4.755 0 0 1 12 7.25Zm0 1.5a3.25 3.25 0 1 0 3.25 3.25A3.254 3.254 0 0 0 12 8.75Zm4.75-2.5a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M10 15l5.19-3L10 9v6zm12-3c0-2.42-.19-4.07-.63-5.15-.32-.8-1-1.49-1.8-1.8C18.49 5.19 16.83 5 14.41 5H9.59C7.17 5 5.51 5.19 4.43 5.63c-.8.32-1.48 1-1.8 1.8C2.19 8.93 2 10.6 2 13s.19 4.07.63 5.15c.32.8 1 1.49 1.8 1.8 1.08.44 2.74.63 5.16.63h4.82c2.42 0 4.08-.19 5.16-.63.8-.32 1.49-1 1.8-1.8.44-1.08.63-2.74.63-5.15z" />
              </svg>
            </a>
          </div>
         
        </div>
        <div>
           <marquee
  behavior="scroll"
  direction="left"
  scrollamount="5"
  className="bg-light-blue-200 text-white py-2  font-semibold"
>
  CTEVT - Council for Technical Education and Vocational Training
</marquee>
</div>
      </div>
    </footer>
  
  );
};

export default Foot;