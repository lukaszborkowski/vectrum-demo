import React from "react";

export const Footer = () => {
  return (
    <footer class=" dark:bg-gray-900">
      <div class="mx-auto w-full max-w-6xl p-4 py-6 lg:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#quiz" class="hover:underline">
              KetoVibe™
            </a>
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=61562785215383"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />

              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
