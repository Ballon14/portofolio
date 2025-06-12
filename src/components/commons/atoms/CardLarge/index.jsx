import React from "react"
import RoundedImg from "../../atoms/RoundedImg"

const CardLarge = ({ img, text, tech, title, onClick, websiteUrl }) => {
    const viewButton = (additionalClasses = "") => {
        return (
            <button
                className={`relative z-10 mt-auto h-8 cursor-pointer truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 px-5 py-1 text-center text-sm font-semibold whitespace-nowrap text-white shadow-md backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/20 ${additionalClasses}`}
                onClick={onClick}
                type="button"
                aria-label={`Discover more about ${title}`}
            >
                Discover More
            </button>
        )
    }

    const websiteButton = () => {
        const handleWebsiteClick = (e) => {
            if (!websiteUrl) {
                e.preventDefault()
                console.log("Website URL tidak tersedia")
                return
            }
            console.log("Mengarahkan ke:", websiteUrl)
        }

        // Fungsi untuk memastikan URL memiliki protokol
        const getValidUrl = (url) => {
            if (!url) return "#"

            // Jika sudah ada protokol, return as is
            if (url.startsWith("http://") || url.startsWith("https://")) {
                return url
            }

            // Jika belum ada protokol, tambahkan https://
            return `https://${url}`
        }

        return (
            <a
                href={getValidUrl(websiteUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-auto h-8 cursor-pointer truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 px-5 py-1 text-center text-sm font-semibold whitespace-nowrap text-white shadow-md backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/20 flex items-center justify-center no-underline"
                onClick={handleWebsiteClick}
                aria-label={`Visit website for ${title}`}
            >
                Visit Website
            </a>
        )
    }

    return (
        <div className="relative flex h-46 w-full justify-between rounded-4xl p-4 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img
                src={img}
                alt={title || "Card image"}
                className="absolute top-0 left-0 z-0 h-full w-full rounded-4xl object-cover shadow-md"
                loading="lazy"
            />

            <div className="relative z-10 flex max-w-[180px] flex-col items-start justify-start gap-2 text-left leading-4 text-white">
                <h3 className="font-semibold text-base">{title}</h3>
                <p className="line-clamp-3 text-xs leading-3">{text}</p>
            </div>

            <div className="relative z-10 flex flex-col items-end justify-between gap-2 pl-4 min-w-0">
                <div className="flex flex-wrap gap-1">
                    {tech &&
                        tech.length > 0 &&
                        tech.map((item, index) => (
                            <RoundedImg
                                key={`${item.name}-${index}`}
                                src={item.icon}
                                alt={item.name}
                                index={index}
                            />
                        ))}
                </div>

                <div className="flex flex-col gap-2">
                    {/* Website button - hanya tampil jika websiteUrl ada */}
                    {websiteUrl && websiteButton()}

                    {/* View button - selalu tampil */}
                    {viewButton()}
                </div>
            </div>
        </div>
    )
}

// Contoh penggunaan dengan data dari konstanta
export const ProjectsDisplay = () => {
    // Data projects
    const listProjects = [
        {
            id: 1,
            title: "Jrakah Tax",
            desc: "Jrakah Tax is a digital system designed to streamline the monitor and recapitulation of land and building tax (PBB) payment in the Jrakah area. This platform allows both officials and residents to easily access information regarding tax amounts, payment status (paid, process, and unpaid), and taxpayer details in a transparent and accurate manner.",
            background: "/images/bg-2.webp",
            list_tech: [
                { name: "PHP", icon: "/icons/php.png" },
                { name: "JavaScript", icon: "/icons/js.png" },
                { name: "Tailwind", icon: "/icons/tailwind.png" },
            ],
            websiteUrl: "iqbaldev.site/tax",
        },
        {
            id: 2,
            title: "Personal Developer Portfolio – GSAP & 3D UI",
            desc: "Created an animated portfolio site with GSAP scroll animations and interactive 3D sections using Three.js. Included custom-built CMS for easy content updates. Achieved Lighthouse performance score of 98+. Built with SEO, responsive design, and accessibility in mind.",
            background: "/images/bg-3.webp",
            list_tech: [
                { name: "React", icon: "/icons/react.svg" },
                { name: "Tailwind", icon: "/icons/tailwind.png" },
                { name: "JavaScript", icon: "/icons/js.png" },
            ],
            websiteUrl: "iqbaldev.site",
        },
    ]

    const handleDiscoverMore = (project) => {
        console.log("Discover more clicked for:", project.title)
        // Tambahkan logic untuk modal, routing, dll
        // Contoh: buka modal detail project
        // setSelectedProject(project);
        // setModalOpen(true);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
                My Projects
            </h2>

            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {listProjects.map((project) => (
                    <CardLarge
                        key={project.id}
                        img={project.background}
                        title={project.title}
                        text={project.desc}
                        tech={project.list_tech}
                        websiteUrl={project.websiteUrl}
                        onClick={() => handleDiscoverMore(project)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardLarge
