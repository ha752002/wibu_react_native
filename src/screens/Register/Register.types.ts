export interface RegisterProps {
    email: string;
    password: string;
    ConfirmPassword: string;
    onChangeEmail: (email: string) => void;
    onChangePassword: (password: string) => void;
    onChangeConfirmPassword: (ConfirmPassword: string) => void;
    onLogin: () => void;
  }