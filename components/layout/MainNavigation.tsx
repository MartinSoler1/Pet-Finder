import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Amatic_SC } from "@next/font/google";
import UserMenuButton from "./UserMenuButton";

const navTitle = Amatic_SC({
  subsets: ["latin"],
  weight: ["700"],
});

const navigation: { name: string; href: string; current: boolean }[] = [
  { name: "Missing Pets", href: "/", current: false },
  { name: "Add New Pet", href: "new-pet", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function MainNavigation() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-100 border-double border-b-4 border-black"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center">
              <h1
                className={`${navTitle.className} text-black px-4 text-3xl sm:text-5xl font-mono font-medium`}
              >
                Pet Finder
              </h1>
              <div className="flex ml-48 items-center sm:hidden">
                <Disclosure.Button className="items-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div
                        className={classNames(
                          item.current
                            ? "bg-gray-200 text-gray-800"
                            : "text-black hover:bg-gray-700 text-xl hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        key={item.name}
                      >
                        <Link
                          href={item.href}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <UserMenuButton />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-0 pt-0">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default MainNavigation;
