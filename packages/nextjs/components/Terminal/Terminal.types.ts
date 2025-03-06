export interface TerminalHeader {
  title: string;
  withCloseButton?: boolean;
}

export interface TerminalProps {
  header?: TerminalHeader;
  onClose?: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}
