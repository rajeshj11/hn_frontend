import { FiGithub } from "solid-icons/fi";
import { Accessor } from "solid-js";

export interface HeaderProps {
  algoliaLink: Accessor<string>;
}

export default function Header(props: HeaderProps) {
  return (
    <header class="flex py-[2px] px-2 min-h-[24px] items-center justify-between bg-[#ff6600]">
      <div class="flex">
        <a class="flex items-center" href="/">
          <span class="pr-2">
            <img
              src="https://cdn.trieve.ai/trieve-logo.png"
              alt="Trieve Logo"
              class="w-[18px] h-[18px] border border-white"
            />
          </span>
          <div class="text-wrap">
            <span class="font-bold mr-[5px]">Trieve HN Search</span>
          </div>
        </a>
        <a
          class="flex items-center hover:text-white"
          href="https://github.com/devflowinc/trieve"
        >
          <FiGithub class="h-3 w-3 mr-0.5" /> Star Us
        </a>
        <span class="px-1">|</span>
        <a href={props.algoliaLink()} class="hover:text-white">
          Try Algolia
        </a>
      </div>
      <a href="/analytics" class="pr-1 hover:text-white">
        View Analytics
      </a>
    </header>
  );
}
