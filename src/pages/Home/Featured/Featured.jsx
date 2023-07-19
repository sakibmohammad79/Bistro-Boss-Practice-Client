import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item bg-fixed py-4 mb-16">
            <SectionTitle heading={"Featured Item"} subHeading={"Check it out"}></SectionTitle>
            <div className="md:flex justify-center items-center gap-4 md:gap-8 md:px-24 md:py-16">
                <img className="w-[450px] h-[300px]" src={featuredimg} alt="" />
                <div className="text-white">
                    <p className="text-lg font-bold">20 July, 2023</p>
                    <p className="uppercase font-medium">Where I Can get some?</p>
                    <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quibusdam, maiores in recusandae asperiores repellendus debitis placeat odit praesentium temporibus animi a aliquam aspernatur quis incidunt culpa itaque velit earum, illum iure voluptatem perspiciatis mollitia quod corrupti. Pariatur adipisci itaque vero tempore repellendus iusto possimus numquam, totam sit ullam. Dolorem!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;