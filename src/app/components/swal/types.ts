export interface IFeedback {
  title: string;
  text: string;
  type?: "success" | "error" | "warning" | "info" | "question";
  showCancel?: boolean; 
  cancelText?: string;
  confirmText?: string;
}