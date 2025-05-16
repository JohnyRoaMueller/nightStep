import { FormEvent, ReactNode } from "react";

interface BaseFormProps {
    children: ReactNode;
    onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export default BaseFormProps