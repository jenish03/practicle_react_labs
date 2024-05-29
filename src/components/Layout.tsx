import { Link } from "react-router-dom";
import { Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
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
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            to="/counter"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Counter
          </Link>
          <Link
            to="/user-form"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            User Form
          </Link>
          <Link
            to="/rich-text-edior"
            className="text-muted-foreground transition-colors hover:text-foreground"
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
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link to="/" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                to="/counter"
                className="text-muted-foreground hover:text-foreground"
              >
                Counter
              </Link>
              <Link
                to="/user-form"
                className="text-muted-foreground hover:text-foreground"
              >
                User Form
              </Link>
              <Link
                to="/rich-text-edior"
                className="text-muted-foreground hover:text-foreground"
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
