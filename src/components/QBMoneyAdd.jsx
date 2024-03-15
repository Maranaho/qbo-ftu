import laptop from "../assets/png/laptop.png"

const QBMoneyAdd = () => {
    return (
        <div className="QBMoneyAdd">
            <img  src={laptop}/>
            <div className="qbMoney">
                <h2>QuickBooks Money</h2>
                <ul>
                    <li>Get a business bank account with no fees*</li>
                    <li>Stash cash in envelopes to earn 5.00% APY</li>
                    <li>Send invoices and get paid by credit card, Paypal, Venmo, and more</li>
                </ul>
                <p>Money movement services are provided by Intuit Payments Inc., licensed as Money Transmitter by the New York State department of Financial Services.</p>
                <p>Intuit is a technology company, not a Bank. Banking services provided by our partner, Green Dot Bank.</p>

                <p>* Other fees may apply to the bank account.</p>
            </div>
        </div>
    )
}
 
export default QBMoneyAdd