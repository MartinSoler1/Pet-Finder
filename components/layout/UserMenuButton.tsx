import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const UserMenuButton = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const { status } = useSession();

  return (
    <Menu as="div" className="relative sm:mx-5 mx-3 ">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
          <span className="sr-only">Open user menu</span>
          <UserCircleIcon className="h-10 w-10 text-gray-800 bg-white rounded-3xl" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {status != "authenticated" ? (
            <div>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/register"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Register
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="login"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Sign in
                  </a>
                )}
              </Menu.Item>
            </div>
          ) : (
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOut()}
                  className={classNames(
                    active ? "bg-gray-100 block w-full text-start" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenuButton;
