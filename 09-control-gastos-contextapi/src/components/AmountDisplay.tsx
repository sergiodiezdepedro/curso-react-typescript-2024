import { formatCurrency } from "../helpers";
type amountDisplayProps = {
   label?: string;
   amount: number;
};

export default function AmountDisplay({
   label,
   amount,
}: amountDisplayProps) {
   return (
      <p className="text-2xl text-blue-600 font-bold">
         {label && `${label}: `}
         <span className="font-black text-blue-950">
            {formatCurrency(amount)}
         </span>
      </p>
   );
}
