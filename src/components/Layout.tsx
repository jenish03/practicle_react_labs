import { Link } from "react-router-dom";
import { Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  // Get the current location object using useLocation
  const location = useLocation();
  // Access the pathname property of the location object to get the current route
  const currentRoute = location.pathname;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            to="/"
            className={clsx(
              "transition-colors hover:text-foreground",
              currentRoute === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Dashboard
          </Link>
          <Link
            to="/counter"
            className={clsx(
              "transition-colors hover:text-foreground",
              currentRoute === "/counter"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Counter
          </Link>
          <Link
            to="/user-form"
            className={clsx(
              "transition-colors hover:text-foreground",
              currentRoute === "/user-form"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            User Form
          </Link>
          <Link
            to="/user-details"
            className={clsx(
              "transition-colors hover:text-foreground",
              currentRoute === "/user-details"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            User Details
          </Link>
          <Link
            to="/rich-text-edior"
            className={clsx(
              "transition-colors hover:text-foreground",
              currentRoute === "/rich-text-edior"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Rich Text Editor
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                to="/"
                className={clsx(
                  "hover:text-foreground",
                  currentRoute === "/"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                Dashboard
              </Link>
              <Link
                to="/counter"
                className={clsx(
                  "hover:text-foreground",
                  currentRoute === "/counter"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                Counter
              </Link>
              <Link
                to="/user-form"
                className={clsx(
                  "hover:text-foreground",
                  currentRoute === "/user-form"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                User Form
              </Link>
              <Link
                to="/user-details"
                className={clsx(
                  "hover:text-foreground",
                  currentRoute === "/user-details"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                User Deails
              </Link>
              <Link
                to="/rich-text-edior"
                className={clsx(
                  "hover:text-foreground",
                  currentRoute === "/rich-text-edior"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                Rich Text Editor
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        {children}
      </main>
    </div>
  );
}
