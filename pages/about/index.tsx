import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="max-w-[800px] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/about</p>
          </div>
          <div>
            <h1 className="font-bold">Introduction</h1>
            <p className="text-sm leading-relaxed mt-5">
              Korok Security Collective is a team of highly skilled
              professionals focused on providing quick turnaround times and
              excellent communication for security audits, bug hunting, and
              security remediation. Led by @haruxeETH and @erc1337_coffee, who
              have an impressive background in identifying significant
              vulnerabilities in major protocols like OpenZeppelin, BAOFinance,
              and more.
            </p>
            <h1 className="mt-10 font-bold">Our Team</h1>
            <p className="text-sm leading-relaxed mt-5">
              @haruxeETH is an experienced programmer with a background in game
              development and web development. He has partnered with Immunefi to
              publish articles and also self-published articles on his own at{" "}
              <a
                href="https://mirror.xyz/haruxeETH"
                className="text-yellow-300"
              >
                https://mirror.xyz/haruxeETH
              </a>
              .
            </p>
            <p className="text-sm leading-relaxed mt-5">
              @erc1337_coffee has discovered a significant signature
              vulnerability in OpenZeppelin&apos;s core contracts, which put
              millions at risk. With a strong background in traditional web2
              security, he brings valuable expertise to the team.
            </p>
            <h1 className="mt-10 font-bold">Our Approach</h1>
            <p className="text-sm leading-relaxed mt-5">
              Korok Security Collective aims to streamline the process of
              security audits, bug hunting, and security remediation by
              maintaining open communication channels with the team and ensuring
              quick turnaround times. We believe in transparency and
              collaboration to provide the best possible solutions for our
              clients.
            </p>
            <h1 className="mt-10 font-bold">Get in Touch</h1>
            <p className="text-sm leading-relaxed mt-5">
              If you need our expertise or have any questions, feel free to
              reach out to us on our{" "}
              <a
                className="w-6 ml-auto my-auto text-yellow-300"
                href="https://discord.gg/Zydc7FtCs8"
              >
                Discord
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
