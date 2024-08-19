import MobileNav from "./mobile-nav";
const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="inline-flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Medical SaaS</span>
            <img
              alt="Medical SaaS Logo"
              src="/path-to-your-logo.svg" // Replace with your logo path
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
              <a href="/login">
                Login   
              </a>
        </div>
      </nav>
      <MobileNav />
    </header>
  );
}
