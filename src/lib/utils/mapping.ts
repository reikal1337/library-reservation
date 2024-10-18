export const mapToPricingDTO = (
  item: ReservationItem
): ReservationItemPricing => {
  return {
    Type: item.type,
    Days: item.days,
    QuickPickUp: item.quickPickUp,
  };
};
