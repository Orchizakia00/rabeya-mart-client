import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";


const Faq = () => {
    return (
        <div className="mb-10">
            <SectionTitle heading={'faq'} subHeading={'Frequently Asked Questions'}></SectionTitle>
            <div className="max-w-4xl mx-auto">
                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is Rabeya Mart?</div>
                    <div className="collapse-content">
                        <p>Rabeya Mart is your one-stop online grocery store, offering a wide selection of fresh produce, pantry staples, and household essentials delivered straight to your door.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I place an order?</div>
                    <div className="collapse-content">
                        <p>Simply browse our categories, add items to your cart, and proceed to checkout. It’s fast and easy!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
                    <div className="collapse-content">
                        <p>We accept online payments via credit/debit cards, mobile wallets, and cash on delivery.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I modify or cancel my order?</div>
                    <div className="collapse-content">
                        <p>Yes, you can modify or cancel your order within 30 minutes of placing it by contacting our support team.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What should I do if my order is delayed?</div>
                    <div className="collapse-content">
                        <p>Please contact our customer support team with your order number, and we’ll assist you promptly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;