import LinkLine from '@/components/ui/LinkLine'
import { socialLinks } from '@/lib/data/links'

export default function MobileMenuSocialLinks() {
    const links = Object.keys(socialLinks).map((link) => socialLinks[link as keyof typeof socialLinks])

    return (
        <div className="mt-12">
            <div className="text-label-sm font-label uppercase mb-4">
                +Connect
            </div>
            <div className="flex flex-col gap-6">
                <ul className="flex flex-col gap-4 mt-16">
                    {links.map((link) => (
                        <li key={link.href}>
                            <LinkLine
                                href={link.href}
                                label={link.label}
                                target="_blank"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
