
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 py-8">
            <p className="text-[#D99904] mb-2 italic text-lg">--- {subheading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 font-medium">{heading}</h3>
        </div>
    );
};

export default SectionTitle;