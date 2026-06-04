type PaymentLinkRecord = {
  amount: { toString(): string } | number | string;
  [key: string]: unknown;
};

export function serializePaymentLink<T extends PaymentLinkRecord>(link: T) {
  return {
    ...link,
    amount: Number(link.amount),
  };
}

export function serializePaymentLinks<T extends PaymentLinkRecord>(links: T[]) {
  return links.map(serializePaymentLink);
}

export function formatAmount(amount: number | string): string {
  return Number(amount).toFixed(2);
}

export function formatUsd(amount: number | string): string {
  return `$${formatAmount(amount)}`;
}
