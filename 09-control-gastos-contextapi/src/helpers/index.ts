export function formatCurrency(quantity: number) {
   return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
   }).format(quantity);
}

export function formatDate(dateStr: string): string {
   const dateObj = new Date(dateStr);
   const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
   };
   return new Intl.DateTimeFormat("es-ES", options).format(dateObj);
}
