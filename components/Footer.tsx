import { useRouter } from "next/router";
import Link from "next/link";
import { useState, ReactNode, ReactElement, FC, useCallback } from "react";
import cn from "classnames";
import { ThemeSwitch } from "nextra-theme-docs";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="text-sm text-black dark:text-white">{children}</h3>;
}

const navigation = {
  general: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
  source: [
    { name: "DKG", href: "https://webb-tools.github.io/dkg-substrate/" },
    { name: "Relayer", href: "https://webb-tools.github.io/relayer/" },
    { name: "Webb.js", href: "https://webb-tools.github.io/webb.js/" },
    {
      name: "Solidity",
      href: "https://webb-tools.github.io/protocol-solidity/",
    },
    {
      name: "Substrate",
      href: "https://webb-tools.github.io/protocol-substrate/",
    },
    //TODO: need source docs
    // { name: "ZK Gadgets", href: "/docs" },
  ],
  ecosystem: [
    {
      name: "Tangle",
      href: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftangle.webb.tools#/explorer",
    },
    { name: "Statistics", href: "https://www.stats-dev.webb.tools/" },
    // TODO: add bridge link
    {
      name: "Hubble Bridge",
      href: "https://development-hubble-bridge.netlify.app/",
    },
  ],
  community: [
    {
      name: "GitHub",
      href: "https://github.com/webb-tools",
    },
    {
      name: "Telegram",
      href: "https://t.me/webbprotocol",
    },
    {
      name: "Discord",
      href: "https://discord.com/invite/cv8EfJu3Tn",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/webbprotocol",
    },
    {
      name: "Commonwealth",
      href: "https://commonwealth.im/webb",
    },
  ],
  company: [
    { name: "Webb", href: "https://webb.tools" },
    {
      name: "Careers",
      href: "https://angel.co/company/webb-4/jobs",
    },
  ],
  legal: [
    // TODO: setup links
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/terms" },
  ],
};

export function FooterContent() {
  // State for subscription success
  const [success, setSuccess] = useState(false);

  return (
    <div className="w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="w-full py-8 mx-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Resources</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Documentation</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.source.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Ecosystem</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.ecosystem.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Company</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Legal</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Community</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.community.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {!success && (
            <div className="mt-12 xl:!mt-0">
              <FooterHeader>Subscribe to our newsletter</FooterHeader>
              <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
                Subscribe to the Webb newsletter and stay updated on new
                releases and features, guides, and research.
              </p>

              <SubmitForm onSuccess={() => setSuccess(true)} />
            </div>
          )}
          {success && (
            <div className="mt-12 xl:!mt-0">
              <FooterHeader>Thanks for Subscribing!</FooterHeader>
              <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
                Thanks for signing up! Keep an eye on your inbox for updates
                from the Webb community.
              </p>
            </div>
          )}
        </div>

        <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <a
              href="https://webb.tools"
              target="_blank"
              rel="noreferrer"
              title="Webb homepage"
            >
              <svg
                width="96"
                height="29"
                className="block dark:hidden"
                viewBox="0 0 96 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5294 14.4748V16.0724C11.5294 17.1418 12.4052 18.0183 13.4764 18.0183H15.0734C16.1438 18.0183 17.0196 17.1418 17.0196 16.0724V14.4748C17.0196 13.4046 16.1438 12.5281 15.0734 12.5281H13.4764C12.4052 12.5281 11.5294 13.4046 11.5294 14.4748Z"
                  fill="#B5A9F2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5294 9.50852C11.5294 11.0717 10.3002 12.3423 8.78614 12.3423C7.27286 12.3423 6.04368 13.6121 6.04368 15.1845C6.04368 16.7477 4.81369 18.0183 3.29146 18.0183C1.77819 18.0183 0.549011 16.7477 0.549011 15.1845C0.549011 13.6121 1.77819 12.3423 3.29146 12.3423C4.81369 12.3423 6.04368 11.0717 6.04368 9.50852C6.04368 7.94447 4.81369 6.67472 3.29146 6.67472H2.49372C1.42734 6.67472 0.549011 5.76656 0.549011 4.665V3.00844C0.549011 1.90688 1.42734 0.998718 2.49372 0.998718H4.09735C5.16454 0.998718 6.04368 1.90688 6.04368 3.00844V3.84093C6.04368 5.40498 7.27286 6.67472 8.78614 6.67472C10.3002 6.67472 11.5294 7.94447 11.5294 9.50852Z"
                  fill="#DD4800"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0196 25.4504V27.054C17.0196 28.1204 16.1114 28.9987 15.0098 28.9987H13.354C12.2515 28.9987 11.3433 28.1204 11.3433 27.054V26.2562C11.3433 24.734 10.0735 23.504 8.50938 23.504C6.94609 23.504 5.67629 24.734 5.67629 26.2562C5.67629 27.7703 4.40564 28.9987 2.8331 28.9987C1.26981 28.9987 0 27.7703 0 26.2562C0 24.734 1.26981 23.504 2.8331 23.504C4.40564 23.504 5.67629 22.2757 5.67629 20.7616V19.9638C5.67629 18.8885 6.57524 18.0183 7.68527 18.0183H9.3335C10.4444 18.0183 11.3433 18.8885 11.3433 19.9638V20.7616C11.3433 22.2757 12.614 23.504 14.1773 23.504H15.0098C16.1114 23.504 17.0196 24.3832 17.0196 25.4504Z"
                  fill="#007D0D"
                />
                <mask
                  id="mask0_2689_34"
                  maskUnits="userSpaceOnUse"
                  x="17"
                  y="11"
                  width="11"
                  height="18"
                >
                  <path
                    d="M17.0196 11.9791H28V28.9987H17.0196V11.9791Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_2689_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.0002 26.1656C28.0002 27.7289 26.7711 28.9987 25.249 28.9987C23.735 28.9987 22.5058 27.7289 22.5058 26.1656C22.5058 24.5931 21.2767 23.3224 19.7627 23.3224H18.9642C17.8906 23.3224 17.0196 22.4235 17.0196 21.3126V19.6652C17.0196 18.5543 17.8906 17.6554 18.9642 17.6554H19.7627C21.2767 17.6554 22.5058 16.3847 22.5058 14.8214C22.5058 13.2489 23.735 11.9791 25.249 11.9791C26.7711 11.9791 28.0002 13.2489 28.0002 14.8214C28.0002 16.3847 26.7711 17.6554 25.249 17.6554C23.735 17.6554 22.5058 18.9252 22.5058 20.4893C22.5058 22.0526 23.735 23.3224 25.249 23.3224C26.7711 23.3224 28.0002 24.5931 28.0002 26.1656Z"
                    fill="#67A0EE"
                  />
                </g>
                <mask
                  id="mask1_2689_34"
                  maskUnits="userSpaceOnUse"
                  x="10"
                  y="0"
                  width="18"
                  height="12"
                >
                  <path
                    d="M10.9804 0.998718H28V11.9791H10.9804V0.998718Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_2689_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.0003 2.94396V4.54821C28.0003 5.61363 27.0921 6.49267 25.9897 6.49267H25.158C23.5939 6.49267 22.3242 7.72169 22.3242 9.23559C22.3242 10.7495 21.0544 11.9793 19.4903 11.9793C17.9263 11.9793 16.6565 10.7495 16.6565 9.23559C16.6565 7.72169 15.3867 6.49267 13.8142 6.49267H12.9893C11.8886 6.49267 10.9804 5.61363 10.9804 4.54821V2.94396C10.9804 1.87772 11.8886 0.998688 12.9893 0.998688H14.6467C15.7483 0.998688 16.6565 1.87772 16.6565 2.94396V3.74975C16.6565 5.26446 17.9263 6.49267 19.4903 6.49267C21.0544 6.49267 22.3242 5.26446 22.3242 3.74975V2.94396C22.3242 1.87772 23.2324 0.998688 24.3339 0.998688H25.9897C27.0921 0.998688 28.0003 1.87772 28.0003 2.94396Z"
                    fill="#F4C328"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.8753 20.2604V20.3157C49.8753 20.3232 49.8527 20.3273 49.8075 20.3273C49.7774 20.3273 49.7624 20.3232 49.7624 20.3157C49.7624 20.3091 49.7548 20.2975 49.7398 20.2818L48.0957 13.8527C47.9008 13.0817 47.5812 12.5033 47.1386 12.1174C46.6951 11.7323 46.1212 11.5389 45.415 11.5389C44.7248 11.5389 44.1542 11.7364 43.7032 12.1289C43.2531 12.5223 42.9151 13.1115 42.69 13.8974L41.0451 20.2818C41.0602 20.2818 41.0644 20.286 41.0568 20.2934C41.0493 20.3017 41.0301 20.305 41.0008 20.305C40.9698 20.305 40.9514 20.3017 40.9439 20.2934C40.9363 20.286 40.933 20.2752 40.933 20.2604L38.9961 11.8728H36L38.1394 20.8611C38.2749 21.3801 38.4891 21.8139 38.7819 22.1626C39.0748 22.5114 39.4195 22.7708 39.8177 22.9411C40.216 23.1113 40.6176 23.1972 41.0225 23.1972C41.6684 23.1972 42.2282 23.0039 42.7009 22.6188C43.1744 22.2329 43.5083 21.6478 43.7032 20.8611L45.3707 14.2973C45.3548 14.2833 45.3623 14.2758 45.3933 14.2758C45.4376 14.2758 45.4527 14.2833 45.4376 14.2973L47.1043 20.8611C47.2992 21.6478 47.6339 22.2329 48.1074 22.6188C48.5802 23.0039 49.1399 23.1972 49.785 23.1972C50.1907 23.1972 50.5923 23.1113 50.9906 22.9411C51.388 22.7708 51.7336 22.5114 52.0264 22.1626C52.3192 21.8139 52.525 21.3801 52.6464 20.8611L54.6954 11.8728H51.7444L49.8753 20.2604Z"
                  fill="#282324"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M92.1104 18.7916C91.8702 19.2221 91.5356 19.5667 91.108 19.8262C90.6805 20.0856 90.1885 20.2162 89.633 20.2162C89.0925 20.2162 88.6072 20.0856 88.1797 19.8262C87.7521 19.5667 87.4141 19.2221 87.1665 18.7916C86.918 18.3619 86.7942 17.895 86.7942 17.3909C86.7942 16.8711 86.918 16.3935 87.1665 15.9547C87.4141 15.5175 87.7521 15.1729 88.1797 14.92C88.6072 14.6688 89.0925 14.5424 89.633 14.5424C90.1885 14.5424 90.6805 14.6688 91.108 14.92C91.5356 15.1729 91.8702 15.5175 92.1104 15.9547C92.3505 16.3935 92.471 16.8711 92.471 17.3909C92.471 17.895 92.3505 18.3619 92.1104 18.7916ZM94.9257 14.3532C94.4304 13.4714 93.7435 12.7847 92.865 12.2955C91.9865 11.8063 90.9691 11.5617 89.8129 11.5617C89.0021 11.5617 88.2508 11.7394 87.5606 12.0947C87.2819 12.2385 87.0301 12.4063 86.7942 12.5889V6.8002H83.5956V17.3909C83.5956 18.5023 83.8583 19.4973 84.3846 20.3716C84.91 21.2467 85.6262 21.9367 86.5356 22.4408C87.4434 22.944 88.4759 23.1969 89.633 23.1969C90.7884 23.1969 91.8209 22.9333 92.7295 22.4069C93.6381 21.8805 94.3551 21.1764 94.8814 20.2931C95.406 19.4113 95.6695 18.4437 95.6695 17.3909C95.6695 16.248 95.4219 15.2357 94.9257 14.3532Z"
                  fill="#282324"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.8854 16.2334C58.9758 15.8632 59.1297 15.5252 59.3473 15.2211C59.5648 14.917 59.8501 14.6757 60.2032 14.498C60.5562 14.3204 60.9654 14.2311 61.4306 14.2311C61.8815 14.2311 62.2789 14.3171 62.6245 14.4873C62.97 14.6575 63.252 14.8955 63.4695 15.1988C63.6871 15.5029 63.8184 15.8475 63.8636 16.2334H58.8854ZM64.4719 12.2396C63.6461 11.7281 62.6396 11.4719 61.4532 11.4719C60.3119 11.4719 59.3054 11.7363 58.4353 12.2619C57.5635 12.7891 56.8841 13.494 56.3963 14.3757C55.9086 15.2583 55.6642 16.226 55.6642 17.2796C55.6642 18.4514 55.927 19.4785 56.4532 20.3603C56.9787 21.2428 57.7032 21.932 58.6261 22.4295C59.5497 22.9261 60.5897 23.174 61.746 23.174C62.9324 23.174 63.9724 22.9038 64.8659 22.3625C65.7595 21.8213 66.4464 21.0536 66.9275 20.0603L64.4719 18.8356C64.2167 19.3414 63.8444 19.7339 63.3566 20.0157C62.8688 20.2975 62.3241 20.4379 61.7242 20.4379C61.0934 20.4379 60.5487 20.3016 60.0902 20.0264C59.6326 19.7529 59.2795 19.3703 59.0318 18.8811C58.893 18.6059 58.8018 18.3084 58.7507 17.9911H67.0396V17.0565C67.0396 16.0475 66.8179 15.1211 66.3753 14.2757C65.9318 13.4295 65.2976 12.7511 64.4719 12.2396Z"
                  fill="#282324"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M77.8968 18.7916C77.6567 19.2221 77.322 19.5667 76.8945 19.8262C76.4669 20.0856 75.975 20.2162 75.4194 20.2162C74.8789 20.2162 74.3937 20.0856 73.9661 19.8262C73.5386 19.5667 73.2006 19.2221 72.9529 18.7916C72.7044 18.3619 72.5806 17.895 72.5806 17.3909C72.5806 16.8711 72.7044 16.3935 72.9529 15.9547C73.2006 15.5175 73.5386 15.1729 73.9661 14.92C74.3937 14.6688 74.8789 14.5424 75.4194 14.5424C75.975 14.5424 76.4669 14.6688 76.8945 14.92C77.322 15.1729 77.6567 15.5175 77.8968 15.9547C78.1369 16.3935 78.2574 16.8711 78.2574 17.3909C78.2574 17.895 78.1369 18.3619 77.8968 18.7916ZM78.6515 12.2955C77.773 11.8063 76.7556 11.5617 75.5993 11.5617C74.7886 11.5617 74.0372 11.7394 73.347 12.0947C73.0684 12.2385 72.8165 12.4063 72.5806 12.5889V6.8002H69.382V17.3909C69.382 18.5023 69.6447 19.4973 70.171 20.3716C70.6964 21.2467 71.4126 21.9367 72.3221 22.4408C73.2299 22.944 74.2623 23.1969 75.4194 23.1969C76.5749 23.1969 77.6073 22.9333 78.5159 22.4069C79.4246 21.8805 80.1416 21.1764 80.6678 20.2931C81.1924 19.4113 81.456 18.4437 81.456 17.3909C81.456 16.248 81.2083 15.2357 80.7122 14.3532C80.2169 13.4714 79.53 12.7847 78.6515 12.2955Z"
                  fill="#282324"
                />
              </svg>

              <svg
                width="96"
                height="28"
                className="hidden dark:block"
                viewBox="0 0 96 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5294 13.4761V15.0737C11.5294 16.1431 12.4052 17.0196 13.4764 17.0196H15.0734C16.1438 17.0196 17.0196 16.1431 17.0196 15.0737V13.4761C17.0196 12.4059 16.1438 11.5294 15.0734 11.5294H13.4764C12.4052 11.5294 11.5294 12.4059 11.5294 13.4761Z"
                  fill="#B5A9F2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5294 8.5098C11.5294 10.073 10.3002 11.3436 8.78614 11.3436C7.27286 11.3436 6.04368 12.6133 6.04368 14.1858C6.04368 15.749 4.81369 17.0196 3.29146 17.0196C1.77819 17.0196 0.549011 15.749 0.549011 14.1858C0.549011 12.6133 1.77819 11.3436 3.29146 11.3436C4.81369 11.3436 6.04368 10.073 6.04368 8.5098C6.04368 6.94575 4.81369 5.676 3.29146 5.676H2.49372C1.42734 5.676 0.549011 4.76784 0.549011 3.66628V2.00973C0.549011 0.908161 1.42734 0 2.49372 0H4.09735C5.16454 0 6.04368 0.908161 6.04368 2.00973V2.84221C6.04368 4.40626 7.27286 5.676 8.78614 5.676C10.3002 5.676 11.5294 6.94575 11.5294 8.5098Z"
                  fill="#DD4800"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0196 24.4516V26.0553C17.0196 27.1216 16.1114 28 15.0098 28H13.354C12.2515 28 11.3433 27.1216 11.3433 26.0553V25.2575C11.3433 23.7353 10.0735 22.5053 8.50938 22.5053C6.94609 22.5053 5.67629 23.7353 5.67629 25.2575C5.67629 26.7716 4.40564 28 2.8331 28C1.26981 28 0 26.7716 0 25.2575C0 23.7353 1.26981 22.5053 2.8331 22.5053C4.40564 22.5053 5.67629 21.2769 5.67629 19.7629V18.9651C5.67629 17.8898 6.57524 17.0196 7.68527 17.0196H9.3335C10.4444 17.0196 11.3433 17.8898 11.3433 18.9651V19.7629C11.3433 21.2769 12.614 22.5053 14.1773 22.5053H15.0098C16.1114 22.5053 17.0196 23.3845 17.0196 24.4516Z"
                  fill="#007D0D"
                />
                <mask
                  id="mask0_1287_31137"
                  maskUnits="userSpaceOnUse"
                  x="17"
                  y="10"
                  width="11"
                  height="18"
                >
                  <path
                    d="M17.0196 10.9803H28V28H17.0196V10.9803Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1287_31137)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.0002 25.1669C28.0002 26.7301 26.7711 28 25.249 28C23.735 28 22.5059 26.7301 22.5059 25.1669C22.5059 23.5943 21.2767 22.3237 19.7627 22.3237H18.9642C17.8906 22.3237 17.0196 21.4247 17.0196 20.3138V18.6665C17.0196 17.5556 17.8906 16.6566 18.9642 16.6566H19.7627C21.2767 16.6566 22.5059 15.386 22.5059 13.8227C22.5059 12.2502 23.735 10.9803 25.249 10.9803C26.7711 10.9803 28.0002 12.2502 28.0002 13.8227C28.0002 15.386 26.7711 16.6566 25.249 16.6566C23.735 16.6566 22.5059 17.9264 22.5059 19.4906C22.5059 21.0539 23.735 22.3237 25.249 22.3237C26.7711 22.3237 28.0002 23.5943 28.0002 25.1669Z"
                    fill="#67A0EE"
                  />
                </g>
                <mask
                  id="mask1_1287_31137"
                  maskUnits="userSpaceOnUse"
                  x="10"
                  y="0"
                  width="18"
                  height="11"
                >
                  <path d="M10.9804 0H28V10.9804H10.9804V0Z" fill="white" />
                </mask>
                <g mask="url(#mask1_1287_31137)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.0003 1.94528V3.54952C28.0003 4.61494 27.0921 5.49398 25.9897 5.49398H25.158C23.5939 5.49398 22.3242 6.723 22.3242 8.2369C22.3242 9.7508 21.0544 10.9806 19.4903 10.9806C17.9262 10.9806 16.6565 9.7508 16.6565 8.2369C16.6565 6.723 15.3867 5.49398 13.8142 5.49398H12.9893C11.8886 5.49398 10.9804 4.61494 10.9804 3.54952V1.94528C10.9804 0.879037 11.8886 0 12.9893 0H14.6467C15.7483 0 16.6565 0.879037 16.6565 1.94528V2.75106C16.6565 4.26577 17.9262 5.49398 19.4903 5.49398C21.0544 5.49398 22.3242 4.26577 22.3242 2.75106V1.94528C22.3242 0.879037 23.2323 0 24.3339 0H25.9897C27.0921 0 28.0003 0.879037 28.0003 1.94528Z"
                    fill="#F4C328"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.8753 19.2616V19.317C49.8753 19.3244 49.8527 19.3285 49.8075 19.3285C49.7774 19.3285 49.7624 19.3244 49.7624 19.317C49.7624 19.3104 49.7548 19.2988 49.7398 19.2831L48.0957 12.854C47.9008 12.083 47.5812 11.5045 47.1386 11.1186C46.6951 10.7335 46.1212 10.5402 45.415 10.5402C44.7248 10.5402 44.1542 10.7377 43.7032 11.1302C43.2531 11.5235 42.9151 12.1127 42.69 12.8986L41.0451 19.2831C41.0602 19.2831 41.0644 19.2872 41.0568 19.2947C41.0493 19.3029 41.0301 19.3062 41.0008 19.3062C40.9698 19.3062 40.9514 19.3029 40.9439 19.2947C40.9363 19.2872 40.933 19.2765 40.933 19.2616L38.9961 10.874H36L38.1394 19.8624C38.2749 20.3813 38.4891 20.8152 38.7819 21.1639C39.0748 21.5126 39.4195 21.7721 39.8177 21.9423C40.216 22.1126 40.6176 22.1985 41.0225 22.1985C41.6684 22.1985 42.2282 22.0051 42.7009 21.62C43.1744 21.2341 43.5083 20.6491 43.7032 19.8624L45.3707 13.2986C45.3548 13.2845 45.3623 13.2771 45.3933 13.2771C45.4376 13.2771 45.4527 13.2845 45.4376 13.2986L47.1043 19.8624C47.2992 20.6491 47.6339 21.2341 48.1074 21.62C48.5802 22.0051 49.1399 22.1985 49.785 22.1985C50.1907 22.1985 50.5923 22.1126 50.9906 21.9423C51.388 21.7721 51.7336 21.5126 52.0264 21.1639C52.3192 20.8152 52.525 20.3813 52.6464 19.8624L54.6954 10.874H51.7444L49.8753 19.2616Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M92.1104 17.7928C91.8702 18.2233 91.5356 18.5679 91.108 18.8274C90.6805 19.0869 90.1885 19.2175 89.633 19.2175C89.0925 19.2175 88.6072 19.0869 88.1797 18.8274C87.7521 18.5679 87.4141 18.2233 87.1665 17.7928C86.918 17.3631 86.7942 16.8962 86.7942 16.3921C86.7942 15.8723 86.918 15.3947 87.1665 14.9559C87.4141 14.5188 87.7521 14.1742 88.1797 13.9213C88.6072 13.6701 89.0925 13.5437 89.633 13.5437C90.1885 13.5437 90.6805 13.6701 91.108 13.9213C91.5356 14.1742 91.8702 14.5188 92.1104 14.9559C92.3505 15.3947 92.471 15.8723 92.471 16.3921C92.471 16.8962 92.3505 17.3631 92.1104 17.7928ZM94.9257 13.3544C94.4304 12.4727 93.7435 11.786 92.865 11.2968C91.9865 10.8076 90.9691 10.563 89.8129 10.563C89.0021 10.563 88.2508 10.7406 87.5606 11.096C87.2819 11.2398 87.0301 11.4075 86.7942 11.5901V5.80145H83.5956V16.3921C83.5956 17.5036 83.8583 18.4985 84.3846 19.3728C84.91 20.2479 85.6262 20.938 86.5356 21.442C87.4434 21.9453 88.4759 22.1982 89.633 22.1982C90.7884 22.1982 91.8209 21.9345 92.7295 21.4082C93.6381 20.8818 94.3551 20.1777 94.8814 19.2943C95.406 18.4126 95.6695 17.4449 95.6695 16.3921C95.6695 15.2493 95.4219 14.237 94.9257 13.3544Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.8854 15.2347C58.9758 14.8644 59.1297 14.5265 59.3472 14.2224C59.5648 13.9183 59.8501 13.677 60.2032 13.4993C60.5562 13.3216 60.9654 13.2324 61.4306 13.2324C61.8815 13.2324 62.2789 13.3183 62.6245 13.4885C62.97 13.6588 63.252 13.8968 63.4695 14.2C63.687 14.5041 63.8184 14.8487 63.8636 15.2347H58.8854ZM64.4718 11.2408C63.646 10.7293 62.6395 10.4731 61.4531 10.4731C60.3119 10.4731 59.3054 10.7376 58.4353 11.2631C57.5635 11.7904 56.8841 12.4953 56.3963 13.377C55.9085 14.2595 55.6642 15.2272 55.6642 16.2808C55.6642 17.4526 55.9269 18.4798 56.4532 19.3615C56.9786 20.2441 57.7032 20.9333 58.626 21.4307C59.5497 21.9274 60.5897 22.1753 61.746 22.1753C62.9324 22.1753 63.9724 21.9051 64.8659 21.3638C65.7595 20.8225 66.4464 20.0548 66.9275 19.0615L64.4718 17.8369C64.2167 18.3426 63.8443 18.7351 63.3566 19.0169C62.8688 19.2987 62.3241 19.4392 61.7242 19.4392C61.0934 19.4392 60.5487 19.3028 60.0902 19.0277C59.6325 18.7541 59.2795 18.3715 59.0318 17.8823C58.8929 17.6071 58.8017 17.3096 58.7507 16.9923H67.0396V16.0577C67.0396 15.0487 66.8179 14.1224 66.3753 13.277C65.9318 12.4308 65.2976 11.7524 64.4718 11.2408Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M77.8968 17.7928C77.6566 18.2233 77.322 18.5679 76.8944 18.8274C76.4669 19.0869 75.9749 19.2175 75.4194 19.2175C74.8789 19.2175 74.3936 19.0869 73.9661 18.8274C73.5386 18.5679 73.2005 18.2233 72.9529 17.7928C72.7044 17.3631 72.5806 16.8962 72.5806 16.3921C72.5806 15.8723 72.7044 15.3947 72.9529 14.9559C73.2005 14.5188 73.5386 14.1742 73.9661 13.9213C74.3936 13.6701 74.8789 13.5437 75.4194 13.5437C75.9749 13.5437 76.4669 13.6701 76.8944 13.9213C77.322 14.1742 77.6566 14.5188 77.8968 14.9559C78.1369 15.3947 78.2574 15.8723 78.2574 16.3921C78.2574 16.8962 78.1369 17.3631 77.8968 17.7928ZM78.6514 11.2968C77.7729 10.8076 76.7555 10.563 75.5993 10.563C74.7885 10.563 74.0372 10.7406 73.347 11.096C73.0684 11.2398 72.8165 11.4075 72.5806 11.5901V5.80145H69.382V16.3921C69.382 17.5036 69.6447 18.4985 70.171 19.3728C70.6964 20.2479 71.4126 20.938 72.322 21.442C73.2298 21.9453 74.2623 22.1982 75.4194 22.1982C76.5748 22.1982 77.6073 21.9345 78.5159 21.4082C79.4245 20.8818 80.1415 20.1777 80.6678 19.2943C81.1924 18.4126 81.456 17.4449 81.456 16.3921C81.456 15.2493 81.2083 14.237 80.7122 13.3544C80.2168 12.4727 79.5299 11.786 78.6514 11.2968Z"
                  fill="white"
                />
              </svg>
            </a>
            <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
              &copy; {new Date().getFullYear()} Webb Technologies, Inc. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SubmitForm: FC<{ onSuccess: (isSuccess: boolean) => void }> = ({
  onSuccess,
}) => {
  const [email, setEmail] = useState("");
  // State for error handling
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <form
        className="mt-4 sm:flex sm:max-w-md"
        onSubmit={(e) => {
          fetch("/api/subscribers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }).then((res) => {
            if (res.ok) {
              setError(null);
              onSuccess(true);
              return res.json();
            } else {
              // error handling
              res.json();
              setError("Something went wrong: " + res.statusText);
              return
            }
          });
          e.preventDefault();
        }}
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-[#666666] dark:border-[#888888] w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border rounded-md appearance-none dark:text-white sm:text-sm dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
          placeholder="you@example.com"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
          >
            Subscribe
          </button>
        </div>
      </form>
      {error && (
        <span className="flex mt-4 text-red dark:red">
          <p className="text-red dark:red">{error}</p>
        </span>
      )}
    </>
  );
};

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  return (
    <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#1f1d2b]">
      <div className="absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-2 px-4 flex gap-2",
          menu ? "flex" : "hidden"
        )}
      >
        <ThemeSwitch />
      </div>
      <hr className="dark:border-neutral-800" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white",
          "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
