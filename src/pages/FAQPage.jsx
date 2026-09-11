import React from 'react'
import FAQTitle from '../components/FAQ/FAQTitle'
import FAQquestion from '../components/FAQ/FAQquestion'

const FAQPage = () => {

    return (
        <div className='container px-2 lg:px-0 mt-10 md:mt-20 max-w-232.5 mx-auto mb-17'>
            <h2 className='text-[20px] xs:text-[25px] sm:text-[30px] md:text-[35px] font-bold text-primary'>FREQUENTLY ASKED QUESTIONS</h2>
            <div>

                <FAQTitle title="Orders" />
                <FAQquestion Ftitle="Bring of had which their whose you're it own?"
                    Fdes="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

                    Stitle="Over shall air can't subdue fly divide him?"
                    Sdes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

                    Ttitle="Waters one you'll creeping?"
                    Tdes="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. " />
            </div>

            <div>

                <FAQTitle title="Shipping" />
                <FAQquestion Ftitle="How long does shipping take?"
                    Fdes="Orders ship within 1-2 business days. Standard delivery takes 3-5 business days, while express shipping arrives in 1-2 business days. You'll get a tracking number by email as soon as your order ships."

                    Stitle="Do you ship internationally?"
                    Sdes="Yes, we ship to over 40 countries. International delivery typically takes 7-14 business days depending on the destination, and any customs fees or import duties are the customer's responsibility."

                    Ttitle="Can I change my shipping address after ordering?"
                    Tdes="You can update your address within 1 hour of placing your order by contacting support. Once an order has entered processing, we're unable to redirect it. " />
            </div>

            <div>

                <FAQTitle title="Payment" />
                <FAQquestion Ftitle="What payment methods do you accept?"
                    Fdes="We accept Visa, Mastercard, American Express, PayPal, and Apple Pay. All transactions are encrypted and processed securely at checkout."

                    Stitle="Is it safe to save my card details?"
                    Sdes="Yes. We don't store your full card number on our servers — payments are handled by a PCI-compliant processor, and only a tokenized reference is kept for faster future checkout."

                    Ttitle="When will I be charged?"
                    Tdes="Your card is charged immediately when the order is placed, not when it ships. If an item is out of stock, we'll notify you and refund that portion right away." />
            </div>


        </div>
    )
}

export default FAQPage