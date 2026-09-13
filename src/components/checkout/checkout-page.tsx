"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { formatPrice, storefront } from "@/content/storefront";
import { useCart } from "@/components/cart/cart-provider";
import { CheckoutProgress } from "./checkout-progress";

type Information = { email: string; firstName: string; lastName: string; phone: string };
type Shipping = { address: string; apartment: string; city: string; region: string; postalCode: string; country: string };
type InformationErrors = Partial<Record<keyof Information, string>>;
type ShippingErrors = Partial<Record<keyof Shipping, string>>;

const emptyInformation: Information = { email: "", firstName: "", lastName: "", phone: "" };
const emptyShipping: Shipping = { address: "", apartment: "", city: "", region: "", postalCode: "", country: "" };

function CheckoutSummary() {
  const { lines } = useCart();
  const subtotal = lines.reduce((total, line) => total + line.unitPriceMinor * line.quantity, 0);
  const currency = lines[0]?.currency ?? storefront.primaryProduct.currency;

  return (
    <aside className="checkout-summary" aria-labelledby="checkout-summary-title">
      <h2 id="checkout-summary-title">Order Summary</h2>
      <ul>{lines.map((line) => <li key={`${line.productId}-${line.editionId}`}><div className="checkout-summary__item"><span aria-hidden="true">N</span><div><h3>{line.productName}</h3><p>{line.editionLabel} · Qty {line.quantity}</p></div></div><strong>{formatPrice(line.unitPriceMinor * line.quantity, line.currency)}</strong></li>)}</ul>
      <dl><div><dt>Subtotal</dt><dd>{formatPrice(subtotal, currency)}</dd></div><div><dt>Shipping</dt><dd>Calculated later</dd></div><div><dt>Taxes</dt><dd>Calculated later</dd></div><div><dt>Total</dt><dd>{formatPrice(subtotal, currency)}</dd></div></dl>
      <p>{storefront.notice} No payment or order processing is connected.</p>
    </aside>
  );
}

export function CheckoutPage() {
  const { lines, hydrated } = useCart();
  const [step, setStep] = useState<2 | 3 | 4 | 5>(2);
  const [information, setInformation] = useState(emptyInformation);
  const [shipping, setShipping] = useState(emptyShipping);
  const [informationErrors, setInformationErrors] = useState<InformationErrors>({});
  const [shippingErrors, setShippingErrors] = useState<ShippingErrors>({});

  function submitInformation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors: InformationErrors = {};
    if (!information.email.trim()) errors.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(information.email)) errors.email = "Enter a valid email address.";
    if (!information.firstName.trim()) errors.firstName = "Enter your first name.";
    if (!information.lastName.trim()) errors.lastName = "Enter your last name.";
    if (!information.phone.trim()) errors.phone = "Enter your phone number.";
    setInformationErrors(errors);
    if (Object.keys(errors).length === 0) setStep(3);
  }

  function submitShipping(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors: ShippingErrors = {};
    if (!shipping.address.trim()) errors.address = "Enter a street address.";
    if (!shipping.city.trim()) errors.city = "Enter a city.";
    if (!shipping.region.trim()) errors.region = "Enter a state or region.";
    if (!shipping.postalCode.trim()) errors.postalCode = "Enter a postal code.";
    if (!shipping.country.trim()) errors.country = "Enter a country.";
    setShippingErrors(errors);
    if (Object.keys(errors).length === 0) setStep(4);
  }

  if (!hydrated) {
    return <div className="checkout-page"><Container><div className="checkout-loading" role="status">Loading your saved cart…</div></Container></div>;
  }

  if (lines.length === 0) {
    return (
      <div className="checkout-page">
        <Container>
          <CheckoutProgress current={2} />
          <div className="checkout-empty"><span aria-hidden="true">◇</span><h1>Your cart is empty</h1><p>Add a prototype item before entering checkout.</p><ButtonLink href="/shop">Return to Shop</ButtonLink></div>
        </Container>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Container>
        <CheckoutProgress current={step} />
        <div className="checkout-layout">
          <section className="checkout-workspace" aria-live="polite">
            {step === 2 && (
              <form noValidate onSubmit={submitInformation} aria-labelledby="information-title">
                <div className="checkout-step-heading"><p className="eyebrow">Step 1 of 4</p><h1 id="information-title">Information</h1><p>Used only in this page session. Nothing is sent or saved to local storage.</p></div>
                <div className="checkout-fields">
                  <div className="form-field form-field--full"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required value={information.email} onChange={(event) => setInformation({ ...information, email: event.target.value })} aria-invalid={Boolean(informationErrors.email)} aria-describedby={informationErrors.email ? "email-error" : undefined} />{informationErrors.email && <p id="email-error" className="form-error">{informationErrors.email}</p>}</div>
                  <div className="form-field"><label htmlFor="first-name">First name</label><input id="first-name" name="firstName" type="text" autoComplete="given-name" required value={information.firstName} onChange={(event) => setInformation({ ...information, firstName: event.target.value })} aria-invalid={Boolean(informationErrors.firstName)} aria-describedby={informationErrors.firstName ? "first-name-error" : undefined} />{informationErrors.firstName && <p id="first-name-error" className="form-error">{informationErrors.firstName}</p>}</div>
                  <div className="form-field"><label htmlFor="last-name">Last name</label><input id="last-name" name="lastName" type="text" autoComplete="family-name" required value={information.lastName} onChange={(event) => setInformation({ ...information, lastName: event.target.value })} aria-invalid={Boolean(informationErrors.lastName)} aria-describedby={informationErrors.lastName ? "last-name-error" : undefined} />{informationErrors.lastName && <p id="last-name-error" className="form-error">{informationErrors.lastName}</p>}</div>
                  <div className="form-field form-field--full"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" required value={information.phone} onChange={(event) => setInformation({ ...information, phone: event.target.value })} aria-invalid={Boolean(informationErrors.phone)} aria-describedby={informationErrors.phone ? "phone-error" : undefined} />{informationErrors.phone && <p id="phone-error" className="form-error">{informationErrors.phone}</p>}</div>
                </div>
                <div className="checkout-actions"><Link href="/cart">← Back to cart</Link><Button type="submit">Continue to Shipping</Button></div>
              </form>
            )}

            {step === 3 && (
              <form noValidate onSubmit={submitShipping} aria-labelledby="shipping-title">
                <div className="checkout-step-heading"><p className="eyebrow">Step 2 of 4</p><h1 id="shipping-title">Shipping</h1><p>Prototype address validation only. No shipping destinations or rates are confirmed.</p></div>
                <div className="checkout-fields">
                  <div className="form-field form-field--full"><label htmlFor="address">Address</label><input id="address" name="address" type="text" autoComplete="street-address" required value={shipping.address} onChange={(event) => setShipping({ ...shipping, address: event.target.value })} aria-invalid={Boolean(shippingErrors.address)} aria-describedby={shippingErrors.address ? "address-error" : undefined} />{shippingErrors.address && <p id="address-error" className="form-error">{shippingErrors.address}</p>}</div>
                  <div className="form-field form-field--full"><label htmlFor="apartment">Apartment or additional address <span>(optional)</span></label><input id="apartment" name="apartment" type="text" autoComplete="address-line2" value={shipping.apartment} onChange={(event) => setShipping({ ...shipping, apartment: event.target.value })} /></div>
                  <div className="form-field"><label htmlFor="city">City</label><input id="city" name="city" type="text" autoComplete="address-level2" required value={shipping.city} onChange={(event) => setShipping({ ...shipping, city: event.target.value })} aria-invalid={Boolean(shippingErrors.city)} aria-describedby={shippingErrors.city ? "city-error" : undefined} />{shippingErrors.city && <p id="city-error" className="form-error">{shippingErrors.city}</p>}</div>
                  <div className="form-field"><label htmlFor="region">State or region</label><input id="region" name="region" type="text" autoComplete="address-level1" required value={shipping.region} onChange={(event) => setShipping({ ...shipping, region: event.target.value })} aria-invalid={Boolean(shippingErrors.region)} aria-describedby={shippingErrors.region ? "region-error" : undefined} />{shippingErrors.region && <p id="region-error" className="form-error">{shippingErrors.region}</p>}</div>
                  <div className="form-field"><label htmlFor="postal-code">Postal code</label><input id="postal-code" name="postalCode" type="text" autoComplete="postal-code" required value={shipping.postalCode} onChange={(event) => setShipping({ ...shipping, postalCode: event.target.value })} aria-invalid={Boolean(shippingErrors.postalCode)} aria-describedby={shippingErrors.postalCode ? "postal-code-error" : undefined} />{shippingErrors.postalCode && <p id="postal-code-error" className="form-error">{shippingErrors.postalCode}</p>}</div>
                  <div className="form-field"><label htmlFor="country">Country</label><input id="country" name="country" type="text" autoComplete="country-name" required value={shipping.country} onChange={(event) => setShipping({ ...shipping, country: event.target.value })} aria-invalid={Boolean(shippingErrors.country)} aria-describedby={shippingErrors.country ? "country-error country-help" : "country-help"} /><p id="country-help" className="form-help">Prototype field; supported destinations are not yet defined.</p>{shippingErrors.country && <p id="country-error" className="form-error">{shippingErrors.country}</p>}</div>
                </div>
                <div className="checkout-actions"><button type="button" className="checkout-back" onClick={() => setStep(2)}>← Back to information</button><Button type="submit">Continue to Payment</Button></div>
              </form>
            )}

            {step === 4 && (
              <section className="payment-placeholder" aria-labelledby="payment-title">
                <p className="eyebrow">Step 3 of 4</p><h1 id="payment-title">Payment Provider Integration</h1>
                <div className="payment-placeholder__panel"><span aria-hidden="true">◇</span><p>Secure payment fields will be supplied by the selected payment provider after commerce requirements are approved.</p></div>
                <p className="payment-placeholder__explanation">This prototype does not collect card numbers, security codes, bank credentials, payment authorization, or identity documents. No transaction can be completed.</p>
                <div className="checkout-actions checkout-actions--payment"><button type="button" className="checkout-back" onClick={() => setStep(3)}>← Back to shipping</button><Button type="button" disabled>Place Order Unavailable</Button></div>
                <button type="button" className="confirmation-preview-link" onClick={() => setStep(5)}>Preview the confirmation placeholder</button>
              </section>
            )}

            {step === 5 && (
              <section className="confirmation-placeholder" aria-labelledby="confirmation-title">
                <span aria-hidden="true">◇</span><p className="eyebrow">Step 4 of 4</p><h1 id="confirmation-title">Confirmation Placeholder</h1><p className="confirmation-placeholder__lead">No order has been placed.</p><p>A real confirmation will only be available after payment, order processing and customer communication services are approved and connected.</p>
                <div className="checkout-actions"><button type="button" className="checkout-back" onClick={() => setStep(4)}>← Back to payment</button><ButtonLink href="/shop">Return to Shop</ButtonLink></div>
              </section>
            )}
          </section>
          <CheckoutSummary />
        </div>
      </Container>
    </div>
  );
}
