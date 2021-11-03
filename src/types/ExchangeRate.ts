export default interface Exchange_Rate {
  ticker: {
    base: string;
    target: string;
    price: number;
    volume: number;
    change: number;
  };
  timestamp: number;
  success: boolean;
  error: string;
}
