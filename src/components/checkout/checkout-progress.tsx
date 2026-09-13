const steps = ["Cart", "Information", "Shipping", "Payment", "Confirmation"];

export function CheckoutProgress({ current }: { current: number }) {
  return (
    <nav className="checkout-progress" aria-label="Checkout progress">
      <ol>
        {steps.map((step, index) => {
          const number = index + 1;
          return (
            <li key={step} data-state={number === current ? "current" : number < current ? "complete" : "upcoming"}>
              <span aria-hidden="true">{number}</span>
              <p aria-current={number === current ? "step" : undefined}>{step}</p>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
