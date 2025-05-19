import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";

function DropdownThread() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer text-white hover:text-gray-400 duration-100">
          •••
        </DropdownMenuTrigger>
        <DropdownMenuContent className="sm:max-w-[425px] p-3 bg-gray-200 ">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Hide</DropdownMenuItem>
          <DropdownMenuItem>Report</DropdownMenuItem>
          <DropdownMenuItem>Follow</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropdownThread;
