import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} BrandBounce All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="#" className="hover:text-brand-blue transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">
              LinkedIn
            </Link>
            <Link href="mailto:info@brandbounce.com" className="hover:text-brand-blue transition-colors">
              info@brandbounce.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
