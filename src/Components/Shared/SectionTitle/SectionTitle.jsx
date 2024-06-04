

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
            <p className="text-yellow-600 my-2">---{subHeading}---</p>
        </div>
    );
};

export default SectionTitle;