import Link from "next/link";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header(){
    return(
        <header className="sticky top-0 z-50 w-full border-b bg-[#562626] text-white">

            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold pl-4">Aggie Finals</span>
                    </Link>
                </div>
            </div>
        </header>



    );
}