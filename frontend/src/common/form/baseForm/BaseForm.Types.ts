import { FormEvent, ReactNode } from "react";
import type { BoxProps } from '@mui/material';

type BaseFormProps = BoxProps & {
    children: ReactNode;
    onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export default BaseFormProps