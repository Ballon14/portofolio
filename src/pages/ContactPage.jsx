import React from "react"
import BoxSocial from "../components/commons/atoms/BoxSocial"
import HeroBanner from "../components/commons/molecules/HeroBanner"

const ContactPage = () => {
    return (
        <section>
            <HeroBanner />

            <div className="mt-14 text-left text-[--text-color-black]">
                <h1 className="text-black font-barlow text-4xl font-bold max-w-[370px] max-xl:w-[300px] max-xl:text-3xl">
                    Get In Touch
                </h1>

                <div className="flex flex-row gap-4 mt-10">
                    <div className="w-1/2 bg-gray-300 px-6 py-6 rounded-2xl">
                        <p className="text-lg">
                            Whether you're interested in collaboration, have
                            inquiries, or just want to get in touch — I'm
                            available and ready to respond.
                        </p>
                    </div>

                    <div className="w-1/2 bg-gray-200 px-6 py-6 rounded-2xl flex items-center">
                        <form className="flex flex-col w-full">
                            <p className="text-2xl text-black font-semibold mb-4">
                                Send us a message
                            </p>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-lg mb-1 text-black"
                                >
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-white px-4 py-2 rounded-2xl text-black"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-lg mb-1 text-black"
                                >
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-white px-4 py-2 rounded-2xl text-black"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-lg mb-1 text-black"
                                >
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full bg-white px-4 py-2 rounded-2xl text-black"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-2xl transition duration-300 ease-in-out self-center cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <BoxSocial />
        </section>
    )
}

export default ContactPage
