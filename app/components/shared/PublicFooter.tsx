import { Link } from "react-router";

export function PublicFooter() {
  return (
    <footer className="w-full border-t bg-background py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-sm text-muted-foreground flex justify-between items-center">
        <span>
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/" className="underline hover:text-foreground">
            Clubstar
          </Link>
          . All rights reserved.
        </span>
        <span className="text-xs">Crafted with ❤️ by Andro</span>
      </div>
    </footer>
  );
}
