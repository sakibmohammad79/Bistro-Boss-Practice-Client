
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-4/12 text-center mx-auto my-8">
            <p className="text-yellow-600 pb-2 italic">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;