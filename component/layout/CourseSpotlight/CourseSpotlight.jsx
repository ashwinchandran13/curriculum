import styles from './CourseSpotlight.module.scss';
import Image from 'next/image'

export default function CourseSpotlight({contents}) {
    let bg = contents.bgimage;
    console.log(bg);
    return (
        <section className={`${styles.spotlight} ${contents.bgimage}`} style={{ "--bgcolor": `${contents.bgcolor}` }}>
            <div className="container container--small">
                <div className="md:flex items-center justify-between">
                    <div className="md:w-5/12">
                        <h2>{contents.title}</h2>
                        <a href="" className="btn btn--purple">
                            <span className="btn__text">{contents.buttonText}</span>
                        </a>
                    </div>
                    <div className="md:w-5/12">
                        <Image
                            src={contents.image}
                            alt={contents.alt}
                            width={contents.imageWidth}
                            height={contents.imageHeight}
                            layout = "fixed"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}