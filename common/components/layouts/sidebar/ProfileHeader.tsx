import Link from "next/link";
import { MdVerified as VerifiedIcon } from "react-icons/md";

import ThemeToggle from "./ThemeToggle";
import IntlToggle from "./IntlToggle";
import Tooltip from "../../elements/Tooltip";
import Image from "next/image";

import cn from "@/common/libs/clsxm";

interface ProfileHeaderProps {
     expandMenu: boolean;
}

const ProfileHeader = ({ expandMenu }: ProfileHeaderProps) => {
     return (
          <div
               className={cn(
                    "flex w-full grow items-center gap-4 lg:flex-col  lg:gap-0.5",
                    expandMenu && "flex-col items-start!",
               )}
          >
               <div
                    className={cn(
                         "relative overflow-hidden rounded-full border-2 border-neutral-400 object-cover transition-all dark:border-neutral-600 lg:hover:scale-105",
                         expandMenu ? "h-20 w-20" : "h-10 w-10 lg:h-25 lg:w-25",
                    )}
               >
                    <Image
                         src={"/images/nuril.jpg"}
                         fill
                         sizes="(max-width: 1024px) 80px, 100px"
                         alt="Nuril Anwar Al Absory"
                         className="object-cover"
                         priority
                    />
               </div>

               <div className="mt-1 flex items-center gap-2 lg:mt-4">
                    <Link href="/" passHref>
                         <h2 className="grow text-lg font-medium lg:text-xl">
                              Nuril Anwar
                         </h2>
                    </Link>

                    <Tooltip title="Verified">
                         <VerifiedIcon size={18} className="text-blue-400" />
                    </Tooltip>
               </div>

               {/* <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
                    @abzhorrr
               </div> */}

               <div className="hidden justify-between gap-6 lg:mt-4 lg:flex">
                    <IntlToggle />
                    <ThemeToggle />
               </div>
          </div>
     );
};

export default ProfileHeader;
