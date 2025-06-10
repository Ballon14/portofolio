import React from "react"
import BoxSocial from "../components/commons/atoms/BoxSocial"
import HeroBanner from "../components/commons/molecules/HeroBanner"

const ContactPage = () => {
    return (
        <section>
            <HeroBanner />
            <div className="mt-14 text-left text-(--text-color-black)">
                <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
                    Contact Me
                </h1>
                <p className="text-lg">
                    Silahkan hubungi saya melalui media sosial di bawah ini
                </p>
                <div className="">

                </div>

                <BoxSocial />
            </div>
        </section>
    )
}

export default ContactPage
