import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { VscAzure } from "react-icons/vsc";

type ListItemProps = {
  title: string;
  href: string;
  children: React.ReactNode;
};

// Reusable ListItem component
function ListItem({ title, href, children }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-lg p-3 hover:bg-gray-100 transition-all duration-300"
        >
          <div className="text-lg font-semibold">{title}</div>
          <p className="text-sm text-gray-500">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function NavItems() {
  const aboutSections = [
    {
      title: "Our Story",
      href: "/about/our-story",
      description:
        "Learn how our journey began and the values that drive our mission today.",
    },
    {
      title: "Our Mission",
      href: "/about/mission",
      description:
        "Discover our commitment to delivering top-notch services and solutions.",
    },
    {
      title: "Leadership Team",
      href: "/about/team",
      description:
        "Meet the dedicated team behind our innovative projects and success.",
    },
    {
      title: "Careers",
      href: "/about/careers",
      description:
        "Explore career opportunities and become part of our dynamic team.",
    },
  ];

  const templateSections = [
    {
      title: "Landing Pages",
      href: "/templates/landing-pages",
      description:
        "Modern and responsive landing page templates to boost your online presence.",
    },
    {
      title: "Dashboards",
      href: "/templates/dashboards",
      description:
        "Powerful dashboard templates with analytics and reporting features.",
    },
    {
      title: "E-commerce",
      href: "/templates/ecommerce",
      description:
        "Feature-rich e-commerce templates tailored for seamless shopping experiences.",
    },
    {
      title: "Portfolio",
      href: "/templates/portfolio",
      description:
        "Elegant and minimal portfolio templates to showcase your work beautifully.",
    },
  ];

  const serviceSections = [
    {
      title: "Web Development",
      href: "/services/web-development",
      description:
        "Custom web solutions using modern technologies like React, Next.js, and Node.js.",
    },
    {
      title: "UI/UX Design",
      href: "/services/ui-ux",
      description:
        "Creating intuitive and engaging user experiences through thoughtful design.",
    },
    {
      title: "SEO Optimization",
      href: "/services/seo",
      description:
        "Improve your website's visibility and ranking with our SEO expertise.",
    },
    {
      title: "Cloud Integration",
      href: "/services/cloud-integration",
      description:
        "Seamlessly integrate cloud solutions to enhance scalability and performance.",
    },
  ];

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem className="!bg-transparent">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} !bg-transparent`}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* About Us Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${navigationMenuTriggerStyle()} !bg-transparent`}
            >
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px] md:w-[400px] lg:w-[600px] ">
                {aboutSections.map((section) => (
                  <ListItem
                    key={section.title}
                    title={section.title}
                    href={section.href}
                  >
                    {section.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Templates Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${navigationMenuTriggerStyle()} !bg-transparent`}
            >
              Templates
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 ">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/templates"
                    >
                      <VscAzure className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        PayPath Templates
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Explore beautifully designed templates for various use
                        cases, ready to be integrated into your projects.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {templateSections.map((template) => (
                  <ListItem
                    key={template.title}
                    title={template.title}
                    href={template.href}
                  >
                    {template.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Services Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${navigationMenuTriggerStyle()} !bg-transparent`}
            >
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[600px]">
                {serviceSections.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Team */}
          <NavigationMenuItem>
            <Link href="/team" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} !bg-transparent`}
              >
                Team
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Contact Us */}
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} !bg-transparent`}
              >
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}
