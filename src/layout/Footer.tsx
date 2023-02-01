import Logo from "../components/Logo";
import phone from "../assets/img/phone.svg";
import { socialNetworks } from "../utils/socialNetworks"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div>

        <div>
          <Logo />
          <p>We sell custom products for all your needs. Packs and bulk products that you will enjoy.</p>
          <div>
            <img src={phone} alt="Phone icon" />
            <p>+1-202-555-0129</p>
          </div>
          <div>
            {socialNetworks.map(el => (
              <a href={el.url} key={el.name}>
                <img src={el.icon} alt={el.name} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3>
            Our Company
          </h3>
          <Link to="">
            About Us
          </Link>
          <Link to="">
            FAQ
          </Link>
          <Link to="">
            PartnerShips
          </Link>
          <Link to="">
            Sustainability
          </Link>
          <Link to="">
            Blog
          </Link>
        </div>

        <div>
          <h3>
            How can we help
          </h3>
          <Link to="">
            Place a ticket
          </Link>
          <Link to="">
            Track your order
          </Link>
          <Link to="">
            Help Center
          </Link>
        </div>

        <div>
          <h3>Information</h3>
          <Link to="">
            Contact Us
          </Link>
          <Link to="">
            Live Chat
          </Link>
          <Link to="">
            Privacy
          </Link>
          <Link to="">
            Terms of use
          </Link>
        </div>
      </div>


      <div>
        <p>© 2022 Customer Products. All rights reserved.</p>
        <div>
          <div>
            <label>Region:</label>
            <select name="region">
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
            </select>
          </div>
          <div>
            <label>Language:</label>
            <select name="language">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
