import React from "react"
import BoxSocial from "../components/commons/atoms/BoxSocial"
import HeroBanner from "../components/commons/molecules/HeroBanner"

const ContactPage = () => {
    return (
        <section>
            <HeroBanner />
            <div className="mt-14 text-left text-(--text-color-black)">
                <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
                    Get In Touch
                </h1>
                <div className="flex flex-row gap-1 mt-10">
                    <div className="w-1/2 bg-gray-300 px-3 py-3 rounded-2xl">
                        <p className="text-lg">
                            Whether you're interested in collaboration, have
                            inquiries, or just want to get in touch — I’m
                            available and ready to respond
                        </p>
                    </div>
                    <div className="w-1/2 bg-gray-200 px-3 py-3 rounded-2xl align-items-center justify-center text-align-center">
                        <form action="" className="flex flex-col">
                            <p className="text-2xl font-semibold">
                                Send us a message
                            </p>
                            <label htmlFor="email" className="mt-3 text-lg">Email :</label>
                            <input type="email" name="email" id="email" className="m-0.5 bg-white px-2 py-2 rounded-2xl"/>
                            <label htmlFor="name">Name :</label>
                            <input type="text" name="name" id="name" />
                            <label htmlFor="message">Message :</label>
                            <textarea name="message" id="message" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
                <BoxSocial />
            </div>
        </section>
    )
}

export default ContactPage
