// import React from "react";

// function Footer() {
//   const socials = [
//     {
//       name: "Github",
//       href: "https://github.com/asyncapi",
//       imgUrl: "/img/Github.png",
//     },
//     {
//       name: "Linkedin",
//       href: "https://www.linkedin.com/company/asyncapi/",
//       imgUrl: "/img/Linkedln.png",
//     },
//     {
//       name: "Tweeter(X)",
//       href: "https://twitter.com/asyncapispec",
//       imgUrl: "/img/twitter_new.png",
//     },
//   ];
//   return (
//     <div className="mt-[160px] w-full flex justify-center border border-t-[#333] container py-[96px]">
//       <div className="w-[1131px]">
//         <img src="/img/logo.png" className="w-[150px]" />
//         <div className="mt-[82px] flex items-center justify-between sm:flex-col sm:items-start">
//           <div className="mt-2 text-[14px] text-gray py-4 underline">
//             <a
//               href="https://github.com/asyncapi/.github/blob/master/CODE_OF_CONDUCT.md"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-sky-500 duration-200 ease-in-out"
//             >
//               Code of Conduct
//             </a>
//           </div>
//           <div className="flex flex-col justify-between items-start gap-2 w-[284px] sm:mt-6">
//             <div className="text-[16px] text-slate-300">
//               <span>Follow us</span>
//             </div>
//             <div className="flex justify-between items-center gap-3">
//               {socials.map((social, index) => {
//                 return (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="w-12 h-12 rounded-lg border-[1.5px] border-[#556061] flex items-center justify-center hover:border-[#AD20E2] duration-150 ease-in-out"
//                   >
//                     <img
//                       src={social.imgUrl}
//                       alt={social.name}
//                       className="w-8 h-8"
//                     />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";

function Footer() {
  const socials = [
    {
      name: "Website",
      href: "https://decipher.ac/",
      imgUrl: "/img/website.png",
    },

    {
      name: "Medium",
      href: "https://medium.com/decipher-media",
      imgUrl: "/img/medium.png",
    },

    {
      name: "Twitter(X)",
      href: "https://twitter.com/decipherglobal",
      imgUrl: "/img/x-twitter.png",
    },

    {
      name: "Github",
      href: "https://github.com/decipherhub",
      imgUrl: "/img/github.png",
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/decipher_snu",
      imgUrl: "/img/instagram.png",
    },

    {
      name: "Youtube",
      href: "https://www.youtube.com/@decipher-media",
      imgUrl: "/img/youtube.png",
    },

    {
      name: "Facebook",
      href: "https://www.facebook.com/decipher.ac",
      imgUrl: "/img/facebook.png",
    },
  ];

  return (
    <div className="mt-[160px] w-full flex justify-center border-t border-[#333] py-[96px]">
      <div className="flex items-center justify-between w-full max-w-[1131px] px-8">
        {/* 로고 */}
        <div className="flex items-center">
          <img src="/img/logo.png" className="w-[150px]" alt="Logo" />
        </div>

        {/* Follow us 섹션 */}
        <div className="flex flex-col items-center">
          {/* "Follow us" 텍스트 */}
          <div className="text-[16px] text-slate-300 mb-2">Follow us</div>
          {/* Follow us 링크들 */}
          <div className="flex justify-center items-center gap-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-30 h-30 rounded-lg border-[1.5px] border-[#556061] flex items-center justify-center hover:border-[#AD20E2] duration-150 ease-in-out"
              >
                <img
                  src={social.imgUrl}
                  alt={social.name}
                  className="w-10 h-10"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Code of Conduct */}
        <div className="flex items-center">
          <a
            href="mailto:deference@decipher.ac"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-[14px] text-gray py-4 underline hover:text-sky-500 duration-200 ease-in-out mr-6"
          >
            <img src="/img/email.png" alt="Icon" className="w-4 h-4 mr-2" />
            Contact
          </a>
          <a
            href="https://github.com/wonj1012/deference-website/blob/main/CODE_OF_CONDUCT.md"
            target="_blank"
            rel="noreferrer"
            className="text-[14px] text-gray py-4 underline hover:text-sky-500 duration-200 ease-in-out"
          >
            Code of Conduct
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
