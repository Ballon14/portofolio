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
                            <h2 className="text-2xl font-semibold">
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
                                <div className="flex flex-row gap-2 mt-2">
                                    <button className="relative flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                        <img
                                            src="icons/php.png"
                                            alt="php"
                                            className="absolute -top-2 h-20 w-20 rounded-full object-contain shadow-2xl"
                                        />
                                        <p className="mt-15 text-center text-sm leading-4 font-semibold">
                                            "PHP Native"
                                        </p>

                                        <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
                                            <i className="fa fa-arrow-up text-xs text-white"></i>
                                        </div>
                                    </button>
                                    <button className="relative flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                        <img
                                            src="icons/js.png"
                                            alt="php"
                                            className="absolute -top-2 h-20 w-20 rounded-full object-contain shadow-2xl"
                                        />
                                        <p className="mt-15 text-center text-sm leading-4 font-semibold">
                                            "JavaScript"
                                        </p>

                                        <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
                                            <i className="fa fa-arrow-up text-xs text-white"></i>
                                        </div>
                                    </button>
                                    <button className="relative flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                        <img
                                            src="icons/tailwind.png"
                                            alt="php"
                                            className="absolute -top-2 h-20 w-20 rounded-full object-contain shadow-2xl"
                                        />
                                        <p className="mt-15 text-center text-sm leading-4 font-semibold">
                                            "Tailwind CSS"
                                        </p>

                                        <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
                                            <i className="fa fa-arrow-up text-xs text-white"></i>
                                        </div>
                                    </button>
                                    <button className="relative flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                        <img
                                            src="icons/mysql.png"
                                            alt="php"
                                            className="absolute -top-2 h-20 w-20 rounded-full object-contain shadow-2xl"
                                        />
                                        <p className="mt-15 text-center text-sm leading-4 font-semibold">
                                            "MySQL"
                                        </p>

                                        <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
                                            <i className="fa fa-arrow-up text-xs text-white"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <a
                                href="https://iqbaldev.site/tax"
                                className="mt-5 font-bold text-xl text-(--text-color-black) hover:text-orange-600 hover:underline"
                            >
                                View Project =
                                <p className="fa fa-chevron-right rotate-x-180"></p>
                            </a>
                        </div>
                    </div>
                    <div className="w-full max-w-150 rounded-4xl px-6 py-6 mt-4 bg-gray-200 shadow-xl">
                        <div className="flex flex-col items-center justify-between">
                            <h2 className="text-2xl font-semibold">
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
                                <div className="flex flex-row gap-2 mt-2">
                                    <button className="relative flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                        <img
                                            src="icons/php.png"
                                            alt="php"
                                            className="absolute -top-2 h-20 w-20 rounded-full object-contain shadow-2xl"
                                        />
                                        <p className="mt-15 text-center text-sm leading-4 font-semibold">
                                            "PHP Native"
                                        </p>

                                        <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
                                            <i className="fa fa-arrow-up text-xs text-white"></i>
                                        </div>
                                    </button>
                                    <button className="relative flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                        <img
                                            src="icons/js.png"
                                            alt="php"
                                            className="absolute -top-2 h-20 w-20 rounded-full object-contain shadow-2xl"
                                        />
                                        <p className="mt-15 text-center text-sm leading-4 font-semibold">
                                            "JavaScript"
                                        </p>

                                        <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
                                            <i className="fa fa-arrow-up text-xs text-white"></i>
                                        </div>
                                    </button>
                                    <button className="relative flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                        <img
                                            src="icons/tailwind.png"
                                            alt="php"
                                            className="absolute -top-2 h-20 w-20 rounded-full object-contain shadow-2xl"
                                        />
                                        <p className="mt-15 text-center text-sm leading-4 font-semibold">
                                            "Tailwind CSS"
                                        </p>

                                        <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
                                            <i className="fa fa-arrow-up text-xs text-white"></i>
                                        </div>
                                    </button>
                                    <button className="relative flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                        <img
                                            src="icons/mysql.png"
                                            alt="php"
                                            className="absolute -top-2 h-20 w-20 rounded-full object-contain shadow-2xl"
                                        />
                                        <p className="mt-15 text-center text-sm leading-4 font-semibold">
                                            "MySQL"
                                        </p>

                                        <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
                                            <i className="fa fa-arrow-up text-xs text-white"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <a
                                href="https://iqbaldev.site/tax"
                                className="mt-5 font-bold text-xl text-(--text-color-black) hover:text-orange-600 hover:underline"
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
