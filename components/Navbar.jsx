"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar({
  logo,
  brandName = "Tu Logo",
  promotions = [],
  ctaText = "Conviértete en socio mayorista",
  onCtaClick
}) {
  return (
    <div className="w-full px-6 py-4 border-b">
      <NavigationMenu className="max-w-screen-xl mx-auto flex justify-between items-center">
        <NavigationMenuList>
          <NavigationMenuItem className="flex items-center gap-2">
            {logo || (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="currentColor" />
              </svg>
            )}
            <span className="font-bold text-xl">{brandName}</span>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Promociones</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[400px]">
                <ul>
                  {promotions.length > 0 ? (
                    promotions.map((promo, index) => (
                      <li key={index}>{promo}</li>
                    ))
                  ) : (
                    <>
                      <li>Promoción 1</li>
                      <li>Promoción 2</li>
                      <li>Promoción 3</li>
                    </>
                  )}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        <div className="flex items-center gap-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={`${navigationMenuTriggerStyle()} bg-primary text-primary-foreground`}
                onClick={onCtaClick}
              >
                {ctaText}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <ThemeToggle />
        </div>
      </NavigationMenu>
    </div>
  )
} 