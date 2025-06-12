import React from "react"
import BoxSocial from "../components/commons/atoms/BoxSocial"
import HeroBanner from "../components/commons/molecules/HeroBanner"

const ProjectPage = () => {
    return (
        <section>
            <HeroBanner />
            <div className="mt-14 text-left text-(--text-color-black)">
                <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
                    Project Page
                </h1>
                <p className="text-lg">Project list</p>
                <div className="flex flex-wrap flex-row gap-5 align-center justify-center items-center">
                    <div className="w-full max-w-150 rounded-4xl px-6 py-6 mt-4 bg-gray-200 shadow-xl not-first ">
                        <div className="flex flex-col items-center justify-between">
                            <h2 className="text-2xl font-bold underline">
                                Project 1
                            </h2>
                            <img
                                src="images/hero.png"
                                alt="Jrakah Tax Images"
                                className="w-100 rounded-2xl m-3 cursor-pointer"
                            />
                            <a
                                href="https://iqbaldev.site/tax"
                                className="font-bold text-3xl text-orange-400 hover:text-orange-600 hover:underline"
                            >
                                Jrakah Tax
                            </a>
                            <p className="font-semibold text-xl">Description</p>
                            <p className="text-lg">
                                Jrakah Tax is a digital system designed to
                                streamline the monitoring and recapitulation of
                                land and building tax (PBB) payments in the
                                Jrakah area. This platform allows both officials
                                and residents to easily access information
                                regarding tax amounts, payment statuses (paid or
                                unpaid), and taxpayer details in a transparent
                                and accurate manner. With its modern and
                                responsive interface, Jrakah Tax aims to improve
                                tax administration efficiency and encourage
                                active public participation in fulfilling tax
                                obligations on time.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2 mb-2">
                                <a
                                    href="#"
                                    className="text-lg bg-blue-600 px-2 py-1 text-white rounded-3xl"
                                >
                                    PHP Native
                                </a>
                                <a
                                    href="#"
                                    className="text-lg bg-yellow-600 px-2 py-1 text-white rounded-3xl"
                                >
                                    Javascript
                                </a>
                                <a
                                    href="#"
                                    className="text-lg bg-blue-600 px-2 py-1 text-white rounded-3xl"
                                >
                                    Tailwind CSS
                                </a>
                                <a
                                    href="#"
                                    className="text-lg bg-blue-600 px-2 py-1 text-white rounded-3xl"
                                >
                                    MySQL
                                </a>
                            </div>
                            <a
                                href="https://iqbaldev.site/tax"
                                className="font-bold text-xl text-(--text-color-black) hover:text-orange-600 hover:underline"
                            >
                                View Project =
                                <p className="fa fa-chevron-right rotate-x-180"></p>
                            </a>
                        </div>
                    </div>
                    <div className="w-full max-w-150 rounded-4xl px-6 py-6 mt-4 bg-gray-200 shadow-xl">
                        <div className="flex flex-col items-center justify-between">
                            <h2 className="text-2xl font-bold">Project 1</h2>
                            <img
                                src="images/hero.png"
                                alt="Jrakah Tax Images"
                                className="w-100 rounded-2xl m-3"
                            />
                            <a
                                href="https://iqbaldev.site/tax"
                                className="font-bold text-3xl text-orange-400 hover:text-orange-600 hover:underline"
                            >
                                Jrakah Tax
                            </a>
                            <p className="font-semibold text-xl">Description</p>
                            <p className="text-lg">
                                Jrakah Tax is a digital system designed to
                                streamline the monitoring and recapitulation of
                                land and building tax (PBB) payments in the
                                Jrakah area. This platform allows both officials
                                and residents to easily access information
                                regarding tax amounts, payment statuses (paid or
                                unpaid), and taxpayer details in a transparent
                                and accurate manner. With its modern and
                                responsive interface, Jrakah Tax aims to improve
                                tax administration efficiency and encourage
                                active public participation in fulfilling tax
                                obligations on time.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2 mb-2">
                                <a
                                    href="#"
                                    className="text-lg bg-blue-600 px-2 py-1 text-white rounded-3xl"
                                >
                                    PHP Native
                                </a>
                                <a
                                    href="#"
                                    className="text-lg bg-yellow-600 px-2 py-1 text-white rounded-3xl"
                                >
                                    Javascript
                                </a>
                                <a
                                    href="#"
                                    className="text-lg bg-blue-600 px-2 py-1 text-white rounded-3xl"
                                >
                                    Tailwind CSS
                                </a>
                                <a
                                    href="#"
                                    className="text-lg bg-blue-600 px-2 py-1 text-white rounded-3xl"
                                >
                                    MySQL
                                </a>
                            </div>
                            <a
                                href="https://iqbaldev.site/tax"
                                className="font-bold text-xl text-(--text-color-black) hover:text-orange-600 hover:underline"
                            >
                                View Project =
                                <p className="fa fa-chevron-right rotate-x-180"></p>
                            </a>
                        </div>
                    </div>
                </div>
                <BoxSocial />
            </div>
        </section>
    )
}

export default ProjectPage
