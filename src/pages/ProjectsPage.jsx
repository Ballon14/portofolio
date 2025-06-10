import React from "react"
import BoxSocial from "../components/commons/atoms/BoxSocial"
import HeroBanner from "../components/commons/molecules/HeroBanner"

const ProjectPage = () => {
    return (
        <section>
            <HeroBanner />
            <div className="mt-14 text-left text-(--text-color-black)">
                <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
                    Contact Me
                </h1>
                <p className="text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, dicta quisquam. Quidem aliquid facere molestiae fuga vel eveniet ad! Soluta non tempore aut voluptatem architecto nulla, officia veritatis cum quam!
                </p>

                <BoxSocial />
            </div>
        </section>
    )
}

export default ProjectPage
